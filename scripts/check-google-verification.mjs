import { readFileSync } from "node:fs";

const file = "app/layout.tsx";
const source = readFileSync(file, "utf8");

const verificationToken = "IRGY-E1KJFL1eUQihR952TtnvoTINcS0GzMSq0XJbfQ";

const requiredSnippets = [
  "verification:",
  "google:",
  verificationToken
];

const missing = requiredSnippets.filter((snippet) => !source.includes(snippet));

if (missing.length > 0) {
  console.error("Google verification check failed. Brakuje wymaganych elementów:");
  for (const snippet of missing) {
    console.error(`- ${snippet}`);
  }
  process.exit(1);
}

console.log("OK: Google verification token exists in app/layout.tsx.");
