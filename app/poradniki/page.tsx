import type { Metadata } from "next";
import Link from "next/link";
import { getAllExpertGuides } from "@/lib/expert-guides";

export const metadata: Metadata = {
  title: "Poradniki eksperckie | Tłumaczenia prawne, sądowe i cyfrowe",
  description:
    "Poradniki eksperckie o tłumaczeniach poświadczonych, dokumentach z Ukrainy, materiałach sądowych, dowodach cyfrowych i komunikatorach.",
  alternates: {
    canonical: "/poradniki"
  },
  openGraph: {
    title: "Poradniki eksperckie | Tłumaczenia prawne, sądowe i cyfrowe",
    description:
      "Eksperckie materiały o tłumaczeniach dla sądów, organów ścigania, kancelarii i osób prywatnych.",
    type: "website",
    url: "/poradniki"
  }
};

export default function ExpertGuidesIndexPage() {
  const guides = getAllExpertGuides();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Poradniki eksperckie
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Tłumaczenia prawne, sądowe, urzędowe i cyfrowe w praktyce
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Zbiór praktycznych opracowań dla osób, kancelarii i instytucji, które
          potrzebują precyzyjnych tłumaczeń dokumentów, akt, korespondencji i
          materiałów cyfrowych w języku ukraińskim, rosyjskim lub angielskim.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20"
          >
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 font-semibold text-cyan-200">
                {guide.category}
              </span>
              <span>{guide.readingTime}</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              <Link href={`/poradniki/${guide.slug}`} className="hover:text-cyan-200">
                {guide.title}
              </Link>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{guide.description}</p>
            <div className="mt-6">
              <Link
                href={`/poradniki/${guide.slug}`}
                className="text-sm font-semibold text-cyan-300 hover:text-cyan-100"
              >
                Czytaj poradnik →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
