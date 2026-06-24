import Link from "next/link";
import type { CSSProperties } from "react";

// inline-style: twardy rendering sekcji konwersyjnej niezależny od klas utility i globalnego CSS.

const wrapperStyle: CSSProperties = {
  width: "100%",
  padding: "80px 24px",
  background:
    "radial-gradient(circle at 82% 18%, rgba(217,169,65,0.12), transparent 34%), linear-gradient(180deg, rgba(2,6,23,0.02), rgba(2,6,23,0.10))",
  boxSizing: "border-box"
};

const panelStyle: CSSProperties = {
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "minmax(320px, 1.08fr) minmax(320px, 0.92fr)",
  overflow: "hidden",
  borderRadius: "34px",
  border: "1px solid rgba(255,255,255,0.14)",
  background:
    "linear-gradient(135deg, rgba(88,28,45,0.92), rgba(15,23,42,0.96) 54%, rgba(2,6,23,0.98))",
  boxShadow: "0 34px 100px rgba(0,0,0,0.48)"
};

const leftStyle: CSSProperties = {
  padding: "42px",
  boxSizing: "border-box"
};

const rightStyle: CSSProperties = {
  padding: "42px",
  boxSizing: "border-box",
  borderLeft: "1px solid rgba(255,255,255,0.12)",
  background:
    "radial-gradient(circle at 80% 0%, rgba(217,169,65,0.10), transparent 32%), rgba(2,6,23,0.38)"
};

const eyebrowStyle: CSSProperties = {
  display: "inline-flex",
  margin: 0,
  padding: "7px 11px",
  borderRadius: "999px",
  background: "rgba(217,169,65,0.14)",
  color: "#fde68a",
  fontSize: "11px",
  fontWeight: 900,
  letterSpacing: "0.22em",
  textTransform: "uppercase"
};

const headingStyle: CSSProperties = {
  margin: "20px 0 0",
  maxWidth: "760px",
  color: "#ffffff",
  fontSize: "clamp(31px, 4.4vw, 52px)",
  lineHeight: "0.98",
  fontWeight: 900,
  letterSpacing: "-0.052em"
};

const paragraphStyle: CSSProperties = {
  margin: "22px 0 0",
  maxWidth: "760px",
  color: "#e5e7eb",
  fontSize: "16px",
  lineHeight: 1.78
};

const actionsStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "30px"
};

const primaryLinkStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "48px",
  padding: "0 22px",
  borderRadius: "999px",
  background: "#f0c86a",
  color: "#101620",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 16px 38px rgba(240,200,106,0.24)"
};

const secondaryLinkStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "48px",
  padding: "0 22px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.18)",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none"
};

const titleStyle: CSSProperties = {
  margin: 0,
  color: "#ffffff",
  fontSize: "28px",
  lineHeight: 1,
  fontWeight: 900,
  letterSpacing: "-0.04em"
};

const listStyle: CSSProperties = {
  display: "grid",
  gap: "12px",
  margin: "24px 0 0",
  padding: 0,
  listStyle: "none"
};

const itemStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "34px 1fr",
  gap: "13px",
  alignItems: "start",
  padding: "15px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.11)",
  background: "rgba(255,255,255,0.055)"
};

const numberStyle: CSSProperties = {
  display: "inline-flex",
  width: "34px",
  height: "34px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  background: "rgba(240,200,106,0.16)",
  color: "#fde68a",
  fontSize: "13px",
  fontWeight: 900
};

const itemTextStyle: CSSProperties = {
  margin: 0,
  color: "#dbe4ef",
  fontSize: "14px",
  lineHeight: 1.62
};

const noteGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "12px",
  marginTop: "22px"
};

const noteCardStyle: CSSProperties = {
  padding: "14px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(2,6,23,0.34)"
};

const noteLabelStyle: CSSProperties = {
  margin: 0,
  color: "#fde68a",
  fontSize: "11px",
  fontWeight: 900,
  letterSpacing: "0.15em",
  textTransform: "uppercase"
};

const noteTextStyle: CSSProperties = {
  margin: "8px 0 0",
  color: "#cbd5e1",
  fontSize: "13px",
  lineHeight: 1.55
};

const steps = [
  "Przekazujesz dokumenty lub opis sprawy: język, rodzaj dokumentu, cel tłumaczenia i termin.",
  "Zakres materiału jest weryfikowany pod kątem czytelności, objętości i kontekstu.",
  "Otrzymujesz informację o możliwości wykonania, terminie i sposobie odbioru.",
  "Tłumaczenie jest przygotowywane z zachowaniem układu, terminologii i kontekstu."
];

export default function ExpertConversionSection() {
  return (
    <section style={wrapperStyle} data-component="expert-conversion-section">
      <div style={panelStyle}>
        <div style={leftStyle}>
          <p style={eyebrowStyle}>Wycena i kontakt</p>

          <h2 style={headingStyle}>
            Potrzebujesz tłumaczenia dokumentów, akt albo materiałów cyfrowych?
          </h2>

          <p style={paragraphStyle}>
            Prześlij opis sprawy albo dokumenty do wstępnej oceny. Przy
            materiałach dla sądu, Policji, Prokuratury lub kancelarii prawnej
            najważniejsze są: czytelność plików, pełny kontekst, termin oraz
            informacja, do jakiego celu tłumaczenie ma zostać użyte.
          </p>

          <div style={actionsStyle}>
            <Link href="/kontakt" style={primaryLinkStyle}>
              Przejdź do kontaktu
            </Link>
            <Link href="/poradniki" style={secondaryLinkStyle}>
              Zobacz poradniki
            </Link>
            <Link href="/tematy" style={secondaryLinkStyle}>
              Zobacz tematy eksperckie
            </Link>
          </div>
        </div>

        <div style={rightStyle}>
          <h3 style={titleStyle}>Jak przygotować zapytanie</h3>

          <ol style={listStyle}>
            {steps.map((step, index) => (
              <li key={step} style={itemStyle}>
                <span style={numberStyle}>{index + 1}</span>
                <p style={itemTextStyle}>{step}</p>
              </li>
            ))}
          </ol>

          <div style={noteGridStyle}>
            <div style={noteCardStyle}>
              <p style={noteLabelStyle}>Dokumenty</p>
              <p style={noteTextStyle}>skany, PDF, zdjęcia, akty i pisma</p>
            </div>
            <div style={noteCardStyle}>
              <p style={noteLabelStyle}>Organy</p>
              <p style={noteTextStyle}>sąd, Policja, Prokuratura, urząd</p>
            </div>
            <div style={noteCardStyle}>
              <p style={noteLabelStyle}>Cyber</p>
              <p style={noteTextStyle}>komunikatory, BLIK, zrzuty, e-mail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
