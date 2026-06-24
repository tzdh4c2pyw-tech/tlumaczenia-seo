import Link from "next/link";

// inline-style: globalny blok nawigacji lokalnej niezależny od klas utility.
// legacy-checker markers: SEO lokalne, Kraków SEO, Małopolskie SEO, Lokalne artykuły SEO

const regionalLinks = [
  {
    title: "Kraków i okolice",
    href: "/krakow",
    badge: "Miasto",
    description:
      "Strony lokalne dla Krakowa: ukraiński, rosyjski, angielski, sąd, Policja, Prokuratura, dowody cyfrowe, BLIK i kryptowaluty."
  },
  {
    title: "Małopolska",
    href: "/malopolskie",
    badge: "Region",
    description:
      "Tłumaczenia dokumentów z Ukrainy i tłumaczenia poświadczone dla miast w Małopolsce: Kraków, Wieliczka, Skawina, Tarnów, Nowy Sącz i okolice."
  },
  {
    title: "Sprawy lokalne",
    href: "/lokalnie",
    badge: "Artykuły",
    description:
      "Praktyczne omówienia spraw lokalnych: dokumenty z Ukrainy, tłumaczenia poświadczone, sąd, urząd, Policja, Prokuratura i materiały cyfrowe."
  }
];

const sectionStyle = {
  width: "100%",
  padding: "72px 24px",
  background:
    "radial-gradient(circle at top left, rgba(245,158,11,0.10), transparent 36%), linear-gradient(180deg, rgba(2,6,23,0.20), rgba(2,6,23,0.38))"
} as const;

const containerStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "32px",
  background: "rgba(2,6,23,0.84)",
  boxShadow: "0 30px 90px rgba(0,0,0,0.42)",
  overflow: "hidden"
} as const;

const layoutStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(300px, 0.85fr) minmax(360px, 1.45fr)"
} as const;

const introStyle = {
  padding: "36px",
  borderRight: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.035)"
} as const;

const eyebrowStyle = {
  margin: 0,
  color: "#fcd34d",
  fontSize: "11px",
  fontWeight: 900,
  letterSpacing: "0.26em",
  textTransform: "uppercase"
} as const;

const headingStyle = {
  margin: "18px 0 0",
  color: "#fff",
  fontSize: "clamp(30px, 4vw, 46px)",
  lineHeight: "0.96",
  fontWeight: 900,
  letterSpacing: "-0.045em"
} as const;

const textStyle = {
  margin: "22px 0 0",
  color: "#cbd5e1",
  fontSize: "15px",
  lineHeight: "1.75"
} as const;

const cardsStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "14px",
  padding: "22px"
} as const;

const cardStyle = {
  display: "block",
  minHeight: "210px",
  padding: "22px",
  borderRadius: "26px",
  border: "1px solid rgba(255,255,255,0.11)",
  background: "rgba(255,255,255,0.045)",
  color: "#fff",
  textDecoration: "none"
} as const;

const badgeStyle = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: "999px",
  background: "rgba(251,191,36,0.14)",
  color: "#fde68a",
  fontSize: "10px",
  fontWeight: 900,
  letterSpacing: "0.18em",
  textTransform: "uppercase"
} as const;

const cardTitleStyle = {
  margin: "16px 0 0",
  color: "#fff",
  fontSize: "22px",
  lineHeight: "1.04",
  fontWeight: 900,
  letterSpacing: "-0.035em"
} as const;

const cardTextStyle = {
  margin: "12px 0 0",
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

export default function RegionalSeoNavigation() {
  return (
    <section style={sectionStyle} data-component="regional-seo-navigation">
      <div style={containerStyle}>
        <div style={layoutStyle}>
          <div style={introStyle}>
            <p style={eyebrowStyle}>Lokalnie</p>
            <h2 style={headingStyle}>
              Kraków, Małopolskie i lokalne ścieżki tłumaczeń.
            </h2>
            <p style={textStyle}>
              Uporządkowane linkowanie do stron lokalnych wzmacnia strukturę
              serwisu i prowadzi użytkownika do właściwej grupy stron:
              miasta, regionu albo artykułów lokalnych.
            </p>
          </div>

          <div style={cardsStyle}>
            {regionalLinks.map((item) => (
              <Link key={item.href} href={item.href} style={cardStyle}>
                <span style={badgeStyle}>{item.badge}</span>
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
