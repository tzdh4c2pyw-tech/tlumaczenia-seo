import Link from "next/link";
import type { CSSProperties } from "react";

const wrapperStyle: CSSProperties = {
  position: "fixed",
  right: "22px",
  bottom: "22px",
  zIndex: 50,
  width: "min(340px, calc(100vw - 36px))",
  borderRadius: "26px",
  border: "1px solid rgba(255,255,255,0.13)",
  background:
    "linear-gradient(135deg, rgba(22,28,44,0.94), rgba(11,16,32,0.96))",
  boxShadow: "0 24px 70px rgba(0,0,0,0.42)",
  padding: "18px",
  boxSizing: "border-box",
  backdropFilter: "blur(16px)"
};

const eyebrowStyle: CSSProperties = {
  display: "inline-flex",
  margin: 0,
  padding: "6px 10px",
  borderRadius: "999px",
  background: "rgba(230,192,106,0.12)",
  color: "#e6c06a",
  fontSize: "10px",
  fontWeight: 900,
  letterSpacing: "0.18em",
  textTransform: "uppercase"
};

const titleStyle: CSSProperties = {
  margin: "12px 0 0",
  color: "#f4f4f5",
  fontSize: "22px",
  lineHeight: 1.05,
  letterSpacing: "-0.04em",
  fontWeight: 900
};

const textStyle: CSSProperties = {
  margin: "9px 0 0",
  color: "#cbd5e1",
  fontSize: "13.5px",
  lineHeight: 1.55
};

const noteStyle: CSSProperties = {
  margin: "13px 0 0",
  padding: "12px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.11)",
  background: "rgba(255,255,255,0.055)",
  color: "#d5d9e2",
  fontSize: "12.5px",
  lineHeight: 1.45,
  fontWeight: 700
};

const rowStyle: CSSProperties = {
  display: "flex",
  gap: "9px",
  marginTop: "15px"
};

const primaryStyle: CSSProperties = {
  flex: "1 1 auto",
  display: "inline-flex",
  minHeight: "42px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  background: "#e6c06a",
  color: "#111827",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 900
};

const secondaryStyle: CSSProperties = {
  display: "inline-flex",
  minHeight: "42px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.06)",
  color: "#f4f4f5",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 900,
  padding: "0 14px"
};

export default function FloatingCta() {
  return (
    <aside data-component="floating-cta" style={wrapperStyle} aria-label="Szybki kontakt">
      <p style={eyebrowStyle}>Wstępna ocena materiału</p>
      <h2 style={titleStyle}>Wyślij tekst do wyceny.</h2>
      <p style={textStyle}>
        Dokument, fragment akt, pismo procesowe albo materiał cyfrowy można
        przekazać do wstępnej analizy.
      </p>
      <p style={noteStyle}>
        Dla sądów, Policji, Prokuratury, kancelarii i instytucji obsługujących
        dokumenty wymagające oceny językowej.
      </p>
      <div style={rowStyle}>
        <Link href="/kontakt" style={primaryStyle}>
          Wyślij tekst
        </Link>
        <Link href="/tematy/sady-policja-prokuratura" style={secondaryStyle}>
          Dla organów
        </Link>
      </div>
    </aside>
  );
}
