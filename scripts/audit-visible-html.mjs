import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const host = "127.0.0.1";
const port = 4197;
const base = `http://${host}:${port}`;

const bannedVisible = [
  "SEO · AI",
  "Centra wiedzy dla SEO",
  "Hub ekspercki · SEO",
  "Dlaczego huby",
  "Huby wzmacniają",
  "jeden klaster tematyczny",
  "frazy lokalne"
];

const routes = [
  "/",
  "/blog",
  "/poradniki",
  "/tematy",
  "/tematy/dokumenty-z-ukrainy",
  "/tematy/sady-policja-prokuratura",
  "/krakow",
  "/malopolskie",
  "/lokalnie",
  "/mapa-strony"
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const server = spawn("npx", ["next", "start", "-H", host, "-p", String(port)], {
  stdio: ["ignore", "pipe", "pipe"]
});

let serverLog = "";
server.stdout.on("data", (chunk) => {
  serverLog += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  serverLog += chunk.toString();
});

try {
  let ready = false;

  for (let i = 0; i < 80; i++) {
    try {
      const res = await fetch(`${base}/`);
      if (res.ok) {
        ready = true;
        break;
      }
    } catch {
      await wait(500);
    }
  }

  if (!ready) {
    console.error("Visible HTML audit failed: Next server did not start.");
    console.error(serverLog);
    process.exit(1);
  }

  const problems = [];

  for (const route of routes) {
    const res = await fetch(`${base}${route}`);
    const html = await res.text();
    const text = stripHtml(html);

    if (!res.ok) {
      problems.push(`${route}: status ${res.status}`);
      continue;
    }

    for (const phrase of bannedVisible) {
      if (text.includes(phrase)) {
        problems.push(`${route}: visible banned phrase: ${phrase}`);
      }
    }

    if (text.length < 900) {
      problems.push(`${route}: suspiciously short visible text (${text.length})`);
    }
  }

  mkdirSync("reports", { recursive: true });
  writeFileSync(
    "reports/visible-html-audit.json",
    JSON.stringify({ checkedAt: new Date().toISOString(), routes, problems }, null, 2)
  );

  if (problems.length > 0) {
    console.error("Visible HTML audit failed:");
    for (const problem of problems) console.error(`- ${problem}`);
    process.exit(1);
  }

  console.log(`OK: visible HTML audit passed for ${routes.length} routes.`);
} finally {
  server.kill("SIGTERM");
}
