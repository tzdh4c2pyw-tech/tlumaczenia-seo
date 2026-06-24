import { existsSync, readFileSync } from "node:fs";

const files = {
  "lib/krakow-seo-pages.ts": existsSync("lib/krakow-seo-pages.ts")
    ? readFileSync("lib/krakow-seo-pages.ts", "utf8")
    : "",
  "app/krakow/page.tsx": existsSync("app/krakow/page.tsx")
    ? readFileSync("app/krakow/page.tsx", "utf8")
    : "",
  "app/krakow/[slug]/page.tsx": existsSync("app/krakow/[slug]/page.tsx")
    ? readFileSync("app/krakow/[slug]/page.tsx", "utf8")
    : "",
  "app/sitemap.xml/route.ts": readFileSync("app/sitemap.xml/route.ts", "utf8"),
  "app/ai-index.json/route.ts": readFileSync("app/ai-index.json/route.ts", "utf8"),
  "public/llms.txt": readFileSync("public/llms.txt", "utf8"),
  "scripts/check-internal-links.mjs": readFileSync("scripts/check-internal-links.mjs", "utf8"),
  "package.json": readFileSync("package.json", "utf8"),
  "scripts/preflight.mjs": readFileSync("scripts/preflight.mjs", "utf8")
};

if (existsSync("app/search-index.json/route.ts")) {
  files["app/search-index.json/route.ts"] = readFileSync("app/search-index.json/route.ts", "utf8");
}

if (existsSync("app/components/ContentHubLinks.tsx")) {
  files["app/components/ContentHubLinks.tsx"] = readFileSync("app/components/ContentHubLinks.tsx", "utf8");
}

const slugCount = (files["lib/krakow-seo-pages.ts"].match(/slug:/g) || []).length;

const required = [
  ["lib/krakow-seo-pages.ts", "getAllKrakowSeoPages"],
  ["lib/krakow-seo-pages.ts", "tlumaczenie-dowodow-cyfrowych-krakow"],
  ["lib/krakow-seo-pages.ts", "tlumaczenie-whatsapp-telegram-signal-krakow"],
  ["lib/krakow-seo-pages.ts", "tlumaczenie-blik-kryptowaluty-krakow"],
  ["lib/krakow-seo-pages.ts", "tlumacz-przysiegly-rosyjski-krakow"],
  ["lib/krakow-seo-pages.ts", "tlumacz-przysiegly-angielski-krakow"],
  ["app/krakow/page.tsx", "getAllKrakowSeoPages"],
  ["app/krakow/[slug]/page.tsx", "generateStaticParams"],
  ["app/krakow/[slug]/page.tsx", "ProfessionalService"],
  ["app/krakow/[slug]/page.tsx", "FAQPage"],
  ["app/sitemap.xml/route.ts", "/krakow"],
  ["app/sitemap.xml/route.ts", "getAllKrakowSeoPages"],
  ["app/ai-index.json/route.ts", "krakowSeoPages"],
  ["public/llms.txt", "/krakow"],
  ["scripts/check-internal-links.mjs", "/krakow"],
  ["package.json", "check:krakow-seo"],
  ["scripts/preflight.mjs", "check:krakow-seo"]
];

if (files["app/search-index.json/route.ts"]) {
  required.push(["app/search-index.json/route.ts", "krakowSeoPage"]);
}

if (files["app/components/ContentHubLinks.tsx"]) {
  required.push(["app/components/ContentHubLinks.tsx", "/krakow"]);
}

const errors = [];

if (slugCount < 12) {
  errors.push(`lib/krakow-seo-pages.ts: expected at least 12 Krakow pages, got ${slugCount}`);
}

for (const [file, snippet] of required) {
  if (!files[file] || !files[file].includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Krakow SEO check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`OK: Krakow SEO pages exist (${slugCount}), have routes, schema, sitemap, llms.txt, AI index and internal links.`);
