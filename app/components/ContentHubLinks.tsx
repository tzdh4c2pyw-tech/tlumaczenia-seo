import Link from "next/link";

const primaryHubs = [
  {
    title: "Tematy eksperckie",
    description:
      "Strukturalne klastry wiedzy o tłumaczeniach poświadczonych, dokumentach z Ukrainy, sądach, Policji i Prokuraturze.",
    href: "/tematy",
    label: "Przejdź do tematów"
  },
  {
    title: "Poradniki eksperckie",
    description:
      "Praktyczne opracowania o tłumaczeniu akt, korespondencji, dowodów cyfrowych, dokumentów urzędowych i materiałów procesowych.",
    href: "/poradniki",
    label: "Przejdź do poradników"
  },
  {
    title: "Dobierz tłumaczenie",
    description:
      "Szybka ścieżka wyboru właściwego rodzaju tłumaczenia: dokumenty, akta, dowody cyfrowe, sąd, Policja, Prokuratura.",
    href: "/dobierz-tlumaczenie",
    label: "Dobierz tłumaczenie"
  },
  {
    title: "Blog",
    description:
      "Artykuły o tłumaczeniach przysięgłych, wynagrodzeniu tłumacza, ustawie o zawodzie i praktyce tłumaczeń prawnych.",
    href: "/blog",
    label: "Przejdź do bloga"
  },
  {
    title: "FAQ",
    description:
      "Najczęstsze pytania o dokumenty, akta, dowody cyfrowe, wycenę i przygotowanie materiałów do tłumaczenia.",
    href: "/faq",
    label: "Przejdź do FAQ"
  }
];

const expertRoutes = [
  {
    href: "/tematy/tlumaczenia-poswiadczone",
    label: "Tłumaczenia poświadczone"
  },
  {
    href: "/tematy/dokumenty-z-ukrainy",
    label: "Dokumenty z Ukrainy"
  },
  {
    href: "/tematy/sady-policja-prokuratura",
    label: "Sądy, Policja, Prokuratura"
  },
  {
    href: "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych",
    label: "Dowody cyfrowe w sprawach karnych"
  },
  {
    href: "/poradniki/tlumaczenie-korespondencji-telegram-whatsapp-signal",
    label: "Telegram, WhatsApp i Signal"
  },
  {
    href: "/poradniki/tlumaczenie-dokumentow-z-ukrainy-do-sadu-w-polsce",
    label: "Dokumenty z Ukrainy do sądu"
  }
];

export default function ContentHubLinks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Centrum wiedzy
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          Powiązane ścieżki: usługi, tematy, poradniki i blog
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
          Ta sekcja łączy najważniejsze warstwy serwisu: strony usługowe,
          klastry tematyczne, poradniki eksperckie i artykuły blogowe. Ułatwia
          przechodzenie między treściami użytkownikom, wyszukiwarkom i systemom
          AI indeksującym stronę.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {primaryHubs.map((hub) => (
            <article
              key={hub.href}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
            >
              <h3 className="text-xl font-bold text-white">{hub.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {hub.description}
              </p>
              <Link
                href={hub.href}
                className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-100"
              >
                {hub.label} →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Najważniejsze linki eksperckie</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {expertRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-300 hover:text-cyan-200"
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
