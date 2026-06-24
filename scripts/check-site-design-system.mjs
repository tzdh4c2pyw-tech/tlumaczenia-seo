import { existsSync, readFileSync } from "node:fs";

const errors = [];

const systemPath = "app/components/SiteDesignSystem.tsx";
const floatingPath = "app/components/FloatingCta.tsx";
const layoutPath = "app/layout.tsx";

if (!existsSync(systemPath)) {
  errors.push(`${systemPath}: missing`);
} else {
  const system = readFileSync(systemPath, "utf8");

  for (const marker of [
    'data-component="site-design-system"',
    "main h1",
    "font-size: clamp(40px, 6vw, 76px)",
    "main [data-component=\"local-page-shell\"] h1",
    "main [data-component=\"floating-cta\"]",
    "@media (max-width: 640px)"
  ]) {
    if (!system.includes(marker)) {
      errors.push(`${systemPath}: missing ${marker}`);
    }
  }
}

if (!existsSync(floatingPath)) {
  errors.push(`${floatingPath}: missing`);
} else {
  const floating = readFileSync(floatingPath, "utf8");

  for (const marker of [
    'data-component="floating-cta"',
    "width: \"min(340px, calc(100vw - 36px))\"",
    "/kontakt",
    "/tematy/sady-policja-prokuratura"
  ]) {
    if (!floating.includes(marker)) {
      errors.push(`${floatingPath}: missing ${marker}`);
    }
  }

  if (floating.includes("className=")) {
    errors.push(`${floatingPath}: FloatingCta must not use className`);
  }
}

if (!existsSync(layoutPath)) {
  errors.push(`${layoutPath}: missing`);
} else {
  const layout = readFileSync(layoutPath, "utf8");

  if (!layout.includes('import SiteDesignSystem from "./components/SiteDesignSystem";')) {
    errors.push(`${layoutPath}: missing SiteDesignSystem import`);
  }

  if (!layout.includes("<SiteDesignSystem />")) {
    errors.push(`${layoutPath}: missing SiteDesignSystem render`);
  }
}

if (errors.length > 0) {
  console.error("Site design system check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("OK: site design system is installed.");
