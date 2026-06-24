import { readFileSync } from "node:fs";

const data = readFileSync("lib/expert-guides.ts", "utf8");
const indexPage = readFileSync("app/poradniki/page.tsx", "utf8");
const articlePage = readFileSync("app/poradniki/[slug]/page.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.xml/route.ts", "utf8");
const aiIndex = readFileSync("app/ai-index.json/route.ts", "utf8");
const feed = readFileSync("app/feed.xml/route.ts", "utf8");
const llms = readFileSync("public/llms.txt", "utf8");
const packageJson = readFileSync("package.json", "utf8");
const preflight = readFileSync("scripts/preflight.mjs", "utf8");

const guideCount = (data.match(/slug: "/g) || []).length;

const required = [
  ["lib/expert-guides.ts", data, "export const expertGuides"],
  ["lib/expert-guides.ts", data, "export function getAllExpertGuides"],
  ["lib/expert-guides.ts", data, "export function getExpertGuideBySlug"],
  ["lib/expert-guides.ts", data, "tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych"],
  ["lib/expert-guides.ts", data, "tlumaczenie-korespondencji-telegram-whatsapp-signal"],
  ["app/poradniki/page.tsx", indexPage, "getAllExpertGuides"],
  ["app/poradniki/[slug]/page.tsx", articlePage, "generateStaticParams"],
  ["app/poradniki/[slug]/page.tsx", articlePage, '"@type": "Article"'],
  ["app/poradniki/[slug]/page.tsx", articlePage, '"@type": "FAQPage"'],
  ["app/poradniki/[slug]/page.tsx", articlePage, '"@type": "BreadcrumbList"'],
  ["app/sitemap.xml/route.ts", sitemap, "getAllExpertGuides"],
  ["app/sitemap.xml/route.ts", sitemap, "/poradniki"],
  ["app/ai-index.json/route.ts", aiIndex, "expertGuides"],
  ["app/feed.xml/route.ts", feed, "getAllExpertGuides"],
  ["public/llms.txt", llms, "/poradniki"],
  ["package.json", packageJson, "check:expert-guides"],
  ["scripts/preflight.mjs", preflight, "check:expert-guides"]
];

const errors = [];

if (guideCount < 8) {
  errors.push(`lib/expert-guides.ts: expected at least 8 guides, found ${guideCount}`);
}

for (const [file, source, snippet] of required) {
  if (!source.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Expert guides check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: expert guides exist, have routes, schema, sitemap, llms.txt, feed and AI index coverage.");
