import { readFileSync } from "node:fs";

const route = readFileSync("app/ai-index.json/route.ts", "utf8");
const sitemap = readFileSync("app/sitemap.xml/route.ts", "utf8");
const llms = readFileSync("public/llms.txt", "utf8");

const checks = [
  ["app/ai-index.json/route.ts", route, "getAllArticles"],
  ["app/ai-index.json/route.ts", route, "getAllLandingPages"],
  ["app/ai-index.json/route.ts", route, "export async function GET()"],
  ["app/ai-index.json/route.ts", route, "Response.json"],
  ["app/ai-index.json/route.ts", route, "landingPages"],
  ["app/ai-index.json/route.ts", route, "blogArticles"],
  ["app/ai-index.json/route.ts", route, "contentScope"],
  ["app/ai-index.json/route.ts", route, "certified translations"],
  ["app/ai-index.json/route.ts", route, "digital evidence"],
  ["app/sitemap.xml/route.ts", sitemap, "/ai-index.json"],
  ["public/llms.txt", llms, "/ai-index.json"]
];

const errors = [];

for (const [file, source, snippet] of checks) {
  if (!source.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("AI index check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: AI index route exists, is linked from sitemap and llms.txt.");
