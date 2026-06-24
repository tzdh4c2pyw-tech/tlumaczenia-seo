import Link from "next/link";

// inline-style: sekcja konwersyjna niezależna od klas utility.

const sectionStyle = {
  width: "100%",
  padding: "72px 24px",
  background:
    "radial-gradient(circle at top right, rgba(245,158,11,0.10), transparent 34%), linear-gradient(180deg, rgba(15,23,42,0.08), rgba(2,6,23,0.36))"
} as const;

const containerStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "32px",
  background:
    "linear-gradient(135deg, rgba(88,28,45,0.74), rgba(15,23,42,0.88) 58%, rgba(2,6,23,0.92))",
  boxShadow: "0 30px 90px rgba(0,0,0,0.42)",
  overflow: "hidden"
} as const;

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(320px, 1.05fr) minmax(320px, 1fr)"
} as const;

const leftStyle = {
  padding: "38px"
} as const;

const rightStyle = {
  padding: "38px",
  borderLeft: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(2,6,23,0.34)"
} as const;

const eyebrowStyle = {
  margin: 0,
  color: "#fcd34d",
  fontSize: "11px",
  fontWeight: 900,
  letterSpacing: "0.25em",
  textTransform: "uppercase"
} as const;

const headingStyle = {
  margin: "18px 0 0",
  color: "#fff",
  fontSize: "clamp(30px, 4vw, 48px)",
  lineHeight: "0.98",
  fontWeight: 900,
  letterSpacing: "-0.045em"
} as const;

const textStyle = {
  margin: "22px 0 0",
  color: "#e2e8f0",
  fontSize: "16px",
  lineHeight: "1.78"
} as const;

const actionStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "28px"
} as const;

const primaryStyle = {
  display: "inline-flex",
  minHeight: "46px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  background: "#fcd34d",
  color: "#0f172a",
  padding: "0 22px",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none"
} as const;

const secondaryStyle = {
  display: "inline-flex",
  minHeight: "46px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.07)",
  color: "#fff",
  padding: "0 22px",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none"
} as const;

const listStyle = {
  margin: "22px 0 0",
  padding: 0,
  listStyle: "none",
  display: "grid",
  gap: "12px"
} as const;

const itemStyle = {
  display: "grid",
  gridTemplateColumns: "32px 1fr",
  gap: "12px",
  padding: "14px",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.045)"
} as const;

const numberStyle = {
  display: "inline-flex",
  width: "32px",
  height: "32px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  background: "rgba(251,191,36,0.16)",
  color: "#fde68a",
  fontSize: "13px",
  fontWeight: 900
} as const;

const itemTextStyle = {
  margin: 0,
  color: "#cbd5e1",
  fontSize: "14px",
  lineHeight: "1.55"
} as const;

export default function ExpertConversionSection() {
  return (
    <section style={sectionStyle} data-component="expert-conversion-section">
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div style={leftStyle}>
            <p style={eyebrowStyle}>Wycena i kontakt</p>
            <h2 style={headingStyle}>
              Potrzebujesz tłumaczenia dokumentów, akt albo materiałów cyfrowych?
            </h2>
            <p style={textStyle}>
              Prześlij opis sprawy albo dokumenty do wstępnej oceny. Przy
              materiałach dla sądu, Policji, Prokuratury lub kancelarii prawnej
              najważniejsze są: czytelność plików, pełny kontekst, termin oraz
              informacja, do jakiego celu tłumaczenie ma zostać użyte.
            </p>
            <div style={actionStyle}>
              <Link href="/kontakt" style={primaryStyle}>
                Wyślij tekst do wyceny
              </Link>
              <Link href="/poradniki" style={secondaryStyle}>
                Zobacz poradniki
              </Link>
              <Link href="/tematy" style={secondaryStyle}>
                Zobacz tematy eksperckie
              </Link>
            </div>
          </div>

          <div style={rightStyle}>
            <h3
              style={{
                margin: 0,
                color: "#fff",
                fontSize: "26px",
                lineHeight: "1",
                fontWeight: 900,
                letterSpacing: "-0.035em"
              }}
            >
              Jak przygotować zapytanie
            </h3>
            <ol style={listStyle}>
              {[
                "Przekaż dokumenty lub opisz sprawę: język, rodzaj dokumentu, cel tłumaczenia i oczekiwany termin.",
                "Załącz materiał w formie czytelnego skanu, PDF albo kompletu zdjęć. Przy aktach zachowaj kolejność stron.",
                "Przy dowodach cyfrowych nie usuwaj dat, godzin, nazw użytkowników ani oznaczeń systemowych.",
                "W przypadku organów i kancelarii wskaż instytucję, sygnaturę albo etap postępowania, jeżeli ma to znaczenie."
              ].map((text, index) => (
                <li key={text} style={itemStyle}>
                  <span style={numberStyle}>{index + 1}</span>
                  <p style={itemTextStyle}>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
