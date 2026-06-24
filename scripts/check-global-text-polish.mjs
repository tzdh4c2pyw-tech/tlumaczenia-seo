import { existsSync, readFileSync } from "node:fs";

const errors = [];

const requiredFiles = [
  "app/components/TextVisualPolish.tsx",
  "app/layout.tsx",
  "package.json",
  "scripts/preflight.mjs"
];

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    errors.push(`${file}: missing`);
  }
}

const textVisualPolish = existsSync("app/components/TextVisualPolish.tsx")
  ? readFileSync("app/components/TextVisualPolish.tsx", "utf8")
  : "";

const layout = existsSync("app/layout.tsx")
  ? readFileSync("app/layout.tsx", "utf8")
  : "";

const pkg = existsSync("package.json")
  ? readFileSync("package.json", "utf8")
  : "";

const preflight = existsSync("scripts/preflight.mjs")
  ? readFileSync("scripts/preflight.mjs", "utf8")
  : "";

const markers = [
  [textVisualPolish, "text-visual-polish", "TextVisualPolish marker"],
  [textVisualPolish, "main p", "paragraph styling"],
  [textVisualPolish, "main h1", "heading styling"],
  [textVisualPolish, "main table", "table styling"],
  [textVisualPolish, "data-component", "component styling"],
  [layout, "TextVisualPolish", "layout import/render"],
  [pkg, "check:global-text-polish", "package script"],
  [preflight, "check:global-text-polish", "preflight entry"]
];

for (const [source, marker, label] of markers) {
  if (!source.includes(marker)) {
    errors.push(`${label}: missing ${marker}`);
  }
}

if (errors.length > 0) {
  console.error("Global text polish check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("OK: global text visual polish is installed and preflight-covered.");
