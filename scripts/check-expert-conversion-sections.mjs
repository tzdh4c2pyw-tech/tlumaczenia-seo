import { readFileSync } from "node:fs";

const files = {
  "app/components/ExpertConversionSections.tsx": readFileSync(
    "app/components/ExpertConversionSections.tsx",
    "utf8"
  ),
  "app/page.tsx": readFileSync("app/page.tsx", "utf8"),
  "app/blog/page.tsx": readFileSync("app/blog/page.tsx", "utf8"),
  "app/blog/[slug]/page.tsx": readFileSync("app/blog/[slug]/page.tsx", "utf8"),
  "app/tematy/page.tsx": readFileSync("app/tematy/page.tsx", "utf8"),
  "app/tematy/[slug]/page.tsx": readFileSync("app/tematy/[slug]/page.tsx", "utf8"),
  "app/poradniki/page.tsx": readFileSync("app/poradniki/page.tsx", "utf8"),
  "app/poradniki/[slug]/page.tsx": readFileSync("app/poradniki/[slug]/page.tsx", "utf8"),
  "package.json": readFileSync("package.json", "utf8"),
  "scripts/preflight.mjs": readFileSync("scripts/preflight.mjs", "utf8")
};

const required = [
  ["app/components/ExpertConversionSections.tsx", "export default function ExpertConversionSections"],
  ["app/components/ExpertConversionSections.tsx", "/kontakt"],
  ["app/components/ExpertConversionSections.tsx", "/poradniki"],
  ["app/components/ExpertConversionSections.tsx", "/tematy"],
  ["app/components/ExpertConversionSections.tsx", "sądu, Policji lub Prokuratury"],
  ["app/page.tsx", "ExpertConversionSections"],
  ["app/blog/page.tsx", "ExpertConversionSections"],
  ["app/blog/[slug]/page.tsx", "ExpertConversionSections"],
  ["app/tematy/page.tsx", "ExpertConversionSections"],
  ["app/tematy/[slug]/page.tsx", "ExpertConversionSections"],
  ["app/poradniki/page.tsx", "ExpertConversionSections"],
  ["app/poradniki/[slug]/page.tsx", "ExpertConversionSections"],
  ["package.json", "check:expert-conversion"],
  ["scripts/preflight.mjs", "check:expert-conversion"]
];

const errors = [];

for (const [file, snippet] of required) {
  if (!files[file].includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Expert conversion sections check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: expert conversion sections are present on home, blog, topics and guides.");
