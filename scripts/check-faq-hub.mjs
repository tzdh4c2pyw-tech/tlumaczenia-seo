import { existsSync, readFileSync } from "node:fs";

const routePath = "app/faq/page.tsx";

const files = {
  [routePath]: existsSync(routePath) ? readFileSync(routePath, "utf8") : "",
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

const required = [
  [routePath, "FAQPage"],
  [routePath, "Najczęstsze pytania"],
  [routePath, "/kontakt"],
  [routePath, "/dobierz-tlumaczenie"],
  [routePath, "/poradniki"],
  ["app/sitemap.xml/route.ts", "/faq"],
  ["app/ai-index.json/route.ts", "/faq"],
  ["public/llms.txt", "/faq"],
  ["scripts/check-internal-links.mjs", "/faq"],
  ["package.json", "check:faq-hub"],
  ["scripts/preflight.mjs", "check:faq-hub"]
];

if (files["app/search-index.json/route.ts"]) {
  required.push(["app/search-index.json/route.ts", "/faq"]);
}

if (files["app/components/ContentHubLinks.tsx"]) {
  required.push(["app/components/ContentHubLinks.tsx", "/faq"]);
}

const errors = [];

for (const [file, snippet] of required) {
  if (!files[file] || !files[file].includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("FAQ hub check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: FAQ hub exists and is linked from sitemap, llms.txt, AI index and internal links.");
