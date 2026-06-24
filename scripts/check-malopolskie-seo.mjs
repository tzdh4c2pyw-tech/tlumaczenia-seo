import { existsSync, readFileSync } from "node:fs";

const files = {
  "lib/malopolskie-seo-pages.ts": existsSync("lib/malopolskie-seo-pages.ts")
    ? readFileSync("lib/malopolskie-seo-pages.ts", "utf8")
    : "",
  "app/malopolskie/page.tsx": existsSync("app/malopolskie/page.tsx")
    ? readFileSync("app/malopolskie/page.tsx", "utf8")
    : "",
  "app/malopolskie/[slug]/page.tsx": existsSync("app/malopolskie/[slug]/page.tsx")
    ? readFileSync("app/malopolskie/[slug]/page.tsx", "utf8")
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

const cityCount = (files["lib/malopolskie-seo-pages.ts"].match(/city:/g) || []).length;

const required = [
  ["lib/malopolskie-seo-pages.ts", "getAllMalopolskieSeoPages"],
  ["lib/malopolskie-seo-pages.ts", "Kraków"],
  ["lib/malopolskie-seo-pages.ts", "Wieliczka"],
  ["lib/malopolskie-seo-pages.ts", "Skawina"],
  ["lib/malopolskie-seo-pages.ts", "Niepołomice"],
  ["lib/malopolskie-seo-pages.ts", "Tarnów"],
  ["lib/malopolskie-seo-pages.ts", "Nowy Sącz"],
  ["lib/malopolskie-seo-pages.ts", "Zakopane"],
  ["app/malopolskie/page.tsx", "getAllMalopolskieSeoPages"],
  ["app/malopolskie/[slug]/page.tsx", "generateStaticParams"],
  ["app/malopolskie/[slug]/page.tsx", "ProfessionalService"],
  ["app/malopolskie/[slug]/page.tsx", "FAQPage"],
  ["app/sitemap.xml/route.ts", "/malopolskie"],
  ["app/sitemap.xml/route.ts", "getAllMalopolskieSeoPages"],
  ["app/ai-index.json/route.ts", "malopolskieSeoPages"],
  ["public/llms.txt", "/malopolskie"],
  ["scripts/check-internal-links.mjs", "/malopolskie"],
  ["package.json", "check:malopolskie-seo"],
  ["scripts/preflight.mjs", "check:malopolskie-seo"]
];

if (files["app/search-index.json/route.ts"]) {
  required.push(["app/search-index.json/route.ts", "malopolskieSeoPage"]);
}

if (files["app/components/ContentHubLinks.tsx"]) {
  required.push(["app/components/ContentHubLinks.tsx", "/malopolskie"]);
}

const errors = [];

if (cityCount < 18) {
  errors.push(`lib/malopolskie-seo-pages.ts: expected at least 18 city entries, got ${cityCount}`);
}

for (const [file, snippet] of required) {
  if (!files[file] || !files[file].includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Malopolskie SEO check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`OK: Malopolskie SEO pages exist (${cityCount}), have routes, schema, sitemap, llms.txt, AI index and internal links.`);
