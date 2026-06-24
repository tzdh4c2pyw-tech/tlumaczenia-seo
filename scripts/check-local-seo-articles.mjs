import { existsSync, readFileSync } from "node:fs";

const files = {
  "lib/local-seo-articles.ts": existsSync("lib/local-seo-articles.ts")
    ? readFileSync("lib/local-seo-articles.ts", "utf8")
    : "",
  "app/lokalnie/page.tsx": existsSync("app/lokalnie/page.tsx")
    ? readFileSync("app/lokalnie/page.tsx", "utf8")
    : "",
  "app/lokalnie/[slug]/page.tsx": existsSync("app/lokalnie/[slug]/page.tsx")
    ? readFileSync("app/lokalnie/[slug]/page.tsx", "utf8")
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

const slugs = [...files["lib/local-seo-articles.ts"].matchAll(/slug:\s*"([^"]+)"/g)].map(
  (match) => match[1]
);

const required = [
  ["lib/local-seo-articles.ts", "getAllLocalSeoArticles"],
  ["lib/local-seo-articles.ts", "Kraków"],
  ["lib/local-seo-articles.ts", "Wieliczka"],
  ["lib/local-seo-articles.ts", "Skawina"],
  ["lib/local-seo-articles.ts", "Niepołomice"],
  ["lib/local-seo-articles.ts", "Tarnów"],
  ["lib/local-seo-articles.ts", "Nowy Sącz"],
  ["app/lokalnie/page.tsx", "getAllLocalSeoArticles"],
  ["app/lokalnie/[slug]/page.tsx", "generateStaticParams"],
  ["app/lokalnie/[slug]/page.tsx", "Article"],
  ["app/lokalnie/[slug]/page.tsx", "FAQPage"],
  ["app/sitemap.xml/route.ts", "/lokalnie"],
  ["app/sitemap.xml/route.ts", "getAllLocalSeoArticles"],
  ["app/ai-index.json/route.ts", "localArticles"],
  ["public/llms.txt", "/lokalnie"],
  ["scripts/check-internal-links.mjs", "/lokalnie"],
  ["package.json", "check:local-seo"],
  ["scripts/preflight.mjs", "check:local-seo"]
];

if (files["app/search-index.json/route.ts"]) {
  required.push(["app/search-index.json/route.ts", "localSeoArticle"]);
}

if (files["app/components/ContentHubLinks.tsx"]) {
  required.push(["app/components/ContentHubLinks.tsx", "/lokalnie"]);
}

const errors = [];

if (slugs.length < 10) {
  errors.push(`lib/local-seo-articles.ts: expected at least 10 local articles, got ${slugs.length}`);
}

for (const [file, snippet] of required) {
  if (!files[file] || !files[file].includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Local SEO articles check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`OK: local SEO articles exist (${slugs.length}), have routes, schema, sitemap, llms.txt, AI index and internal links.`);
