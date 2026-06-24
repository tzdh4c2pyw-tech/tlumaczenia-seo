export default function VisualScaleGuard() {
  return (
    <style
      data-component="visual-scale-guard"
      dangerouslySetInnerHTML={{
        __html: `
          body {
            overflow-x: hidden;
          }

          main {
            overflow-x: clip;
          }

          main h1 {
            max-width: 980px !important;
            font-size: clamp(40px, 6.4vw, 78px) !important;
            line-height: 1 !important;
            letter-spacing: -0.05em !important;
            text-wrap: balance !important;
            overflow-wrap: normal !important;
            word-break: normal !important;
          }

          main h2 {
            max-width: 900px !important;
            font-size: clamp(30px, 4.2vw, 52px) !important;
            line-height: 1.04 !important;
            letter-spacing: -0.04em !important;
            text-wrap: balance !important;
          }

          main h3 {
            font-size: clamp(22px, 2.6vw, 32px) !important;
            line-height: 1.1 !important;
            letter-spacing: -0.03em !important;
          }

          main p,
          main li {
            font-size: clamp(15px, 1.15vw, 17px) !important;
            line-height: 1.72 !important;
          }

          main [class*="text-7xl"],
          main [class*="text-8xl"],
          main [class*="text-9xl"],
          main [class*="text-[7"],
          main [class*="text-[8"],
          main [class*="text-[9"] {
            font-size: clamp(40px, 6.4vw, 78px) !important;
            line-height: 1 !important;
          }

          main [class*="leading-none"],
          main [class*="leading-[0."],
          main [class*="leading-[."] {
            line-height: 1 !important;
          }

          main article,
          main [data-component],
          main [class*="rounded"] {
            box-sizing: border-box;
          }

          main article h2,
          main article h3,
          main [class*="rounded"] h2,
          main [class*="rounded"] h3 {
            font-size: clamp(22px, 2.8vw, 34px) !important;
            line-height: 1.08 !important;
          }

          main [data-component="content-hub-links"] h2,
          main [data-component="regional-seo-navigation"] h2,
          main [data-component="local-page-shell"] h1 {
            font-size: clamp(38px, 6vw, 72px) !important;
            line-height: 1 !important;
          }

          main [data-component="expert-conversion-section"] h2 {
            font-size: clamp(30px, 4vw, 48px) !important;
            line-height: 1.04 !important;
          }

          @media (max-width: 980px) {
            main h1,
            main [data-component="local-page-shell"] h1 {
              font-size: clamp(36px, 10vw, 60px) !important;
              line-height: 1.02 !important;
            }

            main h2 {
              font-size: clamp(28px, 8vw, 44px) !important;
            }

            main [style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 640px) {
            main h1,
            main [data-component="local-page-shell"] h1 {
              font-size: clamp(32px, 12vw, 48px) !important;
              line-height: 1.04 !important;
              letter-spacing: -0.04em !important;
            }

            main h2 {
              font-size: clamp(26px, 9vw, 38px) !important;
            }

            main h3 {
              font-size: clamp(21px, 7vw, 28px) !important;
            }

            main section {
              padding-left: 18px !important;
              padding-right: 18px !important;
            }
          }
        `
      }}
    />
  );
}
