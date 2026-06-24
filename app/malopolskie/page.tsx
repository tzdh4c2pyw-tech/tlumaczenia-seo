import type { Metadata } from "next";
import Link from "next/link";
import { getAllMalopolskieSeoPages } from "@/lib/malopolskie-seo-pages";

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
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Małopolskie SEO
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Tłumacz przysięgły ukraiński — Kraków i Małopolskie
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Lokalne strony SEO dla miast w Małopolsce. Każda strona opisuje
          tłumaczenia dokumentów z Ukrainy, tłumaczenia poświadczone, materiały
          sądowe, dokumenty urzędowe i zlecenia zdalne.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
          >
            Zapytaj o wycenę
          </Link>
          <Link
            href="/dobierz-tlumaczenie"
            className="rounded-full border border-cyan-300 px-6 py-3 text-sm font-bold text-cyan-100 hover:bg-cyan-300/10"
          >
            Dobierz tłumaczenie
          </Link>
          <Link
            href="/lokalnie"
            className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100 hover:border-cyan-300 hover:text-cyan-100"
          >
            Lokalne artykuły
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-20 md:grid-cols-2">
        {pages.map((page) => (
          <article
            key={page.slug}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {page.city} · {page.county}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              <Link href={`/malopolskie/${page.slug}`} className="hover:text-cyan-200">
                {page.title}
              </Link>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{page.description}</p>
            <Link
              href={`/malopolskie/${page.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-100"
            >
              Czytaj stronę lokalną →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
