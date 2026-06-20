import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";
import { PDFParse } from "pdf-parse";

export const runtime = "nodejs";
export const maxDuration = 30;

const maxFileSize = 12 * 1024 * 1024;

function cleanText(text: string) {
  return text
    .replace(/\r/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

export async function POST(request: Request) {
  let parser: PDFParse | null = null;

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Nie przesłano pliku PDF."
        },
        {
          status: 400
        }
      );
    }

    const isPdf =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      return NextResponse.json(
        {
          ok: false,
          message: "Prześlij plik w formacie PDF."
        },
        {
          status: 400
        }
      );
    }

    if (file.size > maxFileSize) {
      return NextResponse.json(
        {
          ok: false,
          message: "Plik jest za duży. Maksymalny rozmiar to 12 MB."
        },
        {
          status: 413
        }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    parser = new PDFParse({
      data: buffer
    });

    const result = await parser.getText();
    const text = cleanText(result.text || "");

    if (!text) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Nie udało się wyciągnąć tekstu. PDF może być skanem albo obrazem bez warstwy tekstowej."
        },
        {
          status: 422
        }
      );
    }

    return NextResponse.json({
      ok: true,
      fileName: file.name,
      pages: result.total,
      characters: text.length,
      text
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Nie udało się przetworzyć pliku PDF. Spróbuj użyć innego pliku albo mniejszego dokumentu."
      },
      {
        status: 500
      }
    );
  } finally {
    if (parser) {
      await parser.destroy();
    }
  }
}