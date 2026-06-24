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
      "Przewodnik po tłumaczeniach w Krakowie: dokumenty poświadczone, pisma sądowe, sprawy urzędowe i materiały cyfrowe.",
    type: "website",
    url: "/krakow"
  }
};

export default function KrakowSeoHubPage() {
  const pages = getAllKrakowSeoPages();

  return (
    <LocalPageShell
      eyebrow="Kraków i okolice"
      title="Tłumacz przysięgły Kraków — ukraiński, rosyjski, angielski, sąd i dowody cyfrowe"
      description="Praktyczne opracowania dla Krakowa: dokumenty z Ukrainy, tłumaczenia dla sądu, Policji i Prokuratury, akta sprawy, komunikatory, BLIK, kryptowaluty oraz język ukraiński, rosyjski i angielski."
      secondaryHref="/malopolskie"
      secondaryLabel="Małopolska"
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
