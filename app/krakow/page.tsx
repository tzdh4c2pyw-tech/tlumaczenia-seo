import type { Metadata } from "next";
import { getAllKrakowSeoPages } from "@/lib/krakow-seo-pages";
import { LocalCard, LocalCardGrid, LocalPageShell } from "../components/LocalPageShell";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły ukraińskiego Kraków | Dokumenty i czynności",
  description:
    "Informacje dla Krakowa: tłumacz przysięgły języka ukraińskiego, dokumenty z Ukrainy, sąd, Policja, Prokuratura, dowody cyfrowe, BLIK i kryptowaluty.",
  alternates: {
    canonical: "/krakow"
  },
  openGraph: {
    title: "Tłumacz przysięgły ukraińskiego | Kancelaria w Krakowie",
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
      title="Tłumacz przysięgły ukraińskiego w Krakowie — dokumenty i czynności"
      description="Praktyczne opracowania dla Krakowa: dokumenty z Ukrainy, tłumaczenia dla sądu, Policji i Prokuratury, akta sprawy, komunikatory, BLIK, kryptowaluty oraz przekład polsko-ukraiński."
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
