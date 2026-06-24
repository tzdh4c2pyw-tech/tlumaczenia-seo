import { readFileSync } from "node:fs";

const file = "app/[slug]/page.tsx";
const source = readFileSync(file, "utf8");

const requiredSnippets = [
  "generateStaticParams",
  "getAllLandingPages",
  "getLandingPageBySlug",
  "export async function generateMetadata",
  "canonical: `/${page.slug}`",
  "openGraph:",
  "title: page.title",
  "description: page.description",
  "notFound()"
];

const missing = requiredSnippets.filter((snippet) => !source.includes(snippet));

const hasDefaultExport =
  source.includes("export default function") ||
  source.includes("export default async function");

if (!hasDefaultExport) {
  missing.push("export default function albo export default async function");
}

if (missing.length > 0) {
  console.error("Landing route check failed. Brakuje wymaganych elementów:");
  for (const snippet of missing) {
    console.error(`- ${snippet}`);
  }
  process.exit(1);
}

console.log("OK: landing page route includes static params, metadata, canonical, notFound handling and default export.");
