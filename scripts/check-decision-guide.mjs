import { existsSync, readFileSync } from "node:fs";

const routePath = "app/dobierz-tlumaczenie/page.tsx";

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

const required = [
  [routePath, "Dobierz tłumaczenie"],
  [routePath, "/kontakt"],
  [routePath, "/tematy/dokumenty-z-ukrainy"],
  [routePath, "/tematy/sady-policja-prokuratura"],
  [routePath, "/tematy/tlumaczenia-poswiadczone"],
  [routePath, "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych"],
  ["app/sitemap.xml/route.ts", "/dobierz-tlumaczenie"],
  ["app/ai-index.json/route.ts", "/dobierz-tlumaczenie"],
  ["public/llms.txt", "/dobierz-tlumaczenie"],
  ["scripts/check-internal-links.mjs", "/dobierz-tlumaczenie"],
  ["package.json", "check:decision-guide"],
  ["scripts/preflight.mjs", "check:decision-guide"]
];

if (files["app/search-index.json/route.ts"]) {
  required.push(["app/search-index.json/route.ts", "/dobierz-tlumaczenie"]);
}

const errors = [];

for (const [file, snippet] of required) {
  if (!files[file] || !files[file].includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Decision guide check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: decision guide exists and is linked from sitemap, llms.txt, AI index and internal links.");
