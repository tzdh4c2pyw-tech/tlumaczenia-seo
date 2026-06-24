import { readFileSync } from "node:fs";

const data = readFileSync("lib/topic-clusters.ts", "utf8");
const indexPage = readFileSync("app/tematy/page.tsx", "utf8");
const detailPage = readFileSync("app/tematy/[slug]/page.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.xml/route.ts", "utf8");
const llms = readFileSync("public/llms.txt", "utf8");
const aiIndex = readFileSync("app/ai-index.json/route.ts", "utf8");

const checks = [
  ["lib/topic-clusters.ts", data, "export type TopicCluster"],
  ["lib/topic-clusters.ts", data, "export const topicClusters"],
  ["lib/topic-clusters.ts", data, "getAllTopicClusters"],
  ["lib/topic-clusters.ts", data, "getTopicClusterBySlug"],
  ["lib/topic-clusters.ts", data, "tlumaczenia-poswiadczone"],
  ["lib/topic-clusters.ts", data, "dokumenty-z-ukrainy"],
  ["lib/topic-clusters.ts", data, "sady-policja-prokuratura"],
  ["lib/topic-clusters.ts", data, "cyber-forensic-i-material-cyfrowy"],
  ["app/tematy/page.tsx", indexPage, "CollectionPage"],
  ["app/tematy/page.tsx", indexPage, "getAllTopicClusters"],
  ["app/tematy/[slug]/page.tsx", detailPage, "generateStaticParams"],
  ["app/tematy/[slug]/page.tsx", detailPage, "generateMetadata"],
  ["app/tematy/[slug]/page.tsx", detailPage, "FAQPage"],
  ["app/tematy/[slug]/page.tsx", detailPage, "CollectionPage"],
  ["app/tematy/[slug]/page.tsx", detailPage, "notFound()"],
  ["app/sitemap.xml/route.ts", sitemap, "getAllTopicClusters"],
  ["app/sitemap.xml/route.ts", sitemap, "/tematy"],
  ["public/llms.txt", llms, "/tematy"],
  ["app/ai-index.json/route.ts", aiIndex, "topicClusters"]
];

const errors = [];

for (const [file, source, snippet] of checks) {
  if (!source.includes(snippet)) {
    errors.push(`${file}: missing ${snippet}`);
  }
}

if (errors.length > 0) {
  console.error("Topic clusters check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: topic clusters exist, have routes, schema, sitemap, llms.txt and AI index coverage.");
