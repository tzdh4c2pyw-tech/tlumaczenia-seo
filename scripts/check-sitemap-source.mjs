import { readFileSync } from "node:fs";

const source = readFileSync("app/sitemap.xml/route.ts", "utf8");

const requiredSnippets = [
  "getAllArticles",
  "getAllLandingPages",
  "GET()",
  "/blog",
  "/pdf-na-tekst",
  "/llms.txt",
  "/ai-index.json",
  "/feed.xml",
  "application/xml",
  "urlset",
  "http://www.sitemaps.org/schemas/sitemap/0.9"
];

const flexibleGroups = [
  {
    label: "core pages array",
    ok:
      source.includes("const corePages") ||
      source.includes("const basePages") ||
      source.includes("const staticPages") ||
      source.includes("corePages")
  },
  {
    label: "landing pages mapping",
    ok:
      source.includes("getAllLandingPages().map") ||
      source.includes("getAllLandingPages().forEach") ||
      source.includes("landingPages")
  },
  {
    label: "blog articles mapping",
    ok:
      source.includes("getAllArticles().map") ||
      source.includes("getAllArticles().forEach") ||
      source.includes("articles")
  },
  {
    label: "topic clusters support",
    ok:
      source.includes("getAllTopicClusters") ||
      source.includes("topicClusters") ||
      source.includes("/tematy/")
  }
];

const errors = [];

for (const snippet of requiredSnippets) {
  if (!source.includes(snippet)) {
    errors.push(`brakuje: ${snippet}`);
  }
}

for (const group of flexibleGroups) {
  if (!group.ok) {
    errors.push(`brakuje grupy: ${group.label}`);
  }
}

if (errors.length > 0) {
  console.error("Sitemap source check failed. Brakuje wymaganych elementów:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: sitemap source includes core pages, landing pages, blog articles, AI endpoints, feed and topic hubs.");
