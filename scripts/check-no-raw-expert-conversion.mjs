import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const errors = [];

function walk(dir) {
  const out = [];

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);

    if (stat.isDirectory()) {
      out.push(...walk(path));
    } else if (path.endsWith(".tsx") || path.endsWith(".ts")) {
      out.push(path);
    }
  }

  return out;
}

const canonicalFile = "app/components/ExpertConversionSection.tsx";
const wrapperFile = "app/components/ExpertConversionSections.tsx";

const rawLayoutMarkers = [
  "Potrzebujesz tłumaczenia dokumentów",
  "Jak przygotować zapytanie",
  "Wycena i kontakt",
  "Przejdź do kontaktuZobacz poradniki",
  "Przejdź do kontaktu Zobacz poradniki",
  "Przekazujesz dokumenty lub opis sprawy",
  "Zakres materiału jest weryfikowany"
];

for (const file of walk("app")) {
  if (file === canonicalFile) continue;

  const text = readFileSync(file, "utf8");

  for (const marker of rawLayoutMarkers) {
    if (text.includes(marker)) {
      errors.push(`${file}: raw expert conversion layout marker remains: ${marker}`);
    }
  }
}

if (!existsSync(canonicalFile)) {
  errors.push(`${canonicalFile}: missing`);
} else {
  const canonical = readFileSync(canonicalFile, "utf8");

  for (const marker of [
    'data-component="expert-conversion-section"',
    "gridTemplateColumns",
    "boxShadow",
    "Przejdź do kontaktu",
    "Jak przygotować zapytanie"
  ]) {
    if (!canonical.includes(marker)) {
      errors.push(`${canonicalFile}: missing canonical marker: ${marker}`);
    }
  }

  if (canonical.includes("className=")) {
    errors.push(`${canonicalFile}: canonical component must not use className`);
  }
}

if (!existsSync(wrapperFile)) {
  errors.push(`${wrapperFile}: missing`);
} else {
  const wrapper = readFileSync(wrapperFile, "utf8");

  for (const marker of [
    'import ExpertConversionSection from "./ExpertConversionSection"',
    "export default function ExpertConversionSections",
    "return <ExpertConversionSection />",
    "/kontakt",
    "/poradniki",
    "/tematy",
    "sądu, Policji lub Prokuratury"
  ]) {
    if (!wrapper.includes(marker)) {
      errors.push(`${wrapperFile}: missing wrapper compatibility marker: ${marker}`);
    }
  }

  if (wrapper.includes("className=")) {
    errors.push(`${wrapperFile}: wrapper must not use className`);
  }

  if (wrapper.includes("<section") || wrapper.includes("<article") || wrapper.includes("<div")) {
    errors.push(`${wrapperFile}: wrapper must not contain its own layout tags`);
  }
}

const pkg = readFileSync("package.json", "utf8");
const preflight = readFileSync("scripts/preflight.mjs", "utf8");

if (!pkg.includes("check:no-raw-expert-conversion")) {
  errors.push("package.json: missing check:no-raw-expert-conversion");
}

if (!preflight.includes("check:no-raw-expert-conversion")) {
  errors.push("scripts/preflight.mjs: missing check:no-raw-expert-conversion");
}

if (errors.length > 0) {
  console.error("No raw expert conversion check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("OK: expert conversion uses one canonical visual component; plural file is only a compatibility wrapper.");
