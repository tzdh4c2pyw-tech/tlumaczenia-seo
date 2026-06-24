import { readFileSync } from "node:fs";

const file = "app/sitemap.xml/route.ts";
const source = readFileSync(file, "utf8");

const requiredSnippets = [
  'import { getAllArticles } from "@/lib/blog";',
  'import { getAllLandingPages } from "@/lib/landing-pages";',
  "export async function GET()",
  "const corePages = [",
  "getAllLandingPages().map",
  "getAllArticles().map",
  "url: siteUrl",
  "`${siteUrl}/blog`",
  "`${siteUrl}/pdf-na-tekst`",
  "`${siteUrl}/${page.slug}`",
  "`${siteUrl}/blog/${article.slug}`",
  "application/xml",
  "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">"
];

const missing = requiredSnippets.filter((snippet) => !source.includes(snippet));

if (missing.length > 0) {
  console.error("Sitemap source check failed. Brakuje wymaganych elementów:");
  for (const snippet of missing) {
    console.error(`- ${snippet}`);
  }
  process.exit(1);
}

console.log("OK: sitemap source includes core pages, landing pages and blog articles.");
