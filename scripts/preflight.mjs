import { spawnSync } from "node:child_process";

const steps = [
  ["npm", ["run", "build"]],
  ["npm", ["run", "lint"]],
  ["npm", ["run", "check:sitemap-source"]],
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
