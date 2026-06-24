import Link from "next/link";

type InternalLinkItem = {
  title: string;
  href: string;
  eyebrow: string;
  description: string;
};

const links: InternalLinkItem[] = [
  {
    title: "Prawo karne, przestępstwa i akta",
    href: "/blog/prawo-karne-przestepstwa-i-akta",
    eyebrow: "Prawo karne",
    description:
      "Materiały procesowe, akta, zawiadomienia, protokoły, oszustwa, wyłudzenia i dokumenty dowodowe."
  },
  {
    title: "Sprawy cywilne i dokumenty",
    href: "/blog/sprawy-cywilne-i-dokumenty",
    eyebrow: "Sprawy cywilne",
    description:
      "Umowy, pełnomocnictwa, dokumenty rodzinne, spadkowe, załączniki i materiały składane w postępowaniu."
  },
  {
    title: "Sąd, Policja i Prokuratura",
    href: "/blog/policja-prokuratura-sad",
    eyebrow: "Organy",
    description:
      "Wezwania, akta, pisma, materiały dowodowe, dokumenty organów i kontekst postępowania."
  },
  {
    title: "Dowody cyfrowe i korespondencja",
    href: "/blog/dowody-cyfrowe-i-korespondencja",
    eyebrow: "Materiały cyfrowe",
    description:
      "Komunikatory, zrzuty ekranu, e-mail, SMS, BLIK, kryptowaluty, pliki PDF i chronologia rozmów."
  },
  {
    title: "Dokumenty z Ukrainy w postępowaniach",
    href: "/blog/tlumaczenia-dokumentow-z-ukrainy-w-postepowaniach",
    eyebrow: "Dokumenty z Ukrainy",
    description:
      "Dokumenty ukraińskie używane w Polsce: sąd, urząd, kancelaria, instytucja, sprawa karna albo cywilna."
  },
  {
    title: "Słownik prawno-tłumaczeniowy",
    href: "/blog/slownik-prawno-tlumaczeniowy",
    eyebrow: "Pojęcia",
    description:
      "Najważniejsze pojęcia związane z dokumentami, aktami, organami, dowodami i tłumaczeniem poświadczonym."
  },
  {
    title: "Poradniki praktyczne",
    href: "/poradniki",
    eyebrow: "Poradniki",
    description:
      "Praktyczne opracowania o dokumentach, korespondencji, dowodach cyfrowych i przygotowaniu materiałów."
  },
  {
    title: "Tematy eksperckie",
    href: "/tematy",
    eyebrow: "Tematy",
    description:
      "Główne obszary wiedzy: dokumenty, sądy, organy, sprawy procesowe i materiały cyfrowe."
  },
  {
    title: "Dobierz tłumaczenie",
    href: "/dobierz-tlumaczenie",
    eyebrow: "Nawigacja",
    description:
      "Pomoc w ustaleniu, jaki rodzaj tłumaczenia może być potrzebny do dokumentu albo sprawy."
  },
  {
    title: "Najczęstsze pytania",
    href: "/faq",
    eyebrow: "FAQ",
    description:
      "Odpowiedzi na pytania o dokumenty, tryb pracy, przesyłanie plików i zakres tłumaczenia."
  }
];

export default function InternalKnowledgeLinks() {
  return (
    <section
      aria-labelledby="internal-knowledge-links-title"
      style={{
        padding: "5rem 1.5rem",
        background:
          "linear-gradient(180deg, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.65))"
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <p
          style={{
            margin: 0,
            color: "#facc15",
            fontSize: "0.78rem",
            fontWeight: 900,
            letterSpacing: "0.22em",
            textTransform: "uppercase"
          }}
        >
          Powiązane opracowania
        </p>

        <h2
          id="internal-knowledge-links-title"
          style={{
            margin: "1.25rem 0 0",
            maxWidth: "56rem",
            color: "#ffffff",
            fontSize: "clamp(2.25rem, 5vw, 4rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            fontWeight: 950
          }}
        >
          Przejdź do właściwego kontekstu dokumentu, sprawy albo materiału.
        </h2>

        <p
          style={{
            margin: "1.5rem 0 0",
            maxWidth: "48rem",
            color: "#cbd5e1",
            fontSize: "1.05rem",
            lineHeight: 1.8
          }}
        >
          Te odnośniki łączą najważniejsze działy serwisu: blog, poradniki,
          tematy, dokumenty procesowe, organy, dowody cyfrowe i dokumenty z Ukrainy.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))",
            gap: "1rem",
            marginTop: "2rem"
          }}
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                minHeight: "100%",
                padding: "1.35rem",
                borderRadius: "1.35rem",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                background: "rgba(15, 23, 42, 0.72)",
                color: "#e2e8f0",
                textDecoration: "none",
                boxShadow: "0 22px 60px rgba(0, 0, 0, 0.22)"
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#fde68a",
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase"
                }}
              >
                {item.eyebrow}
              </span>

              <span
                style={{
                  display: "block",
                  marginTop: "0.85rem",
                  color: "#ffffff",
                  fontSize: "1.25rem",
                  lineHeight: 1.2,
                  fontWeight: 950
                }}
              >
                {item.title}
              </span>

              <span
                style={{
                  display: "block",
                  marginTop: "0.85rem",
                  color: "#cbd5e1",
                  fontSize: "0.96rem",
                  lineHeight: 1.65
                }}
              >
                {item.description}
              </span>

              <span
                style={{
                  display: "inline-flex",
                  marginTop: "1.15rem",
                  padding: "0.55rem 0.9rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#fde68a",
                  fontSize: "0.86rem",
                  fontWeight: 900
                }}
              >
                Otwórz
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
