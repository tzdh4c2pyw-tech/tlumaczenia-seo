import { readFileSync } from "node:fs";

const file = "app/blog/[slug]/page.tsx";
const source = readFileSync(file, "utf8");

const requiredSnippets = [
  "const articleJsonLd =",
  '"@context": "https://schema.org"',
  '"@type": "Article"',
  "headline: article.title",
  "description: article.description",
  "datePublished: article.publishedAt",
  "dateModified: article.updatedAt",
  '"@type": "Person"',
  'name: "Vadym Rekel"',
  '"@type": "Organization"',
  'name: "Tłumaczenia specjalistyczne Vadym Rekel"',
  "mainEntityOfPage:",
  '"@type": "WebPage"',
  "const faqJsonLd =",
  '"@type": "FAQPage"',
  "article.faqs.map",
  '"@type": "Question"',
  "acceptedAnswer:",
  '"@type": "Answer"',
  "JSON.stringify(articleJsonLd)",
  "JSON.stringify(faqJsonLd)"
];

const missing = requiredSnippets.filter((snippet) => !source.includes(snippet));

if (missing.length > 0) {
  console.error("Blog schema check failed. Brakuje wymaganych elementów:");
  for (const snippet of missing) {
    console.error(`- ${snippet}`);
  }
  process.exit(1);
}

console.log("OK: blog article schema includes Article and FAQPage JSON-LD.");
