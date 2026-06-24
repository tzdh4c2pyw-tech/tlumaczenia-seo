export function TextVisualPolish() {
  return (
    <style
      id="text-visual-polish"
      dangerouslySetInnerHTML={{
        __html: `
:root {
  --vr-text: #132033;
  --vr-muted: #526173;
  --vr-soft: #f7f4ee;
  --vr-card: rgba(255, 255, 255, 0.92);
  --vr-line: rgba(17, 24, 39, 0.12);
  --vr-gold: #d9a941;
  --vr-navy: #0f172a;
}

/* text-visual-polish */
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  overflow-wrap: anywhere;
}

main {
  color: var(--vr-text);
}

main p,
main li,
main dd,
main blockquote {
  line-height: 1.78;
}

main p {
  max-width: 78ch;
}

main h1,
main h2,
main h3,
main h4 {
  text-wrap: balance;
  letter-spacing: -0.025em;
}

main h1 {
  line-height: 1.04;
}

main h2 {
  line-height: 1.12;
}

main h3 {
  line-height: 1.18;
}

main a {
  text-underline-offset: 0.18em;
}

main ul,
main ol {
  padding-left: 1.25rem;
}

main li + li {
  margin-top: 0.55rem;
}

main section {
  scroll-margin-top: 96px;
}

main article {
  font-size: 1rem;
}

main article p + p {
  margin-top: 1rem;
}

main article h2,
main article h3 {
  margin-top: 2rem;
  margin-bottom: 0.85rem;
}

main article ul,
main article ol {
  margin-top: 1rem;
  margin-bottom: 1.25rem;
}

main strong {
  color: var(--vr-navy);
  font-weight: 800;
}

main small {
  line-height: 1.55;
}

main table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border: 1px solid var(--vr-line);
  border-radius: 18px;
  background: var(--vr-card);
}

main th,
main td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--vr-line);
  text-align: left;
  vertical-align: top;
  line-height: 1.55;
}

main th {
  background: rgba(217, 169, 65, 0.12);
  color: var(--vr-navy);
  font-weight: 800;
}

main tr:last-child td {
  border-bottom: 0;
}

main code {
  border-radius: 8px;
  padding: 0.12rem 0.32rem;
  background: rgba(15, 23, 42, 0.06);
  color: #111827;
  font-size: 0.92em;
}

main pre {
  overflow-x: auto;
  border-radius: 18px;
  padding: 18px;
  background: #0f172a;
  color: #f8fafc;
  line-height: 1.65;
}

main img,
main video {
  max-width: 100%;
  height: auto;
  border-radius: 18px;
}

/* Karty i sekcje generowane przez lokalne/tematyczne huby */
main [data-component],
main [data-card],
main [data-section] {
  overflow-wrap: break-word;
}

/* Długie teksty SEO: lepsze światło między blokami */
main [data-component="content-hub-links"],
main [data-component="regional-seo-navigation"],
main [data-component="expert-conversion-section"],
main [data-component="local-page-shell"] {
  margin-top: clamp(28px, 5vw, 56px);
  margin-bottom: clamp(28px, 5vw, 56px);
}

/* Bezpieczne wygładzenie kart bez niszczenia istniejącego designu */
main [data-component="content-hub-links"] a,
main [data-component="regional-seo-navigation"] a {
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}

main [data-component="content-hub-links"] a:hover,
main [data-component="regional-seo-navigation"] a:hover {
  transform: translateY(-2px);
}

/* Czytelność na mobile */
@media (max-width: 760px) {
  main {
    font-size: 16px;
  }

  main h1 {
    font-size: clamp(2.05rem, 10vw, 3rem);
  }

  main h2 {
    font-size: clamp(1.55rem, 7vw, 2.15rem);
  }

  main p,
  main li {
    line-height: 1.72;
  }

  main table {
    display: block;
    overflow-x: auto;
  }
}

/* Redukcja przypadkowego efektu "ściany tekstu" */
main p:has(+ p) {
  margin-bottom: 0.75rem;
}
        `
      }}
    />
  );
}
