import Link from "next/link";

type ContentHubLinksProps = {
  variant?: string;
};

const hubLinks = [
  {
    title: "Tematy eksperckie",
    description:
      "Klastry wiedzy o tłumaczeniach poświadczonych, dokumentach z Ukrainy, sądach, Policji i Prokuraturze.",
    href: "/tematy",
    eyebrow: "Struktura wiedzy"
  },
  {
    title: "Poradniki eksperckie",
    description:
      "Praktyczne opracowania o aktach, korespondencji, dowodach cyfrowych, dokumentach urzędowych i materiałach procesowych.",
    href: "/poradniki",
    eyebrow: "Poradniki"
  },
  {
    title: "Dobierz tłumaczenie",
    description:
      "Szybka ścieżka wyboru rodzaju tłumaczenia: dokumenty, akta, dowody cyfrowe, sąd, Policja i Prokuratura.",
    href: "/dobierz-tlumaczenie",
    eyebrow: "Decyzja"
  },
  {
    title: "Baza artykułów",
    description:
      "Artykuły o tłumaczeniach przysięgłych, wynagrodzeniu tłumacza, ustawie o zawodzie i praktyce tłumaczeń prawnych.",
    href: "/blog",
    eyebrow: "Blog"
  },
  {
    title: "FAQ",
    description:
      "Najczęstsze pytania o dokumenty, akta, dowody cyfrowe, wycenę i przygotowanie materiałów do tłumaczenia.",
    href: "/faq",
    eyebrow: "Pytania"
  },
  {
    title: "Lokalne artykuły SEO",
    description:
      "Treści lokalne dla Krakowa, miast pod Krakowem oraz Małopolski: dokumenty z Ukrainy, sądy, urzędy i dowody cyfrowe.",
    href: "/lokalnie",
    eyebrow: "SEO lokalne"
  },
  {
    title: "Małopolskie SEO",
    description:
      "Lokalne strony dla Krakowa i miast Małopolski pod frazy: tłumacz przysięgły ukraiński, dokumenty z Ukrainy, sąd i urząd.",
    href: "/malopolskie",
    eyebrow: "Region"
  },
  {
    title: "Tłumaczenia poświadczone",
    description:
      "Najważniejsze informacje o tłumaczeniach poświadczonych, dokumentach urzędowych, sądowych i formalnych.",
    href: "/tematy/tlumaczenia-poswiadczone",
    eyebrow: "Temat"
  },
  {
    title: "Dokumenty z Ukrainy",
    description:
      "Akty, zaświadczenia, pełnomocnictwa, wyroki, dokumenty edukacyjne, pracownicze i urzędowe z Ukrainy.",
    href: "/tematy/dokumenty-z-ukrainy",
    eyebrow: "Ukraina"
  },
  {
    title: "Sąd, Policja, Prokuratura",
    description:
      "Materiały procesowe, akta sprawy, protokoły, dowody cyfrowe i dokumenty dla organów postępowania.",
    href: "/tematy/sady-policja-prokuratura",
    eyebrow: "Prawo"
  },
  {
    title: "Dowody cyfrowe",
    description:
      "Poradnik o tłumaczeniu zrzutów ekranu, komunikatorów, danych transakcyjnych i materiałów elektronicznych.",
    href: "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych",
    eyebrow: "Cyber"
  },
  {
    title: "Kraków SEO",
    description:
      "Strony lokalne dla Krakowa: ukraiński, rosyjski, angielski, sąd, Prokuratura, dowody cyfrowe, BLIK i kryptowaluty.",
    href: "/krakow",
    eyebrow: "Miasto"
  }
];

export default function ContentHubLinks({}: ContentHubLinksProps = {}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-2xl shadow-black/30 ring-1 ring-white/5 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
              Centrum wiedzy
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight text-white md:text-4xl">
              Powiązane ścieżki: usługi, tematy, poradniki i blog.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              Ta sekcja prowadzi użytkownika przez najważniejsze warstwy serwisu.
              Zamiast listy luźnych linków pokazuje uporządkowane bloki, które są
              czytelne dla użytkownika, wyszukiwarki i systemów AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {hubLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:border-amber-300/60 hover:bg-white/[0.07]"
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-amber-300/90">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-black leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-bold text-amber-200 group-hover:text-amber-100">
                  Przejdź dalej →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
