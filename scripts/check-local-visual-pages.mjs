import { existsSync, readFileSync } from "node:fs";

const files = {
  "app/components/LocalPageShell.tsx": readFileSync("app/components/LocalPageShell.tsx", "utf8"),
  "app/lokalnie/page.tsx": readFileSync("app/lokalnie/page.tsx", "utf8"),
  "app/lokalnie/[slug]/page.tsx": readFileSync("app/lokalnie/[slug]/page.tsx", "utf8"),
  "app/malopolskie/page.tsx": readFileSync("app/malopolskie/page.tsx", "utf8"),
  "app/malopolskie/[slug]/page.tsx": readFileSync("app/malopolskie/[slug]/page.tsx", "utf8"),
  "package.json": readFileSync("package.json", "utf8"),
  "scripts/preflight.mjs": readFileSync("scripts/preflight.mjs", "utf8")
};

if (existsSync("app/krakow/page.tsx")) {
  files["app/krakow/page.tsx"] = readFileSync("app/krakow/page.tsx", "utf8");
}

if (existsSync("app/krakow/[slug]/page.tsx")) {
  files["app/krakow/[slug]/page.tsx"] = readFileSync("app/krakow/[slug]/page.tsx", "utf8");
}

const required = [
  ["app/components/LocalPageShell.tsx", "inline-style"],
  ["app/components/LocalPageShell.tsx", "LocalPageShell"],
  ["app/components/LocalPageShell.tsx", "LocalCardGrid"],
  ["app/components/LocalPageShell.tsx", "LocalArticleShell"],
  ["app/components/LocalPageShell.tsx", "LocalTextSection"],
  ["app/components/LocalPageShell.tsx", "LocalFaq"],
  ["app/components/LocalPageShell.tsx", "LocalRelatedLinks"],
  ["app/lokalnie/page.tsx", "LocalPageShell"],
  ["app/lokalnie/[slug]/page.tsx", "LocalArticleShell"],
  ["app/malopolskie/page.tsx", "LocalPageShell"],
  ["app/malopolskie/[slug]/page.tsx", "LocalArticleShell"],
  ["package.json", "check:local-visual-pages"],
  ["scripts/preflight.mjs", "check:local-visual-pages"]
];

if (files["app/krakow/page.tsx"]) {
  required.push(["app/krakow/page.tsx", "LocalPageShell"]);
}

if (files["app/krakow/[slug]/page.tsx"]) {
  required.push(["app/krakow/[slug]/page.tsx", "LocalArticleShell"]);
}

const errors = [];

for (const [file, snippet] of required) {
  if (!files[file]?.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Local visual pages check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: local SEO pages use polished forced visual shell.");
