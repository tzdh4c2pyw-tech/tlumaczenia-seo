import { existsSync, readFileSync } from "node:fs";

const routePath = "app/search-index.json/route.ts";

if (!existsSync(routePath)) {
  console.error("Search index check failed:");
  console.error("- missing app/search-index.json/route.ts");
  process.exit(1);
}

const route = readFileSync(routePath, "utf8");
const sitemap = readFileSync("app/sitemap.xml/route.ts", "utf8");
const contentIndex = readFileSync("app/content-index.json/route.ts", "utf8");
const resources = readFileSync("public/resources.txt", "utf8");
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
  ["app/content-index.json/route.ts", contentIndex, "/search-index.json"],
  ["public/resources.txt", resources, "/search-index.json"],
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

console.log("OK: search index route exists and is linked from sitemap, resources.txt and content index.");
