import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { setTimeout as delay } from "node:timers/promises";

const port = Number(process.env.AUDIT_PORT || 4177);
const baseUrl = `http://127.0.0.1:${port}`;
const reportPath = "reports/rendered-pages-audit.json";

const hardLimit = Number(process.env.AUDIT_HARD_LIMIT || 0);
const maxParagraphChars = Number(process.env.AUDIT_MAX_PARAGRAPH_CHARS || 900);

const technicalNoH1Routes = new Set([
  "/ai-index.json",
  "/feed.xml",
  "/llms.txt",
  "/robots.txt",
  "/search-index.json",
  "/sitemap.xml"
]);

const rawLeakPatterns = [
  /display\s*:\s*grid/i,
  /grid-template-columns/i,
  /React\.CSSProperties/i,
  /data-component=/i,
  /background:\s*linear-gradient/i,
  /dangerouslySetInnerHTML/i,
  /const\s+[a-zA-Z0-9_]+Style/i,
  /inline-style/i
];

const softTextPatterns = [
  /\s{4,}/,
  /undefined|null|NaN/,
  /Lorem ipsum/i,
  /TODO|FIXME/i
];

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTagText(html, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  return [...html.matchAll(re)]
    .map((m) => stripTags(m[1]))
    .filter(Boolean);
}

function extractRoutesFromSitemap(xml) {
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const paths = locs
    .map((url) => {
      try {
        return new URL(url).pathname;
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  return [...new Set(paths)].sort();
}

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`${baseUrl}/sitemap.xml`, { cache: "no-store" });
      if (res.ok) return true;
    } catch {}
    await delay(1000);
  }
  return false;
}

async function main() {
  mkdirSync("reports", { recursive: true });

  console.log("Building project before rendered audit...");
  const build = spawn("npm", ["run", "build"], {
    stdio: "inherit",
    shell: false
  });

  const buildCode = await new Promise((resolve) => build.on("close", resolve));
  if (buildCode !== 0) {
    throw new Error(`Build failed with code ${buildCode}`);
  }

  console.log(`Starting Next server on ${baseUrl}...`);
  const server = spawn("npx", ["next", "start", "-p", String(port)], {
    stdio: ["ignore", "pipe", "pipe"],
    shell: false,
    env: { ...process.env, PORT: String(port) }
  });

  let serverOutput = "";
  server.stdout.on("data", (chunk) => {
    serverOutput += chunk.toString();
  });
  server.stderr.on("data", (chunk) => {
    serverOutput += chunk.toString();
  });

  try {
    const ready = await waitForServer();
    if (!ready) {
      throw new Error(`Next server did not become ready. Output:\n${serverOutput.slice(-3000)}`);
    }

    const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`, { cache: "no-store" });
    const sitemap = await sitemapRes.text();
    const routes = extractRoutesFromSitemap(sitemap);

    const results = [];
    const problems = [];

    for (const path of routes) {
      const url = `${baseUrl}${path}`;
      let status = 0;
      let html = "";
      const pageProblems = [];

      try {
        const res = await fetch(url, { cache: "no-store" });
        status = res.status;
        html = await res.text();
      } catch (error) {
        pageProblems.push({
          type: "fetch-error",
          message: String(error)
        });
      }

      if (status < 200 || status >= 400) {
        pageProblems.push({
          type: "bad-status",
          message: `HTTP ${status}`
        });
      }

      const text = stripTags(html);
      const h1 = extractTagText(html, "h1");
      const h2 = extractTagText(html, "h2");
      const paragraphs = extractTagText(html, "p");
      const links = [...html.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)].map((m) => m[1]);

      if (h1.length === 0 && !technicalNoH1Routes.has(path)) {
        pageProblems.push({
          type: "missing-h1",
          message: "No H1 found"
        });
      }

      if (h1.length > 1) {
        pageProblems.push({
          type: "multiple-h1",
          message: `${h1.length} H1 tags found`
        });
      }

      if (text.length < 250 && !["/robots.txt", "/llms.txt", "/sitemap.xml", "/feed.xml", "/ai-index.json", "/search-index.json"].includes(path)) {
        pageProblems.push({
          type: "thin-rendered-text",
          message: `Rendered text length only ${text.length} chars`
        });
      }

      paragraphs.forEach((paragraph, index) => {
        if (paragraph.length > maxParagraphChars) {
          pageProblems.push({
            type: "long-paragraph",
            message: `Paragraph ${index + 1} has ${paragraph.length} chars`,
            sample: paragraph.slice(0, 240)
          });
        }
      });

      rawLeakPatterns.forEach((pattern) => {
        if (pattern.test(text)) {
          pageProblems.push({
            type: "raw-technical-text",
            message: `Rendered text matches ${pattern}`
          });
        }
      });

      softTextPatterns.forEach((pattern) => {
        if (pattern.test(text)) {
          pageProblems.push({
            type: "suspicious-text",
            message: `Rendered text matches ${pattern}`
          });
        }
      });

      const suspiciousLinks = links.filter((href) =>
        href.startsWith("undefined") ||
        href.includes("null") ||
        href.includes("[object Object]")
      );

      if (suspiciousLinks.length > 0) {
        pageProblems.push({
          type: "suspicious-link",
          message: suspiciousLinks.join(", ")
        });
      }

      const result = {
        path,
        status,
        h1,
        h2Count: h2.length,
        paragraphCount: paragraphs.length,
        renderedTextChars: text.length,
        linkCount: links.length,
        problems: pageProblems
      };

      results.push(result);

      if (pageProblems.length > 0) {
        problems.push(result);
      }
    }

    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      routeCount: routes.length,
      problemPageCount: problems.length,
      maxParagraphChars,
      results,
      problems
    };

    writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log("");
    console.log(`Rendered routes audited: ${routes.length}`);
    console.log(`Pages with problems: ${problems.length}`);
    console.log(`Report: ${reportPath}`);

    if (problems.length > 0) {
      console.log("");
      console.log("Top problems:");
      for (const page of problems.slice(0, 25)) {
        console.log(`- ${page.path}`);
        for (const problem of page.problems.slice(0, 5)) {
          console.log(`  - ${problem.type}: ${problem.message}`);
        }
      }
    }

    if (hardLimit > 0 && problems.length > hardLimit) {
      process.exitCode = 1;
    }
  } finally {
    server.kill("SIGTERM");
    await delay(500);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
