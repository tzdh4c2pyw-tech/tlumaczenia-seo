import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const sourceRoots = ["app", "lib"];

function walk(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);

    if (stat.isDirectory()) {
      if (entry === ".next" || entry === "node_modules") continue;
      files.push(...walk(path));
      continue;
    }

    if (/\.(tsx|ts|jsx|js)$/.test(entry)) {
      files.push(path);
    }
  }

  return files;
}

function extractSlugs(file) {
  const source = readFileSync(file, "utf8");
  const slugs = new Set();

  for (const match of source.matchAll(/slug:\s*"([^"]+)"/g)) {
    slugs.add(match[1]);
  }

  return slugs;
}

const landingSlugs = extractSlugs("lib/landing-pages.ts");
const blogSlugs = extractSlugs("lib/blog.ts");

const allowedPaths = new Set([
  "/",
  "/blog",
  "/kontakt",
  "/pdf-na-tekst"
]);

for (const slug of landingSlugs) {
  allowedPaths.add(`/${slug}`);
}

for (const slug of blogSlugs) {
  allowedPaths.add(`/blog/${slug}`);
}

const linkPatterns = [
  /href="([^"]+)"/g,
  /href='([^']+)'/g,
  /href:\s*"([^"]+)"/g,
  /href:\s*'([^']+)'/g
];

const errors = [];

for (const root of sourceRoots) {
  for (const file of walk(root)) {
    const source = readFileSync(file, "utf8");

    for (const pattern of linkPatterns) {
      for (const match of source.matchAll(pattern)) {
        const raw = match[1];

        if (!raw.startsWith("/")) continue;
        if (raw.startsWith("//")) continue;

        const clean = raw.split("#")[0].split("?")[0] || "/";

        if (clean.includes("${")) continue;

        if (!allowedPaths.has(clean)) {
          errors.push(`${file}: unknown internal link ${raw}`);
        }
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

console.log("OK: static internal links point to known routes, landing pages or blog articles.");
