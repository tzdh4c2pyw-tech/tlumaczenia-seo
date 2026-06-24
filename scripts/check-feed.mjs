import { readFileSync } from "node:fs";

const route = readFileSync("app/feed.xml/route.ts", "utf8");
const sitemap = readFileSync("app/sitemap.xml/route.ts", "utf8");
const llms = readFileSync("public/llms.txt", "utf8");
const aiIndex = readFileSync("app/ai-index.json/route.ts", "utf8");

const checks = [
  ["app/feed.xml/route.ts", route, "getAllArticles"],
  ["app/feed.xml/route.ts", route, "export async function GET()"],
  ["app/feed.xml/route.ts", route, "<rss version="],
  ["app/feed.xml/route.ts", route, "<channel>"],
  ["app/feed.xml/route.ts", route, "<item>"],
  ["app/feed.xml/route.ts", route, "application/rss+xml"],
  ["app/sitemap.xml/route.ts", sitemap, "/feed.xml"],
  ["public/llms.txt", llms, "/feed.xml"],
  ["app/ai-index.json/route.ts", aiIndex, "/feed.xml"]
];

const errors = [];

for (const [file, source, snippet] of checks) {
  if (!source.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Feed check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: expert RSS feed exists and is linked from sitemap, llms.txt and AI index.");
