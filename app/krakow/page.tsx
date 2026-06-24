import type { Metadata } from "next";
import { getAllKrakowSeoPages } from "@/lib/krakow-seo-pages";
import { LocalCard, LocalCardGrid, LocalPageShell } from "../components/LocalPageShell";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły Kraków | Ukraiński, rosyjski, angielski, sąd, AI",
  description:
    "Lokalne strony SEO dla Krakowa: tłumacz przysięgły ukraiński, rosyjski, angielski, dokumenty z Ukrainy, sąd, Policja, Prokuratura, dowody cyfrowe, BLIK i kryptowaluty.",
  alternates: {
    canonical: "/krakow"
  },
  openGraph: {
    title: "Tłumacz przysięgły Kraków | Lokalne SEO",
    description:
      "Hub lokalnych stron SEO dla Krakowa: tłumaczenia poświadczone, prawnicze, sądowe i cyfrowe.",
    type: "website",
    url: "/krakow"
  }
};

export default function KrakowSeoHubPage() {
  const pages = getAllKrakowSeoPages();

  return (
    <LocalPageShell
      eyebrow="Kraków SEO"
      title="Tłumacz przysięgły Kraków — ukraiński, rosyjski, angielski, sąd i dowody cyfrowe"
      description="Lokalny hub SEO dla Krakowa: dokumenty z Ukrainy, tłumaczenia dla sądu, Policji i Prokuratury, akta sprawy, komunikatory, BLIK, kryptowaluty, język ukraiński, rosyjski i angielski."
      secondaryHref="/malopolskie"
      secondaryLabel="Małopolskie SEO"
    >
      <LocalCardGrid>
        {pages.map((page) => (
          <LocalCard
            key={page.slug}
            eyebrow={page.service}
            title={page.title}
            description={page.description}
            href={`/krakow/${page.slug}`}
          />
        ))}
      </LocalCardGrid>
    </LocalPageShell>
  );
}
