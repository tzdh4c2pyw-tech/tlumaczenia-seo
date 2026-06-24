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
  ["app/components/ContentHubLinks.tsx", "data-component=\"content-hub-links\""],
  ["app/components/ContentHubLinks.tsx", "inline-style"],
  ["app/components/ContentHubLinks.tsx", "/krakow"],
  ["app/components/ContentHubLinks.tsx", "/malopolskie"],
  ["app/components/ContentHubLinks.tsx", "/lokalnie"],
  ["app/components/ContentHubLinks.tsx", "/tematy/tlumaczenia-poswiadczone"],
  ["app/components/ContentHubLinks.tsx", "/tematy/dokumenty-z-ukrainy"],
  ["app/components/ContentHubLinks.tsx", "/tematy/sady-policja-prokuratura"],
  ["app/components/ContentHubLinks.tsx", "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych"],
  ["app/components/ExpertConversionSection.tsx", "Jak przygotować zapytanie"],
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
