import Link from "next/link";
import type { Metadata } from "next";

import { getAllArticles } from "@/lib/blog";
import { getAllExpertGuides } from "@/lib/expert-guides";
import { getAllKrakowSeoPages } from "@/lib/krakow-seo-pages";
import { getAllLandingPages } from "@/lib/landing-pages";
import { getAllLocalSeoArticles } from "@/lib/local-seo-articles";
import { getAllMalopolskieSeoPages } from "@/lib/malopolskie-seo-pages";
import { getAllTopicClusters } from "@/lib/topic-clusters";

export const metadata: Metadata = {
  title: "Mapa strony | Tłumaczenia specjalistyczne",
  description:
    "Mapa strony prowadząca do języków, poradników, tematów eksperckich, spraw lokalnych, Krakowa i Małopolski.",
  alternates: {
    canonical: "/mapa-strony"
  }
};

type Item = {
  slug: string;
  title?: string;
  name?: string;
  description?: string;
};

function label(item: Item) {
  return item.title || item.name || item.slug;
}

function LinkSection({
  title,
  description,
  base,
  items
}: {
  title: string;
  description: string;
  base: string;
  items: Item[];
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">
        Dział
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
        {description}
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={`${base}/${item.slug}`}
            href={`${base}/${item.slug}`}
            className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-slate-100 no-underline transition hover:border-amber-200/50 hover:bg-slate-900"
          >
            <span className="block text-base font-black">{label(item)}</span>
            {item.description ? (
              <span className="mt-2 block text-sm leading-6 text-slate-300">
                {item.description}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function SiteMapPage() {
  const landingPages = getAllLandingPages() as Item[];
  const articles = getAllArticles() as Item[];
  const guides = getAllExpertGuides() as Item[];
  const topics = getAllTopicClusters() as Item[];
  const local = getAllLocalSeoArticles() as Item[];
  const malopolskie = getAllMalopolskieSeoPages() as Item[];
  const krakow = getAllKrakowSeoPages() as Item[];

  const core = [
    { slug: "", title: "Strona główna" },
    { slug: "blog", title: "Baza wiedzy" },
    { slug: "poradniki", title: "Poradniki eksperckie" },
    { slug: "tematy", title: "Tematy eksperckie" },
    { slug: "kontakt", title: "Kontakt i wycena" },
    { slug: "dobierz-tlumaczenie", title: "Dobierz rodzaj tłumaczenia" },
    { slug: "pdf-na-tekst", title: "PDF na tekst" },
    { slug: "krakow", title: "Kraków i okolice" },
    { slug: "malopolskie", title: "Małopolska" },
    { slug: "lokalnie", title: "Sprawy lokalne" }
  ];

  return (
    <main>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-200">
            Mapa strony
          </p>
          <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight text-white">
            Wszystkie działy, poradniki i sprawy w jednym miejscu.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Mapa porządkuje stronę według praktycznych potrzeb: dokumenty,
            języki, sprawy sądowe i urzędowe, materiały cyfrowe, Kraków,
            Małopolska oraz opracowania eksperckie.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">
              Główne strony
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
              Najważniejsze miejsca na stronie
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {core.map((item) => (
                <Link
                  key={item.slug || "home"}
                  href={`/${item.slug}`}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 font-black text-slate-100 no-underline transition hover:border-amber-200/50 hover:bg-slate-900"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>

          <LinkSection
            title="Języki i usługi"
            description="Główne kierunki tłumaczeń oraz najczęstsze typy dokumentów."
            base=""
            items={landingPages}
          />

          <LinkSection
            title="Baza wiedzy"
            description="Artykuły pomagające przygotować dokumenty, sprawdzić wymogi formalne i ustalić zakres tłumaczenia."
            base="/blog"
            items={articles}
          />

          <LinkSection
            title="Poradniki eksperckie"
            description="Dłuższe opracowania dotyczące spraw sądowych, urzędowych, cyfrowych i specjalistycznych."
            base="/poradniki"
            items={guides}
          />

          <LinkSection
            title="Tematy eksperckie"
            description="Zebrane działy tematyczne: dokumenty, sądy, urzędy, materiały cyfrowe i tłumaczenia poświadczone."
            base="/tematy"
            items={topics}
          />

          <LinkSection
            title="Kraków i okolice"
            description="Strony dla spraw prowadzonych w Krakowie albo związanych z dokumentami składanymi w lokalnych instytucjach."
            base="/krakow"
            items={krakow}
          />

          <LinkSection
            title="Małopolska"
            description="Strony dla miejscowości w Małopolsce, z uwzględnieniem dokumentów z Ukrainy, urzędów i spraw sądowych."
            base="/malopolskie"
            items={malopolskie}
          />

          <LinkSection
            title="Sprawy lokalne"
            description="Praktyczne omówienia spraw lokalnych, dokumentów i materiałów przekazywanych do tłumaczenia."
            base="/lokalnie"
            items={local}
          />
        </div>
      </section>
    </main>
  );
}
