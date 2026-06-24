import { existsSync, readFileSync } from "node:fs";

const checkedPages = [
  "app/page.tsx",
  "app/blog/page.tsx",
  "app/tematy/page.tsx",
  "app/poradniki/page.tsx"
];

const errors = [];

for (const file of checkedPages) {
  if (!existsSync(file)) continue;
  const text = readFileSync(file, "utf8");

  if (text.includes("Potrzebujesz tłumaczenia dokumentów")) {
    errors.push(`${file}: contains raw expert conversion heading`);
  }

  if (text.includes("Jak przygotować zapytanie")) {
    errors.push(`${file}: contains raw expert conversion preparation block`);
  }

  if (!text.includes("ExpertConversionSection")) {
    errors.push(`${file}: missing ExpertConversionSection`);
  }
}

const component = readFileSync("app/components/ExpertConversionSection.tsx", "utf8");
const pkg = readFileSync("package.json", "utf8");
const preflight = readFileSync("scripts/preflight.mjs", "utf8");

if (!component.includes("data-component=\"expert-conversion-section\"")) {
  errors.push("ExpertConversionSection: missing data-component marker");
}

if (!pkg.includes("check:no-raw-expert-conversion")) {
  errors.push("package.json: missing check:no-raw-expert-conversion");
}

if (!preflight.includes("check:no-raw-expert-conversion")) {
  errors.push("scripts/preflight.mjs: missing check:no-raw-expert-conversion");
}

if (errors.length > 0) {
  console.error("No raw expert conversion check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("OK: no raw expert conversion sections remain on main hub pages.");
