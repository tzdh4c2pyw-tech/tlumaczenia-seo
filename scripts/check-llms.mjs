import { readFileSync } from "node:fs";

const llms = readFileSync("public/llms.txt", "utf8");
const route = readFileSync("app/llms.txt/route.ts", "utf8");
const sitemap = readFileSync("app/sitemap.xml/route.ts", "utf8");

const checks = [
  ["public/llms.txt", llms, "# Tłumaczenia specjalistyczne Vadym Rekel"],
  ["public/llms.txt", llms, "Ukrainian translations"],
  ["public/llms.txt", llms, "Russian translations"],
  ["public/llms.txt", llms, "English translations"],
  ["public/llms.txt", llms, "digital evidence"],
  ["public/llms.txt", llms, "Primary language: Polish"],
  ["app/llms.txt/route.ts", route, "Content-Type"],
  ["app/llms.txt/route.ts", route, "text/plain"],
  ["app/sitemap.xml/route.ts", sitemap, "/llms.txt"]
];

const errors = [];

for (const [file, source, snippet] of checks) {
  if (!source.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("llms.txt check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: llms.txt exists, has route and is included in sitemap.");
