import type { Metadata } from "next";
import { getAllLocalSeoArticles } from "@/lib/local-seo-articles";
import { LocalCard, LocalCardGrid, LocalPageShell } from "../components/LocalPageShell";

export const metadata: Metadata = {
  title: "Tłumaczenia lokalne Kraków i Małopolskie | Artykuły SEO",
  description:
    "Lokalne artykuły SEO o tłumaczeniach poświadczonych, dokumentach z Ukrainy, sprawach sądowych i dowodach cyfrowych w Krakowie oraz Małopolsce.",
  alternates: {
    canonical: "/lokalnie"
  },
  openGraph: {
    title: "Tłumaczenia lokalne Kraków i Małopolskie",
    description:
      "Kraków, Wieliczka, Skawina, Niepołomice, Bochnia, Myślenice, Tarnów, Nowy Sącz i inne miasta Małopolski.",
    type: "website",
    url: "/lokalnie"
  }
};

export default function LocalSeoArticlesPage() {
  const articles = getAllLocalSeoArticles();

  return (
    <LocalPageShell
      eyebrow="Lokalne SEO"
      title="Tłumaczenia poświadczone i specjalistyczne — Kraków i Małopolskie"
      description="Artykuły lokalne dla osób, firm, kancelarii i instytucji szukających tłumaczeń dokumentów z Ukrainy, materiałów sądowych, dowodów cyfrowych oraz tłumaczeń poświadczonych w Krakowie i Małopolsce."
    >
      <LocalCardGrid>
        {articles.map((article) => (
          <LocalCard
            key={article.slug}
            eyebrow={`${article.city} · ${article.category}`}
            title={article.title}
            description={article.description}
            href={`/lokalnie/${article.slug}`}
          />
        ))}
      </LocalCardGrid>
    </LocalPageShell>
  );
}
