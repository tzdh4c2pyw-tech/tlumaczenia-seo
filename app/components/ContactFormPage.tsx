"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import "./contact-form.css";

const languages = [
  "język ukraiński",
  "język rosyjski",
  "język angielski",
  "kilka języków",
  "nie wiem / proszę o rozpoznanie języka"
];

const senderTypes = [
  "osoba prywatna",
  "sąd",
  "Policja",
  "prokuratura",
  "organ ścigania",
  "urząd / instytucja publiczna",
  "kancelaria prawna",
  "firma",
  "inna jednostka"
];

const caseTypes = [
  "dokument prywatny",
  "dokument urzędowy",
  "dokument z Ukrainy",
  "dokument rosyjskojęzyczny",
  "dokument angielski",
  "sprawa sądowa",
  "sprawa karna",
  "sprawa cywilna",
  "sprawa rodzinna",
  "sprawa gospodarcza",
  "sprawa administracyjna",
  "czynności policyjne",
  "postępowanie prokuratorskie",
  "akta sprawy",
  "materiał dowodowy",
  "IT / cyber / forensic",
  "BLIK / oszustwo internetowe",
  "kryptowaluty",
  "komunikatory / zrzuty ekranu",
  "inne"
];

const materialTypes = [
  "PDF",
  "skan",
  "zdjęcie dokumentu",
  "dokument papierowy",
  "zrzuty ekranu",
  "korespondencja",
  "komunikator",
  "SMS",
  "e-mail",
  "raport",
  "akta sprawy",
  "protokół",
  "wyrok / postanowienie",
  "umowa",
  "pełnomocnictwo",
  "dokument urzędowy",
  "inny materiał"
];

const processSteps = [
  {
    title: "1. Opis materiału",
    text: "W pierwszej wiadomości wystarczy wskazać język, rodzaj dokumentu, termin oraz cel tłumaczenia."
  },
  {
    title: "2. Wstępna ocena",
    text: "Na podstawie opisu, skanu, zdjęcia albo pliku można określić zakres pracy, tryb realizacji i sposób dalszego przekazania materiału."
  },
  {
    title: "3. Realizacja",
    text: "Po ustaleniu zakresu tłumaczenie jest przygotowywane z uwzględnieniem charakteru dokumentu, jego odbiorcy i funkcji prawnej."
  }
];

export default function ContactFormPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setStatusMessage("Wysyłanie zgłoszenia...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setStatusMessage(
          result.message ||
            "Nie udało się wysłać formularza. Spróbuj ponownie."
        );
        return;
      }

      form.reset();
      setStatus("success");
      setStatusMessage(
        result.message ||
          "Zgłoszenie zostało wysłane. Materiał trafił do wstępnej oceny."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "Wystąpił błąd połączenia. Sprawdź internet i spróbuj ponownie."
      );
    }
  }

  return (
    <main>
      <div className="topbar">
        <nav className="nav">
          <Link className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span>
              <span className="brand-title">Wstępna ocena materiału</span>
              <span className="brand-subtitle">
                dokumenty · prawo · organy · cyber · forensic
              </span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Strona główna</Link>
            <Link href="/#jezyki">Języki</Link>
            <Link href="/#organy">Dla organów</Link>
            <Link href="/#prawo">Prawo</Link>
            <Link href="/blog">Baza wiedzy</Link>
            <Link className="nav-cta" href="/kontakt">
              Wyślij do wyceny
            </Link>
          </div>
        </nav>
      </div>

      <section className="contact-hero">
        <div className="contact-hero-main">
          <span className="eyebrow">Formularz wstępnej oceny</span>

          <h1>Prześlij materiał do oceny tłumaczeniowej.</h1>

          <p className="lead">
            Formularz służy do wstępnego opisania dokumentu, tekstu, skanu,
            zdjęcia, fragmentu akt, korespondencji albo materiału cyfrowego.
            Dotyczy tłumaczeń z języka ukraińskiego, rosyjskiego i angielskiego
            w sprawach urzędowych, sądowych, policyjnych, prokuratorskich,
            prawniczych, firmowych oraz technologicznych.
          </p>

          <div className="hero-mini-grid">
            <div>
              <strong>Języki</strong>
              <span>ukraiński, rosyjski, angielski</span>
            </div>
            <div>
              <strong>Odbiorcy</strong>
              <span>sądy, Policja, prokuratury, kancelarie, firmy</span>
            </div>
            <div>
              <strong>Materiał</strong>
              <span>dokumenty, akta, komunikatory, PDF, zrzuty</span>
            </div>
          </div>
        </div>

        <aside className="contact-hero-side">
          <div className="side-card">
            <h2>Nie trzeba ujawniać całej sprawy w pierwszej wiadomości.</h2>
            <p>
              Wystarczy ogólny opis materiału: język, liczba stron lub plików,
              termin, rodzaj dokumentu oraz informacja, czy tłumaczenie ma
              trafić do sądu, organu, urzędu, kancelarii, firmy albo innej
              instytucji.
            </p>
          </div>

          <div className="side-list">
            <div>Dokumenty prywatne, urzędowe, sądowe i procesowe.</div>
            <div>Materiały dla sądów, Policji, prokuratur i organów.</div>
            <div>Komunikatory, zrzuty ekranu, BLIK, krypto i cyber.</div>
            <div>Adres e-mail nie jest publikowany w treści strony.</div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Jak działa ocena</p>
            <h2>Najpierw zakres, potem właściwy tryb tłumaczenia.</h2>
          </div>
          <p>
            Ten formularz nie wymaga pełnego opisu sprawy. Jego celem jest
            ustalenie, z jakim materiałem mamy do czynienia i jak należy go
            przygotować do tłumaczenia.
          </p>
        </div>

        <div className="grid-3">
          {processSteps.map((step) => (
            <article className="card card-gold" key={step.title}>
              <span className="tag">Etap</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-block">
              <p className="section-label">Krok 1</p>
              <h2>Kto przekazuje materiał?</h2>

              <label>
                Imię, nazwa jednostki albo instytucji *
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="np. osoba prywatna, sąd, Policja, prokuratura, kancelaria, firma"
                />
              </label>

              <label>
                Typ zgłaszającego
                <select name="senderType" defaultValue="">
                  <option value="" disabled>
                    Wybierz kategorię
                  </option>
                  {senderTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                Dane do odpowiedzi *
                <input
                  name="reply"
                  type="text"
                  required
                  placeholder="Wpisz preferowaną formę kontaktu zwrotnego"
                />
              </label>

              <label>
                Termin
                <select name="deadline" defaultValue="">
                  <option value="" disabled>
                    Wybierz orientacyjny termin
                  </option>
                  <option>pilne</option>
                  <option>2–3 dni</option>
                  <option>do tygodnia</option>
                  <option>termin sądowy / urzędowy</option>
                  <option>termin do uzgodnienia</option>
                </select>
              </label>
            </div>

            <div className="form-block">
              <p className="section-label">Krok 2</p>
              <h2>Język i charakter sprawy</h2>

              <label>
                Język materiału
                <select name="language" defaultValue="">
                  <option value="" disabled>
                    Wybierz język
                  </option>
                  {languages.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                Rodzaj sprawy albo dokumentu
                <select name="caseType" defaultValue="">
                  <option value="" disabled>
                    Wybierz kategorię
                  </option>
                  {caseTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                Forma materiału
                <select name="materialType" defaultValue="">
                  <option value="" disabled>
                    Wybierz formę materiału
                  </option>
                  {materialTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                Cel tłumaczenia
                <input
                  name="purpose"
                  type="text"
                  placeholder="np. sąd, urząd, prokuratura, Policja, kancelaria, firma, uczelnia"
                />
              </label>
            </div>

            <div className="form-block">
              <p className="section-label">Krok 3</p>
              <h2>Opis materiału</h2>

              <label>
                Krótki opis dokumentu, tekstu albo materiału cyfrowego *
                <textarea
                  name="message"
                  rows={8}
                  required
                  placeholder="Przykład: dokument z Ukrainy do urzędu, protokół przesłuchania, wyrok, zrzuty ekranu z komunikatora, materiał w sprawie BLIK, kryptowalut, cyberoszustwa albo akta do sprawy sądowej."
                />
              </label>

              <label>
                Objętość
                <input
                  name="volume"
                  type="text"
                  placeholder="np. 2 strony, 15 stron PDF, 30 zrzutów ekranu, kilka plików"
                />
              </label>

              <label>
                Załączniki
                <input name="attachments" type="file" multiple />
              </label>

              <div className="file-box">
                <strong>Załączniki i pliki</strong>
                <span>
                  Formularz obsługuje niewielkie załączniki do łącznego limitu
                  8 MB. Przy większych aktach lub wielu plikach opisz materiał
                  w formularzu, a sposób przekazania plików zostanie ustalony po
                  wstępnej ocenie.
                </span>
              </div>

              <button
                className="button button-primary"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Wysyłanie..."
                  : "Prześlij materiał do wstępnej oceny"}
              </button>

              {statusMessage ? (
                <p
                  className={
                    status === "success"
                      ? "form-note form-note-success"
                      : status === "error"
                        ? "form-note form-note-error"
                        : "form-note"
                  }
                >
                  {statusMessage}
                </p>
              ) : null}
            </div>
          </form>

          <aside className="contact-aside">
            <div className="contact-card">
              <span className="tag">Dla organów</span>
              <h3>Sądy, Policja, prokuratury i organy ścigania.</h3>
              <p>
                Materiał można opisać ogólnie: rodzaj dokumentów, język,
                objętość, termin i charakter czynności. Nie ma potrzeby
                ujawniania danych wrażliwych w pierwszej wiadomości.
              </p>
            </div>

            <div className="contact-card">
              <span className="tag">Dla kancelarii</span>
              <h3>Dokumenty prawnicze i procesowe.</h3>
              <p>
                Formularz pozwala wskazać, czy materiał dotyczy sprawy karnej,
                cywilnej, rodzinnej, gospodarczej, administracyjnej albo
                dokumentacji klienta.
              </p>
            </div>

            <div className="contact-card">
              <span className="tag">Cyber / forensic</span>
              <h3>Materiał cyfrowy i ślad elektroniczny.</h3>
              <p>
                Komunikatory, zrzuty ekranu, raporty PDF, dane z telefonu, BLIK,
                kryptowaluty, scam, phishing i inne materiały cyfrowe można
                najpierw opisać bez przesyłania pełnej dokumentacji.
              </p>
            </div>

            <div className="contact-card">
              <span className="tag">Adres ukryty</span>
              <h3>Wysyłka przez formularz.</h3>
              <p>
                Formularz wysyła zgłoszenie na adres skonfigurowany po stronie
                serwera. Adres e-mail nie jest publikowany w treści strony.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="cta-box">
          <div>
            <p className="section-label">Materiały do oceny</p>
            <h2>Co można przekazać do wstępnej analizy?</h2>
            <p>
              Dokument urzędowy, akt stanu cywilnego, dyplom, zaświadczenie,
              pismo procesowe, wyrok, postanowienie, protokół, korespondencję,
              zrzuty ekranu, dane z komunikatora, raport PDF, dokumenty
              transakcyjne, materiał dotyczący BLIK, kryptowalut albo
              cyberoszustwa.
            </p>

            <div className="hero-actions">
              <Link className="button button-secondary" href="/blog">
                Przejdź do bazy wiedzy
              </Link>
              <Link
                className="button button-secondary"
                href="/tlumaczenia-dla-policji"
              >
                Zakres dla organów
              </Link>
            </div>
          </div>

          <div className="cta-panel">
            <strong>Wstępna wiadomość może być krótka</strong>
            <span>
              Wystarczy wskazać język, rodzaj dokumentu, liczbę stron lub
              plików, termin oraz cel tłumaczenia. Szczegóły można doprecyzować
              po pierwszej ocenie materiału.
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">
              Wstępna ocena materiału do tłumaczenia
            </span>
            <span className="footer-line">
              Dokumenty, akta, pisma, korespondencja i materiał cyfrowy.
            </span>
          </div>

          <div>
            <span className="footer-title">Zakres</span>
            <span className="footer-line">
              ukraiński · rosyjski · angielski · prawo · cyber · forensic
            </span>
          </div>

          <div>
            <span className="footer-title">Nawigacja</span>
            <Link className="footer-link" href="/">
              Wróć do strony głównej
            </Link>
            <br />
            <Link className="footer-link" href="/blog">
              Baza wiedzy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}