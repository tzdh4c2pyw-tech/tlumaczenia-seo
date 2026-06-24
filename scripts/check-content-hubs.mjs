import { readFileSync } from "node:fs";

const files = {
  "app/components/ContentHubLinks.tsx": readFileSync(
    "app/components/ContentHubLinks.tsx",
    "utf8"
  ),
  "app/page.tsx": readFileSync("app/page.tsx", "utf8"),
  "app/blog/page.tsx": readFileSync("app/blog/page.tsx", "utf8"),
  "app/tematy/page.tsx": readFileSync("app/tematy/page.tsx", "utf8"),
  "app/poradniki/page.tsx": readFileSync("app/poradniki/page.tsx", "utf8"),
  "package.json": readFileSync("package.json", "utf8"),
  "scripts/preflight.mjs": readFileSync("scripts/preflight.mjs", "utf8")
};

const required = [
  ["app/components/ContentHubLinks.tsx", "export default function ContentHubLinks"],
  ["app/components/ContentHubLinks.tsx", "/tematy"],
  ["app/components/ContentHubLinks.tsx", "/poradniki"],
  ["app/components/ContentHubLinks.tsx", "/blog"],
  ["app/components/ContentHubLinks.tsx", "/tematy/tlumaczenia-poswiadczone"],
  ["app/components/ContentHubLinks.tsx", "/tematy/dokumenty-z-ukrainy"],
  ["app/components/ContentHubLinks.tsx", "/tematy/sady-policja-prokuratura"],
  ["app/components/ContentHubLinks.tsx", "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych"],
  ["app/page.tsx", "ContentHubLinks"],
  ["app/blog/page.tsx", "ContentHubLinks"],
  ["app/tematy/page.tsx", "ContentHubLinks"],
  ["app/poradniki/page.tsx", "ContentHubLinks"],
  ["package.json", "check:content-hubs"],
  ["scripts/preflight.mjs", "check:content-hubs"]
];

const errors = [];

for (const [file, snippet] of required) {
  if (!files[file].includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Content hubs check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: content hubs are linked from home, blog, topic hubs and expert guides.");
