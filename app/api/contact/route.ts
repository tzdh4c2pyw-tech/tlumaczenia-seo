import { NextResponse } from "next/server";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function formatField(label: string, value: string) {
  if (!value) {
    return "";
  }

  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e0d6;font-weight:700;width:210px;color:#1d2430;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e0d6;color:#2d3440;">
        ${escapeHtml(value).replaceAll("\n", "<br />")}
      </td>
    </tr>
  `;
}

function formatTextField(label: string, value: string) {
  if (!value) {
    return "";
  }

  return `${label}: ${value}\n`;
}

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO;
    const contactFrom =
      process.env.CONTACT_FROM || "Formularz <onboarding@resend.dev>";

    if (!resendApiKey || !contactTo) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Formularz nie jest jeszcze skonfigurowany. Brakuje zmiennych środowiskowych RESEND_API_KEY albo CONTACT_TO."
        },
        { status: 500 }
      );
    }

    const formData = await request.formData();

    const name = getString(formData, "name");
    const senderType = getString(formData, "senderType");
    const reply = getString(formData, "reply");
    const deadline = getString(formData, "deadline");
    const language = getString(formData, "language");
    const caseType = getString(formData, "caseType");
    const materialType = getString(formData, "materialType");
    const purpose = getString(formData, "purpose");
    const volume = getString(formData, "volume");
    const message = getString(formData, "message");

    if (!name || !reply || !message) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Uzupełnij wymagane pola: imię lub nazwa jednostki, dane do odpowiedzi oraz opis materiału."
        },
        { status: 400 }
      );
    }

    const files = formData
      .getAll("attachments")
      .filter((file): file is File => file instanceof File && file.size > 0);

    const maxTotalBytes = 8 * 1024 * 1024;
    const totalBytes = files.reduce((sum, file) => sum + file.size, 0);

    if (totalBytes > maxTotalBytes) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Załączniki są zbyt duże. Limit formularza wynosi 8 MB. Przy większych aktach opisz materiał w formularzu, a sposób przekazania plików zostanie ustalony po wstępnej ocenie."
        },
        { status: 400 }
      );
    }

    const attachments = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();

        return {
          filename: file.name,
          content: Buffer.from(arrayBuffer).toString("base64")
        };
      })
    );

    const subjectParts = [
      "Wycena tłumaczenia",
      language || "język do oceny",
      senderType || "zgłoszenie"
    ];

    const subject = subjectParts.join(" | ");

    const html = `
      <div style="font-family:Arial,sans-serif;background:#f8f2e7;padding:24px;color:#10131a;">
        <div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #e5e0d6;border-radius:18px;overflow:hidden;">
          <div style="background:#101723;color:#f8f2e7;padding:24px;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#e1bd73;font-weight:700;">
              Formularz wstępnej oceny
            </p>
            <h1 style="margin:0;font-size:26px;line-height:1.2;">
              Nowe zgłoszenie do wyceny tłumaczenia
            </h1>
          </div>

          <div style="padding:24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              ${formatField("Imię / jednostka", name)}
              ${formatField("Typ zgłaszającego", senderType)}
              ${formatField("Dane do odpowiedzi", reply)}
              ${formatField("Termin", deadline)}
              ${formatField("Język materiału", language)}
              ${formatField("Rodzaj sprawy", caseType)}
              ${formatField("Forma materiału", materialType)}
              ${formatField("Cel tłumaczenia", purpose)}
              ${formatField("Objętość", volume)}
              ${formatField("Opis materiału", message)}
              ${formatField(
                "Załączniki",
                files.length
                  ? files
                      .map((file) => `${file.name} (${file.size} B)`)
                      .join(", ")
                  : "brak załączników"
              )}
            </table>

            <p style="margin:24px 0 0;color:#6d7380;font-size:13px;line-height:1.5;">
              Wiadomość została wysłana z formularza na stronie tlumaczenia-seo.vercel.app.
              Adres docelowy nie jest wyświetlany publicznie na stronie.
            </p>
          </div>
        </div>
      </div>
    `;

    const text = [
      "Nowe zgłoszenie do wyceny tłumaczenia",
      "",
      formatTextField("Imię / jednostka", name),
      formatTextField("Typ zgłaszającego", senderType),
      formatTextField("Dane do odpowiedzi", reply),
      formatTextField("Termin", deadline),
      formatTextField("Język materiału", language),
      formatTextField("Rodzaj sprawy", caseType),
      formatTextField("Forma materiału", materialType),
      formatTextField("Cel tłumaczenia", purpose),
      formatTextField("Objętość", volume),
      formatTextField("Opis materiału", message),
      formatTextField(
        "Załączniki",
        files.length
          ? files.map((file) => `${file.name} (${file.size} B)`).join(", ")
          : "brak załączników"
      )
    ].join("");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: contactFrom,
        to: [contactTo],
        subject,
        html,
        text,
        attachments
      })
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();

      return NextResponse.json(
        {
          ok: false,
          message:
            "Nie udało się wysłać formularza. Sprawdź konfigurację RESEND_API_KEY, CONTACT_TO i CONTACT_FROM.",
          details: errorText
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Zgłoszenie zostało wysłane. Materiał trafił do wstępnej oceny."
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie."
      },
      { status: 500 }
    );
  }
}