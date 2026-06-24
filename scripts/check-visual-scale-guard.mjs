import { existsSync, readFileSync } from "node:fs";

const errors = [];

const componentPath = "app/components/VisualScaleGuard.tsx";
const layoutPath = "app/layout.tsx";

if (!existsSync(componentPath)) {
  errors.push(`${componentPath}: missing`);
} else {
  const component = readFileSync(componentPath, "utf8");

  for (const marker of [
    'data-component="visual-scale-guard"',
    "main h1",
    "font-size: clamp(40px, 6.4vw, 78px)",
    "main [data-component=\"local-page-shell\"] h1",
    "@media (max-width: 640px)"
  ]) {
    if (!component.includes(marker)) {
      errors.push(`${componentPath}: missing ${marker}`);
    }
  }
}

if (!existsSync(layoutPath)) {
  errors.push(`${layoutPath}: missing`);
} else {
  const layout = readFileSync(layoutPath, "utf8");

  if (!layout.includes('import VisualScaleGuard from "./components/VisualScaleGuard";')) {
    errors.push(`${layoutPath}: missing VisualScaleGuard import`);
  }

  if (!layout.includes("<VisualScaleGuard />")) {
    errors.push(`${layoutPath}: missing VisualScaleGuard render`);
  }
}

const pkg = readFileSync("package.json", "utf8");
const preflight = readFileSync("scripts/preflight.mjs", "utf8");

if (!pkg.includes("check:visual-scale-guard")) {
  errors.push("package.json: missing check:visual-scale-guard");
}

if (!preflight.includes("check:visual-scale-guard")) {
  errors.push("scripts/preflight.mjs: missing check:visual-scale-guard");
}

if (errors.length > 0) {
  console.error("Visual scale guard check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("OK: global visual scale guard is installed and preflight-covered.");
