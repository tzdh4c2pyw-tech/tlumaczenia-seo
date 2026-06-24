import type { Metadata } from "next";
import Link from "next/link";
import { getAllLocalSeoArticles } from "@/lib/local-seo-articles";

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

  const grouped = articles.reduce<Record<string, typeof articles>>((acc, article) => {
    acc[article.city] = acc[article.city] ?? [];
    acc[article.city].push(article);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Lokalne SEO
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Tłumaczenia poświadczone i specjalistyczne — Kraków i Małopolskie
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Artykuły lokalne dla osób, firm, kancelarii i instytucji szukających
          tłumaczeń dokumentów z Ukrainy, materiałów sądowych, dowodów cyfrowych
          oraz tłumaczeń poświadczonych w Krakowie i Małopolsce.
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
            href="/faq"
            className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100 hover:border-cyan-300 hover:text-cyan-100"
          >
            FAQ
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="space-y-8">
          {Object.entries(grouped).map(([city, cityArticles]) => (
            <section
              key={city}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 md:p-8"
            >
              <h2 className="text-2xl font-bold text-white">{city}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Lokalne treści o tłumaczeniach dla miasta {city} i okolic.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {cityArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      {article.category}
                    </p>
                    <h3 className="mt-3 text-xl font-bold text-white">
                      <Link
                        href={`/lokalnie/${article.slug}`}
                        className="hover:text-cyan-200"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {article.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
