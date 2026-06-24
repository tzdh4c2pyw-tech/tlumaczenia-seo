import { readFileSync } from "node:fs";

const file = "lib/landing-pages.ts";
const source = readFileSync(file, "utf8");

const requiredSnippets = [
  "export type LandingPage =",
  "slug: string;",
  "type: LandingPageType;",
  "title: string;",
  "description: string;",
  "h1: string;",
  "lead: string;",
  "badge: string;",
  "keywords: string[];",
  "sections: LandingPageSection[];",
  "ctaTitle: string;",
  "ctaText: string;",
  "export const landingPages: LandingPage[] =",
  "export function getAllLandingPages()",
  "export function getLandingPageBySlug"
];

const missing = requiredSnippets.filter((snippet) => !source.includes(snippet));

if (missing.length > 0) {
  console.error("Landing pages data check failed. Brakuje wymaganych elementów:");
  for (const snippet of missing) {
    console.error(`- ${snippet}`);
  }
  process.exit(1);
}

console.log("OK: landing pages data model includes required SEO/render fields.");
