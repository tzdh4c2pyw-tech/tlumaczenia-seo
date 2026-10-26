import { readFileSync } from "node:fs";

const resources = readFileSync("content/resources.txt", "utf8");
const route = readFileSync("app/resources.txt/route.ts", "utf8");
const sitemap = readFileSync("app/sitemap.xml/route.ts", "utf8");

const checks = [
  ["content/resources.txt", resources, "# Tłumaczenia specjalistyczne Vadym Rekel"],
  ["content/resources.txt", resources, "Ukrainian translations"],
  ["content/resources.txt", resources, "Russian translations"],
  ["content/resources.txt", resources, "English translations"],
  ["content/resources.txt", resources, "digital evidence"],
  ["content/resources.txt", resources, "Primary language: Polish"],
  ["app/resources.txt/route.ts", route, "Content-Type"],
  ["app/resources.txt/route.ts", route, "text/plain"],
  ["app/sitemap.xml/route.ts", sitemap, "/resources.txt"]
];

const errors = [];

for (const [file, source, snippet] of checks) {
  if (!source.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("resources.txt check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: resources.txt exists, has route and is included in sitemap.");
