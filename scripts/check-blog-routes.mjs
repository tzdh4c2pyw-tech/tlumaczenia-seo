import { readFileSync } from "node:fs";

const blogIndex = readFileSync("app/blog/page.tsx", "utf8");
const blogArticle = readFileSync("app/blog/[slug]/page.tsx", "utf8");

const indexRequired = [
  'canonical: "/blog"',
  "export default function BlogPage",
  "getAllArticles()",
  'href={`/blog/${article.slug}`'
];

const articleRequired = [
  "generateStaticParams",
  "getArticleBySlug",
  "export default async function BlogArticlePage",
  "canonical: `/blog/${article.slug}`",
  '"@type": "FAQPage"'
];

const indexForbidden = [
  "getArticleBySlug",
  "generateStaticParams",
  "BlogArticlePage",
  "notFound()"
];

const articleForbidden = [
  "export default function BlogPage",
  'canonical: "/blog"'
];

const errors = [];

for (const snippet of indexRequired) {
  if (!blogIndex.includes(snippet)) {
    errors.push(`app/blog/page.tsx missing: ${snippet}`);
  }
}

for (const snippet of articleRequired) {
  if (!blogArticle.includes(snippet)) {
    errors.push(`app/blog/[slug]/page.tsx missing: ${snippet}`);
  }
}

for (const snippet of indexForbidden) {
  if (blogIndex.includes(snippet)) {
    errors.push(`app/blog/page.tsx must not contain: ${snippet}`);
  }
}

for (const snippet of articleForbidden) {
  if (blogArticle.includes(snippet)) {
    errors.push(`app/blog/[slug]/page.tsx must not contain: ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Blog route check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: blog index and blog article routes are correctly placed.");
