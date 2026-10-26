import { readFileSync } from "node:fs";

const route = readFileSync("app/content-index.json/route.ts", "utf8");
const sitemap = readFileSync("app/sitemap.xml/route.ts", "utf8");
const resources = readFileSync("public/resources.txt", "utf8");

const checks = [
  ["app/content-index.json/route.ts", route, "getAllArticles"],
  ["app/content-index.json/route.ts", route, "getAllLandingPages"],
  ["app/content-index.json/route.ts", route, "export async function GET()"],
  ["app/content-index.json/route.ts", route, "Response.json"],
  ["app/content-index.json/route.ts", route, "landingPages"],
  ["app/content-index.json/route.ts", route, "blogArticles"],
  ["app/content-index.json/route.ts", route, "contentScope"],
  ["app/content-index.json/route.ts", route, "certified translations"],
  ["app/content-index.json/route.ts", route, "digital evidence"],
  ["app/sitemap.xml/route.ts", sitemap, "/content-index.json"],
  ["public/resources.txt", resources, "/content-index.json"]
];

const errors = [];

for (const [file, source, snippet] of checks) {
  if (!source.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("content index check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: content index route exists, is linked from sitemap and resources.txt.");
