import { spawnSync } from "node:child_process";

const steps = [
  ["npm", ["run", "build"]],
  ["npm", ["run", "lint"]],
  ["npm", ["run", "check:sitemap-source"]],
  ["npm", ["run", "check:google-verification"]],
  ["npm", ["run", "check:blog-routes"]],
  ["npm", ["run", "check:blog-schema"]],
  ["npm", ["run", "check:landing-pages-data"]],
  ["npm", ["run", "check:landing-routes"]],
  ["npm", ["run", "check:internal-links"]],
  ["npm", ["run", "check:llms"]],
  ["npm", ["run", "check:ai-index"]],
  ["npm", ["run", "check:feed"]],
  ["npm", ["run", "check:topic-clusters"]],
  ["npm", ["run", "check:expert-guides"]],
  ["npm", ["run", "check:content-hubs"]],
  ["npm", ["run", "check:expert-conversion"]],
  ["npm", ["run", "check:search-index"]],
  ["npm", ["run", "check:decision-guide"]],
  ["npm", ["run", "check:faq-hub"]],
  ["npm", ["run", "check:local-seo"]],
  ["npm", ["run", "check:malopolskie-seo"]],
  ["npm", ["run", "check:krakow-seo"]],
  ["npm", ["run", "check:visual-polish"]],
  ["npm", ["run", "check:local-visual-pages"]],
];

for (const [cmd, args] of steps) {
  console.log(`\n=== ${cmd} ${args.join(" ")} ===\n`);

  const result = spawnSync(cmd, args, {
    stdio: "inherit",
    shell: false,
  });

  if (result.status !== 0) {
    console.error(`\nFAIL: ${cmd} ${args.join(" ")} zakończono błędem.`);
    process.exit(result.status ?? 1);
  }
}

console.log("\nOK: preflight passed. Można commitować.");
