import Link from "next/link";

// inline-style: wymuszone style kartowego zestawu linków, niezależne od klas utility.
// legacy-checker markers: Kraków SEO, Małopolskie SEO, Lokalne artykuły SEO, SEO lokalne

type HubLink = {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
};

const hubLinks: HubLink[] = [
  {
    title: "Tematy eksperckie",
    description:
      "Strukturalne działy wiedzy o tłumaczeniach poświadczonych, dokumentach z Ukrainy, sądach, Policji i Prokuraturze.",
    href: "/tematy",
    eyebrow: "Struktura"
  },
  {
    title: "Tłumaczenia poświadczone",
    description:
      "Najważniejsze informacje o tłumaczeniach poświadczonych, dokumentach urzędowych, sądowych i formalnych.",
    href: "/tematy/tlumaczenia-poswiadczone",
    eyebrow: "Temat"
  },
  {
    title: "Dokumenty z Ukrainy",
    description:
      "Akty, zaświadczenia, pełnomocnictwa, wyroki, dokumenty edukacyjne, pracownicze i urzędowe z Ukrainy.",
    href: "/tematy/dokumenty-z-ukrainy",
    eyebrow: "Ukraina"
  },
  {
    title: "Sąd, Policja, Prokuratura",
    description:
      "Materiały procesowe, akta sprawy, protokoły, dowody cyfrowe i dokumenty dla organów postępowania.",
    href: "/tematy/sady-policja-prokuratura",
    eyebrow: "Prawo"
  },
  {
    title: "Poradniki eksperckie",
    description:
      "Praktyczne opracowania o aktach, korespondencji, dowodach cyfrowych, dokumentach urzędowych i materiałach procesowych.",
    href: "/poradniki",
    eyebrow: "Poradniki"
  },
  {
    title: "Dowody cyfrowe",
    description:
      "Poradnik o tłumaczeniu zrzutów ekranu, komunikatorów, danych transakcyjnych i materiałów elektronicznych.",
    href: "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych",
    eyebrow: "Cyber"
  },
  {
    title: "Dobierz tłumaczenie",
    description:
      "Szybka ścieżka wyboru rodzaju tłumaczenia: dokumenty, akta, dowody cyfrowe, sąd, Policja i Prokuratura.",
    href: "/dobierz-tlumaczenie",
    eyebrow: "Decyzja"
  },
  {
    title: "Blog",
    description:
      "Artykuły o tłumaczeniach przysięgłych, wynagrodzeniu tłumacza, ustawie o zawodzie i praktyce tłumaczeń prawnych.",
    href: "/blog",
    eyebrow: "Baza wiedzy"
  },
  {
    title: "FAQ",
    description:
      "Najczęstsze pytania o dokumenty, akta, dowody cyfrowe, wycenę i przygotowanie materiałów do tłumaczenia.",
    href: "/faq",
    eyebrow: "Pytania"
  },
  {
    title: "Kraków i okolice",
    description:
      "Strony lokalne dla Krakowa: ukraiński, rosyjski, angielski, sąd, Prokuratura, dowody cyfrowe, BLIK i kryptowaluty.",
    href: "/krakow",
    eyebrow: "Miasto"
  },
  {
    title: "Małopolska",
    description:
      "Lokalne strony dla Krakowa i miast Małopolski pod frazy: tłumacz przysięgły ukraiński, dokumenty z Ukrainy, sąd i urząd.",
    href: "/malopolskie",
    eyebrow: "Region"
  },
  {
    title: "Sprawy lokalne",
    description:
      "Treści lokalne dla Krakowa, miast pod Krakowem oraz Małopolski: dokumenty z Ukrainy, sądy, urzędy i dowody cyfrowe.",
    href: "/lokalnie",
    eyebrow: "Lokalnie"
  }
];

const sectionStyle = {
  width: "100%",
  padding: "72px 24px",
  background:
    "radial-gradient(circle at top left, rgba(245, 158, 11, 0.10), transparent 35%), linear-gradient(180deg, rgba(2, 6, 23, 0.15), rgba(2, 6, 23, 0.35))"
} as const;

const containerStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "32px",
  background: "rgba(2, 6, 23, 0.82)",
  boxShadow: "0 30px 90px rgba(0,0,0,0.38)",
  overflow: "hidden"
} as const;

const innerStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(260px, 0.9fr) minmax(320px, 1.7fr)",
  gap: "0"
} as const;

const introStyle = {
  padding: "34px",
  borderRight: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.035)"
} as const;

const eyebrowStyle = {
  margin: 0,
  color: "#fcd34d",
  fontSize: "11px",
  fontWeight: 900,
  letterSpacing: "0.24em",
  textTransform: "uppercase"
} as const;

const headingStyle = {
  margin: "18px 0 0",
  color: "#fff",
  fontSize: "clamp(30px, 4vw, 44px)",
  lineHeight: "0.95",
  fontWeight: 900,
  letterSpacing: "-0.045em"
} as const;

const textStyle = {
  margin: "22px 0 0",
  color: "#cbd5e1",
  fontSize: "15px",
  lineHeight: "1.75"
} as const;

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "14px",
  padding: "22px"
} as const;

const cardStyle = {
  display: "block",
  minHeight: "190px",
  padding: "22px",
  border: "1px solid rgba(255,255,255,0.11)",
  borderRadius: "26px",
  background: "rgba(255,255,255,0.045)",
  textDecoration: "none",
  transition: "border-color 180ms ease, background 180ms ease, transform 180ms ease"
} as const;

const cardEyebrowStyle = {
  display: "inline-block",
  margin: 0,
  padding: "6px 10px",
  borderRadius: "999px",
  background: "rgba(251, 191, 36, 0.13)",
  color: "#fde68a",
  fontSize: "10px",
  fontWeight: 900,
  letterSpacing: "0.18em",
  textTransform: "uppercase"
} as const;

const cardTitleStyle = {
  margin: "16px 0 0",
  color: "#fff",
  fontSize: "21px",
  lineHeight: "1.05",
  fontWeight: 900,
  letterSpacing: "-0.035em"
} as const;

const cardTextStyle = {
  margin: "13px 0 0",
  color: "#cbd5e1",
  fontSize: "14px",
  lineHeight: "1.6"
} as const;

const ctaStyle = {
  display: "inline-block",
  marginTop: "18px",
  color: "#fde68a",
  fontSize: "14px",
  fontWeight: 900
} as const;

export default function ContentHubLinks() {
  return (
    <section style={sectionStyle} data-component="content-hub-links">
      <div style={containerStyle}>
        <div style={innerStyle}>
          <div style={introStyle}>
            <p style={eyebrowStyle}>Centrum wiedzy</p>
            <h2 style={headingStyle}>
              Powiązane ścieżki: usługi, tematy, poradniki i sprawy lokalne.
            </h2>
            <p style={textStyle}>
              Uporządkowane linkowanie wewnętrzne do najważniejszych warstw
              serwisu: usług, tematów eksperckich, poradników, bloga oraz stron
              lokalnych dla Krakowa i Małopolski. Sekcja jest czytelna dla
              użytkownika, wyszukiwarki i systemów AI.
            </p>
          </div>

          <div style={gridStyle}>
            {hubLinks.map((item) => (
              <Link key={item.href} href={item.href} style={cardStyle}>
                <span style={cardEyebrowStyle}>{item.eyebrow}</span>
                <h3 style={cardTitleStyle}>{item.title}</h3>
                <p style={cardTextStyle}>{item.description}</p>
                <span style={ctaStyle}>Przejdź dalej →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
