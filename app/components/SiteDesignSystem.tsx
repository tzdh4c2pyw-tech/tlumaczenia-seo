export default function SiteDesignSystem() {
  return (
    <style
      data-component="site-design-system"
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            --site-bg: #090d18;
            --site-ink: #f4efe6;
            --site-ink-soft: #d8d0c4;
            --site-muted: #aeb7c8;
            --site-muted-strong: #c4cad6;
            --site-navy: #101827;
            --site-navy-2: #151d31;
            --site-navy-3: #1b2338;
            --site-violet: #29213e;
            --site-gold: #d9b96f;
            --site-gold-2: #f0d58c;
            --site-ivory: #f3ead8;
            --site-ivory-2: #e8ddc8;
            --site-border: rgba(255, 255, 255, 0.13);
            --site-border-gold: rgba(217, 185, 111, 0.34);
            --site-shadow: 0 32px 100px rgba(0, 0, 0, 0.38);
            --site-radius-xl: 34px;
            --site-radius-lg: 26px;
            --site-radius-md: 18px;
            --site-max: 1180px;
          }

          html {
            scroll-behavior: smooth;
            background: var(--site-bg);
          }

          body {
            overflow-x: hidden;
            background:
              radial-gradient(circle at 12% 4%, rgba(130, 91, 160, 0.22), transparent 34%),
              radial-gradient(circle at 80% 0%, rgba(63, 86, 150, 0.22), transparent 38%),
              linear-gradient(180deg, #090d18 0%, #12182a 48%, #090d18 100%);
            color: var(--site-ink);
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
            color: var(--site-ink);
            text-wrap: balance;
            overflow-wrap: normal;
            word-break: normal;
            font-feature-settings: "liga" 1, "kern" 1;
          }

          main h1 {
            max-width: 980px !important;
            font-size: clamp(42px, 5.7vw, 74px) !important;
            line-height: 1.02 !important;
            letter-spacing: -0.052em !important;
          }

          main h2 {
            max-width: 900px !important;
            font-size: clamp(30px, 4vw, 50px) !important;
            line-height: 1.06 !important;
            letter-spacing: -0.043em !important;
          }

          main h3 {
            font-size: clamp(21px, 2.3vw, 31px) !important;
            line-height: 1.12 !important;
            letter-spacing: -0.03em !important;
          }

          main p,
          main li {
            color: var(--site-muted);
            font-size: clamp(15.5px, 1.05vw, 17px) !important;
            line-height: 1.72 !important;
          }

          main strong {
            color: var(--site-ink);
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
            font-size: clamp(42px, 5.7vw, 74px) !important;
            line-height: 1.02 !important;
            letter-spacing: -0.052em !important;
          }

          main [class*="leading-none"],
          main [class*="leading-[0."],
          main [class*="leading-[."] {
            line-height: 1.03 !important;
          }

          main [class*="tracking-[-"] {
            letter-spacing: -0.044em !important;
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
            border-color: var(--site-border) !important;
          }

          main article h2,
          main article h3,
          main [class*="rounded"] h2,
          main [class*="rounded"] h3 {
            font-size: clamp(22px, 2.65vw, 33px) !important;
            line-height: 1.1 !important;
          }

          main article p,
          main [class*="rounded"] p {
            max-width: 72ch;
          }

          main [class*="bg-white"],
          main [class*="bg-stone"],
          main [class*="bg-zinc"],
          main [class*="bg-neutral"] {
            background:
              linear-gradient(145deg, rgba(246, 238, 220, 0.98), rgba(222, 211, 190, 0.94)) !important;
            border: 1px solid rgba(67, 56, 38, 0.14) !important;
            box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28) !important;
          }

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
          main [class*="bg-zinc"] span,
          main [class*="bg-neutral"] h1,
          main [class*="bg-neutral"] h2,
          main [class*="bg-neutral"] h3,
          main [class*="bg-neutral"] p,
          main [class*="bg-neutral"] li,
          main [class*="bg-neutral"] span {
            color: #151922 !important;
            text-shadow: none !important;
          }

          main [class*="bg-white"] a,
          main [class*="bg-stone"] a,
          main [class*="bg-zinc"] a,
          main [class*="bg-neutral"] a {
            color: #111827 !important;
          }

          main [data-component="content-hub-links"],
          main [data-component="regional-seo-navigation"],
          main [data-component="local-page-shell"],
          main [data-component="expert-conversion-section"] {
            isolation: isolate;
          }

          main [data-component="content-hub-links"] h2,
          main [data-component="regional-seo-navigation"] h2,
          main [data-component="local-page-shell"] h1 {
            font-size: clamp(38px, 5.6vw, 70px) !important;
            line-height: 1.02 !important;
          }

          main [data-component="content-hub-links"] h3,
          main [data-component="regional-seo-navigation"] h3 {
            font-size: clamp(22px, 2.4vw, 30px) !important;
            line-height: 1.1 !important;
          }

          main [data-component="expert-conversion-section"] h2 {
            font-size: clamp(30px, 3.75vw, 46px) !important;
            line-height: 1.05 !important;
          }

          main [data-component="expert-conversion-section"] h3 {
            font-size: clamp(23px, 2.4vw, 30px) !important;
          }

          [data-component="floating-cta"] {
            display: none !important;
          }

          @media (max-width: 980px) {
            main h1,
            main [data-component="local-page-shell"] h1 {
              font-size: clamp(36px, 9.4vw, 58px) !important;
              line-height: 1.04 !important;
            }

            main h2 {
              font-size: clamp(28px, 7.2vw, 43px) !important;
              line-height: 1.07 !important;
            }

            main [style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 640px) {
            main h1,
            main [data-component="local-page-shell"] h1 {
              font-size: clamp(32px, 10.5vw, 47px) !important;
              line-height: 1.06 !important;
              letter-spacing: -0.04em !important;
            }

            main h2 {
              font-size: clamp(26px, 8.4vw, 37px) !important;
            }

            main h3 {
              font-size: clamp(21px, 6.6vw, 28px) !important;
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
