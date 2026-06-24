import { existsSync, readFileSync } from "node:fs";

const files = {
  "app/components/RegionalSeoNavigation.tsx": existsSync("app/components/RegionalSeoNavigation.tsx")
    ? readFileSync("app/components/RegionalSeoNavigation.tsx", "utf8")
    : "",
  "app/page.tsx": readFileSync("app/page.tsx", "utf8"),
  "app/blog/page.tsx": readFileSync("app/blog/page.tsx", "utf8"),
  "app/poradniki/page.tsx": readFileSync("app/poradniki/page.tsx", "utf8"),
  "app/tematy/page.tsx": readFileSync("app/tematy/page.tsx", "utf8"),
  "package.json": readFileSync("package.json", "utf8"),
  "scripts/preflight.mjs": readFileSync("scripts/preflight.mjs", "utf8")
};

const required = [
  ["app/components/RegionalSeoNavigation.tsx", "/krakow"],
  ["app/components/RegionalSeoNavigation.tsx", "/malopolskie"],
  ["app/components/RegionalSeoNavigation.tsx", "/lokalnie"],
  ["app/components/RegionalSeoNavigation.tsx", "SEO lokalne"],
  ["app/page.tsx", "RegionalSeoNavigation"],
  ["app/blog/page.tsx", "RegionalSeoNavigation"],
  ["app/poradniki/page.tsx", "RegionalSeoNavigation"],
  ["app/tematy/page.tsx", "RegionalSeoNavigation"],
  ["package.json", "check:regional-navigation"],
  ["scripts/preflight.mjs", "check:regional-navigation"]
];

const errors = [];

for (const [file, snippet] of required) {
  if (!files[file]?.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Regional navigation check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: regional SEO navigation exists and is linked from main hubs.");
