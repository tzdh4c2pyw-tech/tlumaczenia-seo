export default function SiteDesignSystem() {
  return (
    <style
      data-component="site-design-system"
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            --site-bg: #07111f;
            --site-bg-2: #101827;
            --site-panel: rgba(13, 22, 38, 0.96);
            --site-card: #111b2e;
            --site-card-2: #16233a;
            --site-light: #f3ead8;
            --site-text: #fff8ea;
            --site-muted: #cdd6e6;
            --site-muted-2: #b7c1d4;
            --site-dark-text: #111827;
            --site-gold: #d8b767;
            --site-gold-2: #f0d489;
            --site-border: rgba(255, 255, 255, 0.16);
            --site-border-gold: rgba(216, 183, 103, 0.38);
            --site-shadow: 0 26px 90px rgba(0, 0, 0, 0.4);
            --site-radius-xl: 30px;
            --site-radius-lg: 22px;
            --site-radius-md: 16px;
            --site-max: 1160px;
          }

          html {
            scroll-behavior: smooth;
            background: var(--site-bg);
          }

          body {
            overflow-x: hidden;
            background:
              radial-gradient(circle at 10% 0%, rgba(79, 58, 130, 0.28), transparent 34%),
              radial-gradient(circle at 86% 4%, rgba(40, 77, 135, 0.23), transparent 36%),
              linear-gradient(180deg, #07111f 0%, #101827 52%, #07111f 100%);
            color: var(--site-text);
          }

          main {
            overflow-x: clip;
            color: var(--site-text);
          }

          main section {
            box-sizing: border-box;
            padding-left: clamp(20px, 4vw, 56px) !important;
            padding-right: clamp(20px, 4vw, 56px) !important;
          }

          main section > div {
            max-width: min(var(--site-max), calc(100vw - 40px));
            margin-left: auto;
            margin-right: auto;
          }

          main h1,
          main h2,
          main h3 {
            color: var(--site-text);
            text-wrap: balance;
            overflow-wrap: normal;
            word-break: normal;
            font-feature-settings: "liga" 1, "kern" 1;
          }

          main h1 {
            max-width: 880px !important;
            font-size: clamp(34px, 4.3vw, 58px) !important;
            line-height: 1.08 !important;
            letter-spacing: -0.043em !important;
          }

          main h2 {
            max-width: 840px !important;
            font-size: clamp(28px, 3.4vw, 44px) !important;
            line-height: 1.1 !important;
            letter-spacing: -0.036em !important;
          }

          main h3 {
            font-size: clamp(21px, 2.05vw, 30px) !important;
            line-height: 1.16 !important;
            letter-spacing: -0.026em !important;
          }

          main p,
          main li {
            color: var(--site-muted);
            font-size: clamp(15.5px, 1vw, 17px) !important;
            line-height: 1.76 !important;
          }

          main strong {
            color: var(--site-text);
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
            font-size: clamp(34px, 4.3vw, 58px) !important;
            line-height: 1.08 !important;
            letter-spacing: -0.043em !important;
          }

          main [class*="leading-none"],
          main [class*="leading-[0."],
          main [class*="leading-[."] {
            line-height: 1.08 !important;
          }

          main [class*="tracking-[-"] {
            letter-spacing: -0.036em !important;
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
            font-size: clamp(22px, 2.4vw, 32px) !important;
            line-height: 1.14 !important;
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
              linear-gradient(145deg, rgba(246, 238, 220, 0.98), rgba(224, 213, 192, 0.96)) !important;
            border: 1px solid rgba(67, 56, 38, 0.16) !important;
            box-shadow: 0 20px 70px rgba(0, 0, 0, 0.26) !important;
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
            color: var(--site-dark-text) !important;
            text-shadow: none !important;
          }

          main [data-component="content-hub-links"] h2,
          main [data-component="regional-seo-navigation"] h2,
          main [data-component="local-page-shell"] h1 {
            max-width: 860px !important;
            font-size: clamp(34px, 4.2vw, 56px) !important;
            line-height: 1.08 !important;
          }

          main [data-component="content-hub-links"] h3,
          main [data-component="regional-seo-navigation"] h3 {
            font-size: clamp(22px, 2.25vw, 30px) !important;
            line-height: 1.14 !important;
          }

          main [data-component="content-hub-links"] p,
          main [data-component="regional-seo-navigation"] p,
          main [data-component="local-page-shell"] p {
            color: var(--site-muted) !important;
          }

          main [data-component="expert-conversion-section"] h2 {
            font-size: clamp(28px, 3.3vw, 42px) !important;
            line-height: 1.1 !important;
          }

          [data-component="floating-cta"] {
            display: none !important;
          }

          @media (max-width: 980px) {
            main h1,
            main [data-component="local-page-shell"] h1 {
              font-size: clamp(32px, 7.8vw, 50px) !important;
              line-height: 1.1 !important;
            }

            main h2 {
              font-size: clamp(26px, 6.4vw, 40px) !important;
              line-height: 1.12 !important;
            }

            main [style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 640px) {
            main h1,
            main [data-component="local-page-shell"] h1 {
              font-size: clamp(30px, 9vw, 42px) !important;
              line-height: 1.12 !important;
              letter-spacing: -0.035em !important;
            }

            main h2 {
              font-size: clamp(24px, 7.6vw, 34px) !important;
            }

            main h3 {
              font-size: clamp(20px, 6.2vw, 27px) !important;
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
              border-radius: 20px !important;
            }
          }
        `
      }}
    />
  );
}
