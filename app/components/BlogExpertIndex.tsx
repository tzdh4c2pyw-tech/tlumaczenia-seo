import Link from "next/link";

export const blogExpertIndexItems = [
  {
    href: "/blog/tlumaczenia-w-sprawach-karnych",
    area: "Prawo karne",
    title: "Sprawy karne, przestępstwa i akta",
    description:
      "Akta sprawy, protokoły, postanowienia, zawiadomienia, oszustwa, wyłudzenia, fałszerstwa, przestępstwa gospodarcze i materiały procesowe.",
    terms: [
      "akta sprawy karnej",
      "protokół",
      "postanowienie",
      "zawiadomienie",
      "przestępstwo",
      "oszustwo",
      "wyłudzenie"
    ]
  },
  {
    href: "/blog/tlumaczenia-w-sprawach-cywilnych",
    area: "Sprawy cywilne",
    title: "Dokumenty cywilne, rodzinne i spadkowe",
    description:
      "Rozwód, alimenty, spadek, pełnomocnictwo, umowa, oświadczenie, roszczenie, załącznik i dokument urzędowy.",
    terms: [
      "powód",
      "pozwany",
      "pełnomocnictwo",
      "spadek",
      "alimenty",
      "umowa",
      "roszczenie"
    ]
  },
  {
    href: "/blog/tlumaczenia-dla-policji-prokuratury-i-sadu",
    area: "Instytucje",
    title: "Sąd, Policja i Prokuratura",
    description:
      "Dokumenty organów procesowych, wezwania, pisma, akta, załączniki, materiały składane w sądzie i postępowaniu przygotowawczym.",
    terms: [
      "sąd",
      "Policja",
      "Prokuratura",
      "wezwanie",
      "akta",
      "załącznik",
      "postępowanie przygotowawcze"
    ]
  },
  {
    href: "/blog/tlumaczenia-dowodow-cyfrowych-w-sprawach-karnych",
    area: "Dowody cyfrowe",
    title: "Komunikatory, screeny, transakcje i pliki",
    description:
      "Telegram, WhatsApp, Signal, e-mail, SMS, BLIK, kryptowaluty, pliki PDF, zrzuty ekranu i korespondencja jako materiał do tłumaczenia.",
    terms: [
      "Telegram",
      "WhatsApp",
      "Signal",
      "zrzut ekranu",
      "BLIK",
      "kryptowaluty",
      "PDF"
    ]
  },
  {
    href: "/blog/tlumaczenia-ustne-konferencje-i-spotkania",
    area: "Ustne i konferencje",
    title: "Spotkania, konferencje i terminologia",
    description:
      "Agenda, glosariusz, materiały konferencyjne, rozmowy formalne, spotkania z prawnikiem, instytucją lub klientem.",
    terms: [
      "tłumaczenie ustne",
      "konferencja",
      "spotkanie",
      "glosariusz",
      "agenda",
      "terminologia",
      "tłumaczenie konsekutywne"
    ]
  },
  {
    href: "/blog/tlumaczenia-dokumentow-z-ukrainy-w-postepowaniach",
    area: "Dokumenty z Ukrainy",
    title: "Dokumenty ukraińskie w polskich postępowaniach",
    description:
      "Dokumenty z Ukrainy używane w sprawach karnych, cywilnych, urzędowych, sądowych, instytucjonalnych i prywatnych.",
    terms: [
      "dokument z Ukrainy",
      "akt stanu cywilnego",
      "zaświadczenie",
      "pełnomocnictwo",
      "sąd",
      "urząd",
      "tłumaczenie poświadczone"
    ]
  },
  {
    href: "/blog/slownik-prawno-tlumaczeniowy",
    area: "Słownik",
    title: "Słownik prawno-tłumaczeniowy",
    description:
      "Pojęcia prawne, procesowe, cyfrowe i konferencyjne objaśnione z perspektywy tłumaczenia dokumentów i materiałów.",
    terms: [
      "podejrzany",
      "oskarżony",
      "pokrzywdzony",
      "powód",
      "pozwany",
      "dowód cyfrowy",
      "glosariusz"
    ]
  }
];

export default function BlogExpertIndex() {
  return (
    <section className="px-6 py-16" data-component="blog-expert-index">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-black/25">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-200">
              Indeks ekspercki
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white">
              Blog uporządkowany według spraw, dokumentów i pojęć.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Ten indeks łączy opracowania blogowe według realnych problemów:
            prawo karne, przestępstwa, sprawy cywilne, sąd, Policja,
            Prokuratura, dowody cyfrowe, konferencje, tłumaczenia ustne i
            dokumenty z Ukrainy.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogExpertIndexItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[1.65rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-slate-100 no-underline shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-amber-200/60"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">
                {item.area}
              </span>

              <span className="mt-4 block text-2xl font-black leading-tight text-white">
                {item.title}
              </span>

              <span className="mt-4 block text-sm leading-7 text-slate-300">
                {item.description}
              </span>

              <span className="mt-5 flex flex-wrap gap-2">
                {item.terms.slice(0, 4).map((term) => (
                  <span
                    key={term}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300"
                  >
                    {term}
                  </span>
                ))}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog/indeks-ekspercki"
            className="inline-flex rounded-full bg-amber-200 px-5 py-3 text-sm font-black text-slate-950 no-underline"
          >
            Otwórz pełny indeks bloga
          </Link>
        </div>
      </div>
    </section>
  );
}
