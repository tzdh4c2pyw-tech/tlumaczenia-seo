import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Tłumaczenia poświadczone, sądowe i cyfrowe",
  description:
    "Najczęstsze pytania o tłumaczenia poświadczone dokumentów z Ukrainy, tłumaczenia dla sądu, Policji i Prokuratury oraz materiałów cyfrowych."
};

const faqSections = [
  {
    title: "Tłumaczenia poświadczone",
    items: [
      {
        question: "Kiedy potrzebne jest tłumaczenie poświadczone?",
        answer:
          "Tłumaczenie poświadczone jest zwykle potrzebne, gdy dokument ma zostać użyty oficjalnie: przed sądem, urzędem, organem ścigania, uczelnią, bankiem, kancelarią lub inną instytucją."
      },
      {
        question: "Czy każdy dokument z Ukrainy wymaga tłumaczenia poświadczonego?",
        answer:
          "Nie zawsze. Zależy to od celu użycia dokumentu. Jeżeli dokument ma być składany w instytucji publicznej albo w postępowaniu, tłumaczenie poświadczone jest często właściwym wyborem."
      },
      {
        question: "Czy można przesłać skan albo zdjęcie dokumentu?",
        answer:
          "Tak, do wstępnej oceny można przesłać skan albo zdjęcie. Przy dokumentach urzędowych warto zachować czytelność pieczęci, podpisów, numerów, dat i wszystkich stron dokumentu."
      }
    ]
  },
  {
    title: "Sąd, Policja i Prokuratura",
    items: [
      {
        question: "Jakie dokumenty są najczęściej tłumaczone na potrzeby postępowań?",
        answer:
          "Najczęściej są to postanowienia, wezwania, protokoły, zawiadomienia, akty stanu cywilnego, zaświadczenia, pełnomocnictwa, oświadczenia, umowy, korespondencja oraz załączniki do akt."
      },
      {
        question: "Czy tłumaczenie może dotyczyć materiałów dowodowych?",
        answer:
          "Tak. Zakres zależy od rodzaju materiału, celu użycia oraz tego, czy materiał ma zostać złożony jako załącznik, dowód, wydruk, opis albo część akt."
      }
    ]
  },
  {
    title: "Dowody cyfrowe i korespondencja",
    items: [
      {
        question: "Czy można tłumaczyć wiadomości z komunikatorów?",
        answer:
          "Tak, ale materiał powinien być uporządkowany. Przydatne są daty, nazwy uczestników, ciągłość rozmowy, zrzuty ekranu albo eksport korespondencji."
      },
      {
        question: "Czy tłumaczy się e-mail, SMS, BLIK albo opisy przelewów?",
        answer:
          "Tak. W tego typu materiałach ważne są daty, identyfikatory, kontekst rozmowy, oznaczenia nadawców, potwierdzenia oraz powiązanie z pozostałymi dokumentami."
      }
    ]
  },
  {
    title: "Wycena i przygotowanie materiału",
    items: [
      {
        question: "Od czego zależy wycena tłumaczenia?",
        answer:
          "Od języka, objętości, czytelności materiału, formy dokumentu, terminologii, liczby załączników oraz tego, czy potrzebna jest forma poświadczona."
      },
      {
        question: "Co przesłać do wstępnej oceny?",
        answer:
          "Najlepiej przesłać cały dokument albo kompletny zestaw materiałów, wskazać język, termin, cel użycia i instytucję, do której dokument ma trafić."
      }
    ]
  }
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    )
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 80% 0%, rgba(30, 64, 175, 0.22), transparent 32rem), linear-gradient(180deg, #111827 0%, #172033 55%, #101827 100%)",
        color: "#f8fafc"
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        style={{
          maxWidth: "78rem",
          margin: "0 auto",
          padding: "5rem 1.5rem 3rem"
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#c4b5fd",
            fontSize: "0.85rem",
            fontWeight: 900,
            letterSpacing: "0.22em",
            textTransform: "uppercase"
          }}
        >
          FAQ
        </p>

        <h1
          style={{
            margin: "1.1rem 0 0",
            maxWidth: "62rem",
            color: "#f8fafc",
            fontSize: "clamp(3rem, 8vw, 6.8rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.07em",
            fontWeight: 950
          }}
        >
          Najczęstsze pytania o tłumaczenia poświadczone, sądowe i cyfrowe
        </h1>

        <p
          style={{
            margin: "1.5rem 0 0",
            maxWidth: "58rem",
            color: "#cbd5e1",
            fontSize: "1.12rem",
            lineHeight: 1.8
          }}
        >
          Odpowiedzi dotyczą dokumentów z Ukrainy, materiałów dla sądu,
          Policji i Prokuratury, akt sprawy, dowodów cyfrowych, komunikatorów
          oraz wyceny tłumaczenia.
        </p>

        <nav
          aria-label="Najważniejsze działania"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.85rem",
            marginTop: "1.75rem"
          }}
        >
          <Link
            href="/kontakt"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              background: "#facc15",
              color: "#020617",
              padding: "0.9rem 1.15rem",
              fontSize: "0.95rem",
              fontWeight: 950,
              textDecoration: "none"
            }}
          >
            Przejdź do kontaktu
          </Link>

          <Link
            href="/dobierz-tlumaczenie"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              background: "rgba(15, 23, 42, 0.72)",
              color: "#ffffff",
              padding: "0.9rem 1.15rem",
              fontSize: "0.95rem",
              fontWeight: 950,
              textDecoration: "none"
            }}
          >
            Dobierz tłumaczenie
          </Link>

          <Link
            href="/poradniki"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              background: "rgba(255, 255, 255, 0.06)",
              color: "#e0e7ff",
              padding: "0.9rem 1.15rem",
              fontSize: "0.95rem",
              fontWeight: 950,
              textDecoration: "none"
            }}
          >
            Zobacz poradniki
          </Link>
        </nav>
      </section>

      <section
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "1rem 1.5rem 5rem"
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "1.25rem"
          }}
        >
          {faqSections.map((section) => (
            <section
              key={section.title}
              style={{
                borderRadius: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                background: "rgba(15, 23, 42, 0.56)",
                padding: "1.5rem",
                boxShadow: "0 24px 80px rgba(0, 0, 0, 0.22)"
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#ffffff",
                  fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.045em",
                  fontWeight: 950
                }}
              >
                {section.title}
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: "1rem",
                  marginTop: "1.25rem"
                }}
              >
                {section.items.map((item) => (
                  <article
                    key={item.question}
                    style={{
                      borderRadius: "1.4rem",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      background: "rgba(2, 6, 23, 0.36)",
                      padding: "1.25rem"
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: "#f8fafc",
                        fontSize: "1.3rem",
                        lineHeight: 1.22,
                        fontWeight: 950,
                        letterSpacing: "-0.025em"
                      }}
                    >
                      {item.question}
                    </h3>

                    <p
                      style={{
                        margin: "0.75rem 0 0",
                        color: "#cbd5e1",
                        fontSize: "1rem",
                        lineHeight: 1.8
                      }}
                    >
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1.5rem 5rem"
        }}
      >
        <div
          style={{
            borderRadius: "2rem",
            border: "1px solid rgba(250, 204, 21, 0.32)",
            background:
              "linear-gradient(135deg, rgba(250, 204, 21, 0.14), rgba(15, 23, 42, 0.86))",
            padding: "2rem"
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              lineHeight: 1,
              letterSpacing: "-0.055em",
              fontWeight: 950
            }}
          >
            Masz konkretne dokumenty do oceny?
          </h2>

          <p
            style={{
              margin: "1rem 0 0",
              maxWidth: "48rem",
              color: "#dbeafe",
              fontSize: "1.05rem",
              lineHeight: 1.8
            }}
          >
            Prześlij pliki albo opisz sprawę. Do wstępnej oceny wystarczy
            czytelny skan, zdjęcie lub komplet materiałów z informacją, gdzie
            dokument ma zostać użyty.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.85rem",
              marginTop: "1.5rem"
            }}
          >
            <Link
              href="/kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                background: "#facc15",
                color: "#020617",
                padding: "0.9rem 1.15rem",
                fontSize: "0.95rem",
                fontWeight: 950,
                textDecoration: "none"
              }}
            >
              Przejdź do kontaktu
            </Link>

            <Link
              href="/dobierz-tlumaczenie"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                background: "rgba(15, 23, 42, 0.72)",
                color: "#ffffff",
                padding: "0.9rem 1.15rem",
                fontSize: "0.95rem",
                fontWeight: 950,
                textDecoration: "none"
              }}
            >
              Dobierz tłumaczenie
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
