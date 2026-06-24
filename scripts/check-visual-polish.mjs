import { readFileSync } from "node:fs";

const files = {
  "app/components/ContentHubLinks.tsx": readFileSync(
    "app/components/ContentHubLinks.tsx",
    "utf8"
  ),
  "app/components/ExpertConversionSection.tsx": readFileSync(
    "app/components/ExpertConversionSection.tsx",
    "utf8"
  ),
  "package.json": readFileSync("package.json", "utf8"),
  "scripts/preflight.mjs": readFileSync("scripts/preflight.mjs", "utf8")
};

const required = [
  ["app/components/ContentHubLinks.tsx", "rounded-[2rem]"],
  ["app/components/ContentHubLinks.tsx", "grid gap-4 md:grid-cols-2"],
  ["app/components/ContentHubLinks.tsx", "Małopolskie SEO"],
  ["app/components/ContentHubLinks.tsx", "Lokalne artykuły SEO"],
  ["app/components/ExpertConversionSection.tsx", "rounded-[2rem]"],
  ["app/components/ExpertConversionSection.tsx", "Jak przygotować zapytanie"],
  ["app/components/ExpertConversionSection.tsx", "grid gap-4 border-t"],
  ["package.json", "check:visual-polish"],
  ["scripts/preflight.mjs", "check:visual-polish"]
];

const errors = [];

for (const [file, snippet] of required) {
  if (!files[file].includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Visual polish check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: visual polish components are present and preflight-covered.");
