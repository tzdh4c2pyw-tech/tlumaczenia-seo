import Link from "next/link";
import type { ReactNode } from "react";

// inline-style: lokalne strony SEO niezależne od klas utility.

type LocalPageShellProps = {
  [key: string]: unknown;
  eyebrow: string;
  title: string;
  description?: string;
  intro?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children: ReactNode;
};

type LocalArticleShellProps = {
  [key: string]: unknown;
  eyebrow: string;
  title: string;
  description?: string;
  intro?: string;
  backHref: string;
  backLabel: string;
  children: ReactNode;
};

type LocalCardProps = {
  [key: string]: unknown;
  href: string;
  title: string;
  description: string;
  meta?: string;
};

type LocalTextSectionProps = {
  [key: string]: unknown;
  title?: string;
  heading?: string;
  paragraphs?: string[];
  children?: ReactNode;
};

type LocalFaqProps = {
  [key: string]: unknown;
  items?: Array<{
    question: string;
    answer: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

type LocalRelatedLinksProps = {
  [key: string]: unknown;
  links?: Array<{
    label: string;
    href: string;
  }>;
  title?: string;
};

const pageStyle = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 20% 0%, rgba(120,53,15,0.20), transparent 28%), radial-gradient(circle at 80% 12%, rgba(88,28,135,0.18), transparent 32%), #020617",
  color: "#f8fafc"
} as const;

const heroOuterStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "84px 24px 44px"
} as const;

const heroStyle = {
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "36px",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))",
  boxShadow: "0 34px 100px rgba(0,0,0,0.42)",
  overflow: "hidden"
} as const;

const heroGridStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(320px, 1.08fr) minmax(320px, 0.92fr)"
} as const;

const heroLeftStyle = {
  padding: "42px"
} as const;

const heroRightStyle = {
  padding: "42px",
  borderLeft: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(2,6,23,0.36)"
} as const;

const eyebrowStyle = {
  margin: 0,
  color: "#fcd34d",
  fontSize: "11px",
  fontWeight: 900,
  letterSpacing: "0.26em",
  textTransform: "uppercase"
} as const;

const h1Style = {
  margin: "20px 0 0",
  maxWidth: "840px",
  color: "#fff",
  fontSize: "clamp(42px, 7vw, 82px)",
  lineHeight: "0.90",
  fontWeight: 900,
  letterSpacing: "-0.065em"
} as const;

const descStyle = {
  margin: "26px 0 0",
  maxWidth: "720px",
  color: "#cbd5e1",
  fontSize: "17px",
  lineHeight: "1.8"
} as const;

const actionsStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "30px"
} as const;

const primaryLinkStyle = {
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

const secondaryLinkStyle = {
  display: "inline-flex",
  minHeight: "46px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.16)",
  color: "#fff",
  padding: "0 22px",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none"
} as const;

const infoCardStyle = {
  border: "1px solid rgba(255,255,255,0.11)",
  borderRadius: "28px",
  background: "rgba(15,23,42,0.64)",
  padding: "28px"
} as const;

const infoTitleStyle = {
  margin: 0,
  color: "#fff",
  fontSize: "28px",
  lineHeight: "1",
  fontWeight: 900,
  letterSpacing: "-0.04em"
} as const;

const infoTextStyle = {
  margin: "16px 0 0",
  color: "#cbd5e1",
  fontSize: "15px",
  lineHeight: "1.72"
} as const;

const contentStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "24px 24px 90px"
} as const;

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
  gap: "18px"
} as const;

const cardStyle = {
  display: "block",
  minHeight: "220px",
  padding: "24px",
  border: "1px solid rgba(255,255,255,0.11)",
  borderRadius: "28px",
  background: "rgba(255,255,255,0.055)",
  boxShadow: "0 24px 70px rgba(0,0,0,0.24)",
  color: "#fff",
  textDecoration: "none"
} as const;

const cardMetaStyle = {
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
  margin: "18px 0 0",
  color: "#fff",
  fontSize: "24px",
  lineHeight: "1.04",
  fontWeight: 900,
  letterSpacing: "-0.04em"
} as const;

const cardTextStyle = {
  margin: "14px 0 0",
  color: "#cbd5e1",
  fontSize: "15px",
  lineHeight: "1.65"
} as const;

const sectionStyle = {
  marginTop: "24px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.11)",
  borderRadius: "28px",
  background: "rgba(255,255,255,0.05)",
  boxShadow: "0 24px 70px rgba(0,0,0,0.24)"
} as const;

const sectionTitleStyle = {
  margin: 0,
  color: "#fff",
  fontSize: "30px",
  lineHeight: "1",
  fontWeight: 900,
  letterSpacing: "-0.04em"
} as const;

const proseStyle = {
  marginTop: "18px",
  color: "#dbeafe",
  fontSize: "16px",
  lineHeight: "1.85"
} as const;

const relatedStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "18px"
} as const;

const relatedLinkStyle = {
  display: "inline-flex",
  minHeight: "40px",
  alignItems: "center",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  color: "#fde68a",
  padding: "0 16px",
  fontSize: "13px",
  fontWeight: 900,
  textDecoration: "none"
} as const;

const faqGridStyle = {
  display: "grid",
  gap: "12px",
  marginTop: "20px"
} as const;

const faqItemStyle = {
  padding: "18px",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "20px",
  background: "rgba(2,6,23,0.36)"
} as const;


const buttonRowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "24px"
};

const primaryButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "44px",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "#f0c86a",
  color: "#101620",
  fontSize: "14px",
  fontWeight: 800,
  textDecoration: "none",
  boxShadow: "0 14px 32px rgba(240, 200, 106, 0.22)"
};

const secondaryButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "44px",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "rgba(255, 255, 255, 0.9)",
  color: "#111827",
  fontSize: "14px",
  fontWeight: 800,
  textDecoration: "none",
  border: "1px solid rgba(255, 255, 255, 0.28)"
};

export function LocalPageShell({
  eyebrow,
  title,
  description,
  intro,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  children
}: LocalPageShellProps) {
  const lead = description ?? intro ?? "";
  return (
    <main style={pageStyle} data-component="local-page-shell">
      <section style={heroOuterStyle}>
        <div style={heroStyle}>
          <div style={heroGridStyle}>
            <div style={heroLeftStyle}>
              <p style={eyebrowStyle}>{eyebrow}</p>
              <h1 style={h1Style}>{title}</h1>
              <p style={descStyle}>{lead}</p>
              <div style={buttonRowStyle}>
                {primaryHref && primaryLabel ? (
                  <Link href={primaryHref} style={primaryButtonStyle}>
                    {primaryLabel}
                  </Link>
                ) : null}
                {secondaryHref && secondaryLabel ? (
                  <Link href={secondaryHref} style={secondaryButtonStyle}>
                    {secondaryLabel}
                  </Link>
                ) : null}
              </div>
              <div style={actionsStyle}>
                <Link href="/kontakt" style={primaryLinkStyle}>
                  Zapytaj o wycenę
                </Link>
                <Link href="/dobierz-tlumaczenie" style={secondaryLinkStyle}>
                  Dobierz tłumaczenie
                </Link>
              </div>
            </div>
            <div style={heroRightStyle}>
              <div style={infoCardStyle}>
                <h2 style={infoTitleStyle}>Szybka ścieżka</h2>
                <p style={infoTextStyle}>
                  Wybierz temat, miasto albo typ dokumentu. Każda podstrona
                  prowadzi do wyceny i porządkuje informacje pod konkretny
                  kontekst: urząd, sąd, Policję, Prokuraturę, kancelarię albo
                  materiał cyfrowy.
                </p>
                <div style={actionsStyle}>
                  <Link href="/krakow" style={secondaryLinkStyle}>
                    Kraków
                  </Link>
                  <Link href="/malopolskie" style={secondaryLinkStyle}>
                    Małopolskie
                  </Link>
                  <Link href="/lokalnie" style={secondaryLinkStyle}>
                    Lokalne SEO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={contentStyle}>{children}</section>
    </main>
  );
}

export function LocalCardGrid({ children }: { children: ReactNode }) {
  return <div style={gridStyle}>{children}</div>;
}

export function LocalCard({ href, title, description, meta }: LocalCardProps) {
  return (
    <Link href={href} style={cardStyle}>
      {meta ? <span style={cardMetaStyle}>{meta}</span> : null}
      <h2 style={cardTitleStyle}>{title}</h2>
      <p style={cardTextStyle}>{description}</p>
      <span style={{ ...relatedLinkStyle, marginTop: "18px" }}>Czytaj dalej →</span>
    </Link>
  );
}

export function LocalArticleShell({
  eyebrow,
  title,
  description,
  intro,
  backHref,
  backLabel,
  children
}: LocalArticleShellProps) {
  const lead = description ?? intro ?? "";
  return (
    <main style={pageStyle} data-component="local-article-shell">
      <section style={heroOuterStyle}>
        <div style={heroStyle}>
          <div style={heroLeftStyle}>
            <p style={eyebrowStyle}>{eyebrow}</p>
            <h1 style={h1Style}>{title}</h1>
            <p style={descStyle}>{lead}</p>
            <div style={actionsStyle}>
              <Link href={backHref} style={secondaryLinkStyle}>
                ← {backLabel}
              </Link>
              <Link href="/kontakt" style={primaryLinkStyle}>
                Wyślij materiał do wyceny
              </Link>
            </div>
          </div>
        </div>
      </section>

      <article style={contentStyle}>{children}</article>
    </main>
  );
}

export function LocalTextSection({
  title,
  heading,
  paragraphs,
  children
}: LocalTextSectionProps) {
  const sectionTitle = title ?? heading ?? "";
  const body =
    paragraphs && paragraphs.length > 0
      ? paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
      : children;

  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitleStyle}>{sectionTitle}</h2>
      <div style={proseStyle}>{body}</div>
    </section>
  );
}

export function LocalFaq({ items, faqs }: LocalFaqProps) {
  const list = items ?? faqs ?? [];

  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitleStyle}>Najczęstsze pytania</h2>
      <div style={faqGridStyle}>
        {list.map((item) => (
          <div key={item.question} style={faqItemStyle}>
            <h3 style={{ margin: 0, color: "#fff", fontSize: "18px", fontWeight: 900 }}>
              {item.question}
            </h3>
            <p style={cardTextStyle}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LocalRelatedLinks({ links, title }: LocalRelatedLinksProps) {
  const list = links ?? [];

  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitleStyle}>{title ?? "Powiązane ścieżki"}</h2>
      <div style={relatedStyle}>
        {list.map((link) => (
          <Link key={link.href} href={link.href} style={relatedLinkStyle}>
            {link.label} →
          </Link>
        ))}
      </div>
    </section>
  );
}
