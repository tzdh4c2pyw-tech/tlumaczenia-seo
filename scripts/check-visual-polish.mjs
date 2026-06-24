import { readFileSync } from "node:fs";

const files = {
  "app/components/ContentHubLinks.tsx": readFileSync("app/components/ContentHubLinks.tsx", "utf8"),
  "app/components/ExpertConversionSection.tsx": readFileSync("app/components/ExpertConversionSection.tsx", "utf8"),
  "app/components/RegionalSeoNavigation.tsx": readFileSync("app/components/RegionalSeoNavigation.tsx", "utf8"),
  "app/components/LocalPageShell.tsx": readFileSync("app/components/LocalPageShell.tsx", "utf8"),
  "package.json": readFileSync("package.json", "utf8"),
  "scripts/preflight.mjs": readFileSync("scripts/preflight.mjs", "utf8")
};

const required = [
  ["app/components/ContentHubLinks.tsx", "inline-style"],
  ["app/components/ContentHubLinks.tsx", "data-component=\"content-hub-links\""],
  ["app/components/ContentHubLinks.tsx", "/krakow"],
  ["app/components/ContentHubLinks.tsx", "/malopolskie"],
  ["app/components/ContentHubLinks.tsx", "/lokalnie"],
  ["app/components/ExpertConversionSection.tsx", "inline-style"],
  ["app/components/ExpertConversionSection.tsx", "data-component=\"expert-conversion-section\""],
  ["app/components/ExpertConversionSection.tsx", "Jak przygotować zapytanie"],
  ["app/components/RegionalSeoNavigation.tsx", "inline-style"],
  ["app/components/RegionalSeoNavigation.tsx", "data-component=\"regional-seo-navigation\""],
  ["app/components/LocalPageShell.tsx", "inline-style"],
  ["app/components/LocalPageShell.tsx", "data-component=\"local-page-shell\""],
  ["app/components/LocalPageShell.tsx", "data-component=\"local-article-shell\""],
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

console.log("OK: visual polish components use forced inline-style rendering.");
