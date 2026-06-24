import { existsSync, readFileSync } from "node:fs";

const errors = [];

const files = {
  "scripts/audit-rendered-pages.mjs": existsSync("scripts/audit-rendered-pages.mjs")
    ? readFileSync("scripts/audit-rendered-pages.mjs", "utf8")
    : "",
  "package.json": existsSync("package.json")
    ? readFileSync("package.json", "utf8")
    : "",
  "scripts/preflight.mjs": existsSync("scripts/preflight.mjs")
    ? readFileSync("scripts/preflight.mjs", "utf8")
    : ""
};

const required = [
  ["scripts/audit-rendered-pages.mjs", "Rendered routes audited"],
  ["scripts/audit-rendered-pages.mjs", "raw-technical-text"],
  ["scripts/audit-rendered-pages.mjs", "long-paragraph"],
  ["scripts/audit-rendered-pages.mjs", "missing-h1"],
  ["scripts/audit-rendered-pages.mjs", "reports/rendered-pages-audit.json"],
  ["package.json", "audit:rendered-pages"],
  ["package.json", "check:rendered-pages-audit"],
  ["scripts/preflight.mjs", "check:rendered-pages-audit"]
];

for (const [file, marker] of required) {
  if (!files[file].includes(marker)) {
    errors.push(`${file}: missing ${marker}`);
  }
}

if (errors.length > 0) {
  console.error("Rendered pages audit check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("OK: rendered pages audit script exists and is preflight-covered.");
