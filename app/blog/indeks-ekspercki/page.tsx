import Link from "next/link";
import type { Metadata } from "next";

import BlogExpertIndex, {
  blogExpertIndexItems
} from "@/app/components/BlogExpertIndex";
import BlogKnowledgeGraphJsonLd from "@/app/components/BlogKnowledgeGraphJsonLd";

export const metadata: Metadata = {
  title: "Indeks ekspercki bloga | Prawo karne, cywilne, dowody cyfrowe i tłumaczenia",
  description:
    "Indeks bloga eksperckiego: prawo karne, przestępstwa, sprawy cywilne, sąd, Policja, Prokuratura, dowody cyfrowe, konferencje, tłumaczenia ustne i dokumenty z Ukrainy.",
  alternates: {
    canonical: "/blog/indeks-ekspercki"
  },
  keywords: [
    "tłumaczenia prawne",
    "prawo karne",
    "sprawy cywilne",
    "Policja",
    "Prokuratura",
    "sąd",
    "dowody cyfrowe",
    "tłumaczenia ustne",
    "konferencje",
    "dokumenty z Ukrainy"
  ]
};

export default function BlogExpertIndexPage() {
  return (
    <main>
      <BlogKnowledgeGraphJsonLd />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="text-sm font-black text-amber-200 no-underline"
          >
            ← Blog ekspercki
          </Link>

          <p className="mt-10 text-xs font-black uppercase tracking-[0.24em] text-amber-200">
            Indeks bloga
          </p>

          <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight text-white">
            Mapa wiedzy: prawo, dokumenty, postępowania i tłumaczenie.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ten indeks pokazuje główne kierunki bloga eksperckiego. Łączy
            artykuły o sprawach karnych, cywilnych, sądowych, policyjnych,
            prokuratorskich, dowodach cyfrowych, konferencjach, tłumaczeniach
            ustnych i dokumentach z Ukrainy.
          </p>
        </div>
      </section>

      <BlogExpertIndex />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">
            Jak czytać indeks
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Każdy dział odpowiada innemu rodzajowi problemu.
          </h2>

          <div className="mt-6 grid gap-4">
            {blogExpertIndexItems.map((item) => (
              <article
                key={item.href}
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-5"
              >
                <Link href={item.href} className="no-underline">
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {item.title}
                  </h3>
                </Link>
                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.terms.map((term) => (
                    <span
                      key={term}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
