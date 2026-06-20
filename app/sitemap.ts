import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/blog";
import { getAllLandingPages } from "@/lib/landing-pages";

const siteUrl = "https://tlumaczenia-seo-vadym-rekel.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    }
  ];

  const landingPages: MetadataRoute.Sitemap = getAllLandingPages().map(
    (page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: now,
      changeFrequency: page.type === "miasto" ? "monthly" : "weekly",
      priority:
        page.type === "język"
          ? 0.95
          : page.type === "usługa"
            ? 0.9
            : page.type === "specjalizacja"
              ? 0.88
              : 0.72
    })
  );

  const blogPages: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.85
  }));

  return [...corePages, ...landingPages, ...blogPages];
}