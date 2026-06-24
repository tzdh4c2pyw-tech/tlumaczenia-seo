import type { Metadata } from "next";
import { getAllMalopolskieSeoPages } from "@/lib/malopolskie-seo-pages";
import { LocalCard, LocalCardGrid, LocalPageShell } from "../components/LocalPageShell";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły ukraiński Małopolskie | Kraków i okolice",
  description:
    "Lokalne strony SEO dla Małopolski: Kraków, Wieliczka, Skawina, Niepołomice, Bochnia, Tarnów, Nowy Sącz i inne miasta.",
  alternates: {
    canonical: "/malopolskie"
  },
  openGraph: {
    title: "Tłumacz przysięgły ukraiński Małopolskie",
    description:
      "Lokalne treści SEO o tłumaczeniach ukraińskich, dokumentach z Ukrainy i tłumaczeniach poświadczonych w Małopolsce.",
    type: "website",
    url: "/malopolskie"
  }
};

export default function MalopolskieSeoHubPage() {
  const pages = getAllMalopolskieSeoPages();

  return (
    <LocalPageShell
      eyebrow="Małopolskie SEO"
      title="Tłumacz przysięgły ukraiński — Kraków i Małopolskie"
      description="Lokalne strony SEO dla miast w Małopolsce. Każda strona opisuje tłumaczenia dokumentów z Ukrainy, tłumaczenia poświadczone, materiały sądowe, dokumenty urzędowe i zlecenia zdalne."
      secondaryHref="/lokalnie"
      secondaryLabel="Lokalne artykuły"
    >
      <LocalCardGrid>
        {pages.map((page) => (
          <LocalCard
            key={page.slug}
            eyebrow={`${page.city} · ${page.county}`}
            title={page.title}
            description={page.description}
            href={`/malopolskie/${page.slug}`}
          />
        ))}
      </LocalCardGrid>
    </LocalPageShell>
  );
}
