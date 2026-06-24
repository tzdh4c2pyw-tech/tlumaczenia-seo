import { existsSync, readFileSync } from "node:fs";

const routePath = "app/search-index.json/route.ts";

if (!existsSync(routePath)) {
  console.error("Search index check failed:");
  console.error("- missing app/search-index.json/route.ts");
  process.exit(1);
}

const route = readFileSync(routePath, "utf8");
const sitemap = readFileSync("app/sitemap.xml/route.ts", "utf8");
const aiIndex = readFileSync("app/ai-index.json/route.ts", "utf8");
const llms = readFileSync("public/llms.txt", "utf8");
const packageJson = readFileSync("package.json", "utf8");
const preflight = readFileSync("scripts/preflight.mjs", "utf8");

const required = [
  [routePath, route, "getAllLandingPages"],
  [routePath, route, "getAllArticles"],
  [routePath, route, "getAllTopicClusters"],
  [routePath, route, "getAllExpertGuides"],
  [routePath, route, "landingPage"],
  [routePath, route, "blogArticle"],
  [routePath, route, "topicCluster"],
  [routePath, route, "expertGuide"],
  [routePath, route, "search index"],
  ["app/sitemap.xml/route.ts", sitemap, "/search-index.json"],
  ["app/ai-index.json/route.ts", aiIndex, "/search-index.json"],
  ["public/llms.txt", llms, "/search-index.json"],
  ["package.json", packageJson, "check:search-index"],
  ["scripts/preflight.mjs", preflight, "check:search-index"]
];

const errors = [];

for (const [file, source, snippet] of required) {
  if (!source.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Search index check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: search index route exists and is linked from sitemap, llms.txt and AI index.");
