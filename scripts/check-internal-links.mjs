import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const filesToScan = [];

function walk(dir) {
  if (!existsSync(dir)) {
    return;
  }

  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);

    if (stat.isDirectory()) {
      if ([".next", "node_modules", ".git"].includes(entry)) {
        continue;
      }
      walk(full);
      continue;
    }

    if (/\.(tsx|ts|jsx|js|mdx|md|txt)$/.test(entry)) {
      filesToScan.push(full);
    }
  }
}

function readIfExists(path) {
  return existsSync(path) ? readFileSync(path, "utf8") : "";
}

function extractSlugs(source) {
  const slugs = new Set();
  const patterns = [
    /slug:\s*"([^"]+)"/g,
    /slug:\s*'([^']+)'/g
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(source)) !== null) {
      if (match[1] && !match[1].includes("${")) {
        slugs.add(match[1]);
      }
    }
  }

  return slugs;
}

const landingSource = readIfExists("lib/landing-pages.ts");
const blogSource = readIfExists("lib/blog.ts");
const topicSource = readIfExists("lib/topic-clusters.ts");
const expertGuidesSource = readIfExists("lib/expert-guides.ts");
const localSeoSource = readIfExists("lib/local-seo-articles.ts");
const malopolskieSeoSource = readIfExists("lib/malopolskie-seo-pages.ts");
const krakowSeoSource = readIfExists("lib/krakow-seo-pages.ts");

const landingSlugs = extractSlugs(landingSource);
const blogSlugs = extractSlugs(blogSource);
const topicSlugs = extractSlugs(topicSource);
const expertGuideSlugs = extractSlugs(expertGuidesSource);
const localSeoArticleSlugs = extractSlugs(localSeoSource);
const malopolskieSeoSlugs = extractSlugs(malopolskieSeoSource);
const krakowSeoSlugs = extractSlugs(krakowSeoSource);

const knownRoutes = new Set([
  "/",
  "/blog",
  "/blog/indeks-ekspercki",
  "/blog/slownik-prawno-tlumaczeniowy",
  "/blog/tlumaczenia-ustne-i-konferencje",
  "/blog/dowody-cyfrowe-i-korespondencja",
  "/blog/policja-prokuratura-sad",
  "/blog/sprawy-cywilne-i-dokumenty",
  "/blog/prawo-karne-przestepstwa-i-akta",
  "/blog/tlumaczenia-dokumentow-z-ukrainy-w-postepowaniach",
  "/blog/tlumaczenia-ustne-konferencje-i-spotkania",
  "/blog/tlumaczenia-dowodow-cyfrowych-w-sprawach-karnych",
  "/blog/tlumaczenia-dla-policji-prokuratury-i-sadu",
  "/blog/tlumaczenia-w-sprawach-cywilnych",
  "/blog/tlumaczenia-w-sprawach-karnych",
  "/kontakt",
  "/pdf-na-tekst",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/ai-index.json",
  "/internal-link-graph.json",
  "/feed.xml",
  "/tematy",
  "/poradniki",
  "/dobierz-tlumaczenie",
  "/faq",
  "/lokalnie",
  "/malopolskie",
  "/krakow"
]);

for (const slug of landingSlugs) {
  knownRoutes.add(`/${slug}`);
}

for (const slug of blogSlugs) {
  knownRoutes.add(`/blog/${slug}`);
}

for (const slug of topicSlugs) {
  knownRoutes.add(`/tematy/${slug}`);
}

for (const slug of expertGuideSlugs) {
  knownRoutes.add(`/poradniki/${slug}`);
}

for (const slug of localSeoArticleSlugs) {
  knownRoutes.add(`/lokalnie/${slug}`);
}

for (const slug of malopolskieSeoSlugs) {
  knownRoutes.add(`/malopolskie/${slug}`);
}

for (const slug of krakowSeoSlugs) {
  knownRoutes.add(`/krakow/${slug}`);
}

walk("app");
walk("lib");

const errors = [];

function shouldIgnoreLink(link) {
  if (!link) return true;
  if (!link.startsWith("/")) return true;
  if (link.startsWith("//")) return true;
  if (link.includes("${")) return true;
  if (link.includes("*")) return true;
  if (link.startsWith("/api/")) return true;
  if (link.startsWith("/_next/")) return true;
  if (link.match(/\.(png|jpg|jpeg|webp|svg|ico|pdf|zip|xml|txt|json)$/)) return true;

  return false;
}

function normalizeLink(link) {
  return link.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
}

const linkPatterns = [
  /href:\s*"([^"]+)"/g,
  /href:\s*'([^']+)'/g,
  /href="([^"]+)"/g,
  /href='([^']+)'/g,
  /url:\s*"([^"]+)"/g,
  /url:\s*'([^']+)'/g,
  /item:\s*"([^"]+)"/g,
  /item:\s*'([^']+)'/g
];

for (const file of filesToScan) {
  if (file.includes("scripts/check-internal-links.mjs")) {
    continue;
  }

  const source = readFileSync(file, "utf8");

  for (const pattern of linkPatterns) {
    let match;
    while ((match = pattern.exec(source)) !== null) {
      const raw = match[1];

      if (shouldIgnoreLink(raw)) {
        continue;
      }

      const link = normalizeLink(raw);

      if (!knownRoutes.has(link)) {
        errors.push(`${file}: unknown internal link ${link}`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error("Internal links check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: static internal links point to known routes, landing pages, blog articles, topic clusters or expert guides.");
