import Link from "next/link";

const articles = [
  {
    href: "/blog/tlumaczenia-w-sprawach-karnych",
    label: "Prawo karne",
    title: "Tłumaczenia w sprawach karnych",
    description:
      "Akta sprawy, protokoły, postanowienia, materiały dowodowe, przestępstwa, oszustwa, wyłudzenia i dokumenty procesowe."
  },
  {
    href: "/blog/tlumaczenia-w-sprawach-cywilnych",
    label: "Sprawy cywilne",
    title: "Tłumaczenia w sprawach cywilnych",
    description:
      "Sprawy rodzinne, spadkowe, roszczenia, umowy, pełnomocnictwa, załączniki i dokumenty składane w sądzie albo urzędzie."
  },
  {
    href: "/blog/tlumaczenia-dla-policji-prokuratury-i-sadu",
    label: "Instytucje",
    title: "Policja, Prokuratura i sąd",
    description:
      "Jak przygotować pisma, protokoły, załączniki i dokumenty urzędowe do tłumaczenia w postępowaniach."
  },
  {
    href: "/blog/tlumaczenia-dowodow-cyfrowych-w-sprawach-karnych",
    label: "Dowody cyfrowe",
    title: "Komunikatory, screeny, BLIK i kryptowaluty",
    description:
      "Tłumaczenie materiałów cyfrowych: Telegram, WhatsApp, Signal, e-mail, SMS, transakcje i pliki PDF."
  },
  {
    href: "/blog/tlumaczenia-ustne-konferencje-i-spotkania",
    label: "Ustne i konferencje",
    title: "Tłumaczenia ustne, konferencje i spotkania",
    description:
      "Przygotowanie terminologii, materiałów konferencyjnych, spotkań formalnych i rozmów z udziałem prawnika lub instytucji."
  },
  {
    href: "/blog/tlumaczenia-dokumentow-z-ukrainy-w-postepowaniach",
    label: "Dokumenty z Ukrainy",
    title: "Dokumenty z Ukrainy w postępowaniach",
    description:
      "Dokumenty ukraińskie składane w polskich sprawach sądowych, cywilnych, karnych, urzędowych i instytucjonalnych."
  }
];

export default function LegalExpertBlogSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-200">
          Blog ekspercki
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white">
          Prawo karne, sprawy cywilne, sąd, Policja, Prokuratura i dowody cyfrowe.
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          Ten dział bloga porządkuje praktyczne problemy pojawiające się przy
          tłumaczeniu dokumentów procesowych, akt, korespondencji, materiałów
          dowodowych oraz dokumentów z Ukrainy używanych w polskich
          postępowaniach.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-slate-100 no-underline transition hover:border-amber-200/50 hover:bg-slate-900"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">
                {article.label}
              </span>
              <span className="mt-3 block text-xl font-black leading-tight text-white">
                {article.title}
              </span>
              <span className="mt-3 block text-sm leading-6 text-slate-300">
                {article.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
