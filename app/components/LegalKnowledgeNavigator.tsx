import Link from "next/link";

const paths = [
  {
    title: "Prawo karne",
    href: "/blog/prawo-karne-przestepstwa-i-akta",
    lead: "Sprawy karne, przestępstwa i akta.",
    details:
      "Protokoły, postanowienia, zawiadomienia, przestępstwa gospodarcze, oszustwa, wyłudzenia, fałszerstwa i materiały procesowe."
  },
  {
    title: "Sprawy cywilne",
    href: "/blog/sprawy-cywilne-i-dokumenty",
    lead: "Dokumenty cywilne, rodzinne i spadkowe.",
    details:
      "Rozwód, alimenty, spadek, pełnomocnictwo, umowa, oświadczenie, roszczenie, załączniki i dokument urzędowy."
  },
  {
    title: "Instytucje",
    href: "/blog/policja-prokuratura-sad",
    lead: "Sąd, Policja i Prokuratura.",
    details:
      "Dokumenty organów procesowych, wezwania, pisma, akta, załączniki, materiały składane w sądzie i postępowaniu przygotowawczym."
  },
  {
    title: "Dowody cyfrowe",
    href: "/blog/dowody-cyfrowe-i-korespondencja",
    lead: "Komunikatory, e-mail, SMS i pliki.",
    details:
      "Telegram, WhatsApp, Signal, e-mail, SMS, BLIK, kryptowaluty, pliki PDF, zrzuty ekranu i korespondencja."
  },
  {
    title: "Tłumaczenia ustne i konferencje",
    href: "/blog/tlumaczenia-ustne-i-konferencje",
    lead: "Spotkania, rozmowy formalne i terminologia.",
    details:
      "Przygotowanie agendy, materiałów, nazw własnych, skrótów, pojęć branżowych i glosariusza przed spotkaniem."
  },
  {
    title: "Dokumenty z Ukrainy",
    href: "/blog/tlumaczenia-dokumentow-z-ukrainy-w-postepowaniach",
    lead: "Dokumenty ukraińskie używane w Polsce.",
    details:
      "Dokumenty w sprawach karnych, cywilnych, urzędowych i instytucjonalnych, z uwzględnieniem celu użycia w Polsce."
  }
];

export default function LegalKnowledgeNavigator() {
  return (
    <section
      aria-labelledby="legal-knowledge-navigator-title"
      style={{
        padding: "5rem 1.5rem",
        background:
          "linear-gradient(180deg, rgba(15, 23, 42, 0.15), rgba(15, 23, 42, 0.72))"
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <p
          style={{
            margin: 0,
            color: "#94a3b8",
            fontSize: "0.95rem",
            fontWeight: 800,
            letterSpacing: "0.02em"
          }}
        >
          Ścieżki bloga eksperckiego
        </p>

        <h2
          id="legal-knowledge-navigator-title"
          style={{
            margin: "1.25rem 0 0",
            maxWidth: "54rem",
            color: "#f8fafc",
            fontSize: "clamp(2.1rem, 5vw, 4rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.055em",
            fontWeight: 950
          }}
        >
          Prawo karne, cywilne, sąd, Policja, Prokuratura i materiały dowodowe.
        </h2>

        <p
          style={{
            margin: "1.5rem 0 0",
            maxWidth: "50rem",
            color: "#cbd5e1",
            fontSize: "1.05rem",
            lineHeight: 1.85
          }}
        >
          Ten blok prowadzi do najważniejszych opracowań blogowych. Nie jest
          katalogiem usług — porządkuje wiedzę o dokumentach, aktach,
          korespondencji, sprawach procesowych, konferencjach i tłumaczeniach
          ustnych.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
            marginTop: "2.25rem"
          }}
        >
          {paths.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                minHeight: "100%",
                padding: "1.35rem",
                borderRadius: "1.5rem",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                background: "rgba(15, 23, 42, 0.72)",
                color: "#e2e8f0",
                textDecoration: "none",
                boxShadow: "0 24px 70px rgba(0, 0, 0, 0.24)"
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#fde68a",
                  fontSize: "0.72rem",
                  fontWeight: 950,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase"
                }}
              >
                {item.title}
              </span>

              <span
                style={{
                  display: "block",
                  marginTop: "0.85rem",
                  color: "#ffffff",
                  fontSize: "1.28rem",
                  lineHeight: 1.18,
                  fontWeight: 950
                }}
              >
                {item.lead}
              </span>

              <span
                style={{
                  display: "block",
                  marginTop: "0.85rem",
                  color: "#cbd5e1",
                  fontSize: "0.98rem",
                  lineHeight: 1.68
                }}
              >
                {item.details}
              </span>

              <span
                style={{
                  display: "inline-flex",
                  marginTop: "1.15rem",
                  padding: "0.55rem 0.9rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  color: "#fde68a",
                  fontSize: "0.86rem",
                  fontWeight: 950
                }}
              >
                Otwórz opracowanie
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
