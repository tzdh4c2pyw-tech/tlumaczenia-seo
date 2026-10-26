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

main:not(.proc) {
  color: var(--vr-text);
}

main:not(.proc) p,
main:not(.proc) li,
main:not(.proc) dd,
main:not(.proc) blockquote {
  line-height: 1.78;
}

main:not(.proc) p {
  max-width: 78ch;
}

main:not(.proc) h1,
main:not(.proc) h2,
main:not(.proc) h3,
main:not(.proc) h4 {
  text-wrap: balance;
  letter-spacing: -0.025em;
}

main:not(.proc) h1 {
  line-height: 1.04;
}

main:not(.proc) h2 {
  line-height: 1.12;
}

main:not(.proc) h3 {
  line-height: 1.18;
}

main:not(.proc) a {
  text-underline-offset: 0.18em;
}

main:not(.proc) ul,
main:not(.proc) ol {
  padding-left: 1.25rem;
}

main:not(.proc) li + li {
  margin-top: 0.55rem;
}

main:not(.proc) section {
  scroll-margin-top: 96px;
}

main:not(.proc) article {
  font-size: 1rem;
}

main:not(.proc) article p + p {
  margin-top: 1rem;
}

main:not(.proc) article h2,
main:not(.proc) article h3 {
  margin-top: 2rem;
  margin-bottom: 0.85rem;
}

main:not(.proc) article ul,
main:not(.proc) article ol {
  margin-top: 1rem;
  margin-bottom: 1.25rem;
}

main:not(.proc) strong {
  color: var(--vr-navy);
  font-weight: 800;
}

main:not(.proc) small {
  line-height: 1.55;
}

main:not(.proc) table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border: 1px solid var(--vr-line);
  border-radius: 18px;
  background: var(--vr-card);
}

main:not(.proc) th,
main:not(.proc) td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--vr-line);
  text-align: left;
  vertical-align: top;
  line-height: 1.55;
}

main:not(.proc) th {
  background: rgba(217, 169, 65, 0.12);
  color: var(--vr-navy);
  font-weight: 800;
}

main:not(.proc) tr:last-child td {
  border-bottom: 0;
}

main:not(.proc) code {
  border-radius: 8px;
  padding: 0.12rem 0.32rem;
  background: rgba(15, 23, 42, 0.06);
  color: #111827;
  font-size: 0.92em;
}

main:not(.proc) pre {
  overflow-x: auto;
  border-radius: 18px;
  padding: 18px;
  background: #0f172a;
  color: #f8fafc;
  line-height: 1.65;
}

main:not(.proc) img,
main:not(.proc) video {
  max-width: 100%;
  height: auto;
  border-radius: 18px;
}

/* Karty i sekcje generowane przez lokalne oraz tematyczne opracowania */
main:not(.proc) [data-component],
main:not(.proc) [data-card],
main:not(.proc) [data-section] {
  overflow-wrap: break-word;
}

/* Długie teksty: lepsze światło między blokami */
main:not(.proc) [data-component="content-hub-links"],
main:not(.proc) [data-component="regional-seo-navigation"],
main:not(.proc) [data-component="expert-conversion-section"],
main:not(.proc) [data-component="local-page-shell"] {
  margin-top: clamp(28px, 5vw, 56px);
  margin-bottom: clamp(28px, 5vw, 56px);
}

/* Bezpieczne wygładzenie kart bez niszczenia istniejącego designu */
main:not(.proc) [data-component="content-hub-links"] a,
main:not(.proc) [data-component="regional-seo-navigation"] a {
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}

main:not(.proc) [data-component="content-hub-links"] a:hover,
main:not(.proc) [data-component="regional-seo-navigation"] a:hover {
  transform: translateY(-2px);
}

/* Czytelność na mobile */
@media (max-width: 760px) {
  main:not(.proc) {
    font-size: 16px;
  }

  main:not(.proc) h1 {
    font-size: clamp(2.05rem, 10vw, 3rem);
  }

  main:not(.proc) h2 {
    font-size: clamp(1.55rem, 7vw, 2.15rem);
  }

  main:not(.proc) p,
  main:not(.proc) li {
    line-height: 1.72;
  }

  main:not(.proc) table {
    display: block;
    overflow-x: auto;
  }
}

/* Redukcja przypadkowego efektu "ściany tekstu" */
main:not(.proc) p:has(+ p) {
  margin-bottom: 0.75rem;
}
        `
      }}
    />
  );
}
