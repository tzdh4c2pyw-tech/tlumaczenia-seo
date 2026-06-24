export default function SiteDesignSystem() {
  return (
    <style
      data-component="site-design-system"
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            --site-bg: #0b1020;
            --site-panel: rgba(18, 24, 43, 0.72);
            --site-panel-strong: rgba(22, 28, 50, 0.9);
            --site-border: rgba(255, 255, 255, 0.12);
            --site-text: #e7e9ee;
            --site-muted: #b7bfcc;
            --site-soft: #8993a4;
            --site-gold: #e6c06a;
            --site-gold-strong: #f1ce7a;
            --site-radius-xl: 32px;
            --site-radius-lg: 24px;
            --site-radius-md: 18px;
            --site-shadow: 0 30px 90px rgba(0, 0, 0, 0.34);
            --site-max: 1180px;
          }

          html {
            scroll-behavior: smooth;
            background: var(--site-bg);
          }

          body {
            overflow-x: hidden;
            background:
              radial-gradient(circle at 18% 10%, rgba(96, 54, 114, 0.28), transparent 32%),
              radial-gradient(circle at 82% 8%, rgba(56, 80, 140, 0.18), transparent 35%),
              linear-gradient(180deg, #0b1020 0%, #111827 52%, #0b1020 100%);
          }

          main {
            overflow-x: clip;
          }

          main section {
            box-sizing: border-box;
          }

          main h1,
          main h2,
          main h3 {
            color: var(--site-text);
            text-wrap: balance;
            overflow-wrap: normal;
            word-break: normal;
          }

          main h1 {
            max-width: 980px !important;
            font-size: clamp(40px, 6vw, 76px) !important;
            line-height: 1.01 !important;
            letter-spacing: -0.052em !important;
          }

          main h2 {
            max-width: 920px !important;
            font-size: clamp(30px, 4.15vw, 52px) !important;
            line-height: 1.04 !important;
            letter-spacing: -0.044em !important;
          }

          main h3 {
            font-size: clamp(21px, 2.35vw, 32px) !important;
            line-height: 1.11 !important;
            letter-spacing: -0.032em !important;
          }

          main p,
          main li {
            color: var(--site-muted);
            font-size: clamp(15px, 1.08vw, 17px) !important;
            line-height: 1.72 !important;
          }

          main a {
            text-underline-offset: 4px;
          }

          main img,
          main svg,
          main video {
            max-width: 100%;
            height: auto;
          }

          main [class*="text-7xl"],
          main [class*="text-8xl"],
          main [class*="text-9xl"],
          main [class*="text-[7"],
          main [class*="text-[8"],
          main [class*="text-[9"] {
            font-size: clamp(40px, 6vw, 76px) !important;
            line-height: 1.01 !important;
            letter-spacing: -0.052em !important;
          }

          main [class*="leading-none"],
          main [class*="leading-[0."],
          main [class*="leading-[."] {
            line-height: 1.02 !important;
          }

          main [class*="tracking-[-"] {
            letter-spacing: -0.045em !important;
          }

          main [class*="grid"] > *,
          main [style*="grid-template-columns"] > * {
            min-width: 0;
          }

          main article,
          main [data-component],
          main [class*="rounded"] {
            box-sizing: border-box;
          }

          main article,
          main [class*="rounded-2xl"],
          main [class*="rounded-3xl"],
          main [class*="rounded-["] {
            border-color: var(--site-border);
          }

          main article h2,
          main article h3,
          main [class*="rounded"] h2,
          main [class*="rounded"] h3 {
            font-size: clamp(22px, 2.75vw, 34px) !important;
            line-height: 1.09 !important;
          }

          main article p,
          main [class*="rounded"] p {
            max-width: 72ch;
          }

          main [data-component="content-hub-links"] h2,
          main [data-component="regional-seo-navigation"] h2,
          main [data-component="local-page-shell"] h1 {
            font-size: clamp(38px, 5.8vw, 72px) !important;
            line-height: 1.01 !important;
          }

          main [data-component="content-hub-links"] h3,
          main [data-component="regional-seo-navigation"] h3 {
            font-size: clamp(22px, 2.5vw, 31px) !important;
            line-height: 1.1 !important;
          }

          main [data-component="expert-conversion-section"] h2 {
            font-size: clamp(30px, 3.9vw, 48px) !important;
            line-height: 1.04 !important;
          }

          main [data-component="expert-conversion-section"] h3 {
            font-size: clamp(23px, 2.5vw, 31px) !important;
          }

          main [data-component="floating-cta"] {
            max-width: 340px !important;
            transform: scale(0.92);
            transform-origin: bottom right;
          }


          /* Czytelność jasnych kart */
          main [class*="bg-white"] h1,
          main [class*="bg-white"] h2,
          main [class*="bg-white"] h3,
          main [class*="bg-white"] p,
          main [class*="bg-white"] li,
          main [class*="bg-white"] span,
          main [class*="bg-stone"] h1,
          main [class*="bg-stone"] h2,
          main [class*="bg-stone"] h3,
          main [class*="bg-stone"] p,
          main [class*="bg-stone"] li,
          main [class*="bg-stone"] span,
          main [class*="bg-zinc"] h1,
          main [class*="bg-zinc"] h2,
          main [class*="bg-zinc"] h3,
          main [class*="bg-zinc"] p,
          main [class*="bg-zinc"] li,
          main [class*="bg-zinc"] span {
            color: #111827 !important;
            text-shadow: none !important;
          }

          main [class*="bg-white"] a,
          main [class*="bg-stone"] a,
          main [class*="bg-zinc"] a {
            color: #111827 !important;
          }

          /* Pływający panel kontaktowy zasłania treść */
          [data-component="floating-cta"] {
            display: none !important;
          }

          @media (max-width: 1100px) {
            main [data-component="floating-cta"] {
              display: none !important;
            }
          }

          @media (max-width: 980px) {
            main h1,
            main [data-component="local-page-shell"] h1 {
              font-size: clamp(36px, 9.8vw, 60px) !important;
              line-height: 1.03 !important;
            }

            main h2 {
              font-size: clamp(28px, 7.6vw, 44px) !important;
              line-height: 1.06 !important;
            }

            main [style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 640px) {
            main h1,
            main [data-component="local-page-shell"] h1 {
              font-size: clamp(32px, 11vw, 48px) !important;
              line-height: 1.05 !important;
              letter-spacing: -0.04em !important;
            }

            main h2 {
              font-size: clamp(26px, 8.8vw, 38px) !important;
            }

            main h3 {
              font-size: clamp(21px, 6.8vw, 28px) !important;
            }

            main p,
            main li {
              font-size: 15.5px !important;
              line-height: 1.72 !important;
            }

            main section {
              padding-left: 18px !important;
              padding-right: 18px !important;
            }

            main [class*="rounded"],
            main [data-component] {
              border-radius: 22px !important;
            }
          }
        `
      }}
    />
  );
}
