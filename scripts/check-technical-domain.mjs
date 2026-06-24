import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const rootDirs = ["app", "lib", "public"];
const forbidden = [
  "tlumaczenia-seo.vercel.app",
  "localhost",
  "127.0.0.1"
];

const allowedFiles = new Set([
  "scripts/check-technical-domain.mjs"
]);

const matches = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);

    if (stat.isDirectory()) {
      if (entry === ".next" || entry === "node_modules" || entry === ".git") {
        continue;
      }

      walk(path);
      continue;
    }

    if (!stat.isFile()) {
      continue;
    }

    if (allowedFiles.has(path)) {
      continue;
    }

    const text = readFileSync(path, "utf8");

    for (const needle of forbidden) {
      if (text.includes(needle)) {
        matches.push(`${path}: contains ${needle}`);
      }
    }
  }
}

for (const dir of rootDirs) {
  try {
    walk(dir);
  } catch {
    // Directory may not exist.
  }
}

if (matches.length > 0) {
  console.error("Znaleziono techniczną domenę albo adres lokalny w kodzie:");
  for (const match of matches) {
    console.error(`- ${match}`);
  }
  process.exit(1);
}

console.log("OK: brak technicznej domeny Vercel i adresów lokalnych w app/lib/public.");
