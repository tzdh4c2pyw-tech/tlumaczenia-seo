import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Słownik prawno-tłumaczeniowy | Prawo karne, cywilne i dokumenty procesowe",
  description:
    "Słownik pojęć używanych w tłumaczeniu dokumentów prawnych, karnych, cywilnych, sądowych, policyjnych, prokuratorskich, cyfrowych i konferencyjnych.",
  alternates: {
    canonical: "/blog/slownik-prawno-tlumaczeniowy"
  }
};

const groups = [
  {
    title: "Prawo karne i postępowanie karne",
    lead:
      "Pojęcia często pojawiające się w aktach sprawy, zawiadomieniach, protokołach, postanowieniach i materiałach dowodowych.",
    terms: [
      {
        term: "podejrzany",
        explanation:
          "Osoba, wobec której w postępowaniu przygotowawczym istnieje formalny status związany z podejrzeniem popełnienia czynu. W tłumaczeniu ważne jest odróżnienie tego statusu od oskarżonego i świadka."
      },
      {
        term: "oskarżony",
        explanation:
          "Osoba, przeciwko której wniesiono akt oskarżenia albo którą objęto etapem sądowym postępowania karnego. Termin nie powinien być mieszany z podejrzanym."
      },
      {
        term: "pokrzywdzony",
        explanation:
          "Osoba lub podmiot, którego dobro prawne zostało bezpośrednio naruszone albo zagrożone czynem. W materiałach karnych termin ten ma znaczenie procesowe."
      },
      {
        term: "zawiadomienie o podejrzeniu popełnienia przestępstwa",
        explanation:
          "Pismo inicjujące albo wspierające czynności organów. W tłumaczeniu trzeba zachować opis czynu, daty, strony, okoliczności i załączniki."
      },
      {
        term: "protokół przesłuchania",
        explanation:
          "Dokument utrwalający czynność procesową. Ważne są role osób, pytania, odpowiedzi, podpisy, pouczenia i adnotacje."
      }
    ]
  },
  {
    title: "Sąd, Policja i Prokuratura",
    lead:
      "Pojęcia związane z dokumentami organów procesowych i instytucji publicznych.",
    terms: [
      {
        term: "postanowienie",
        explanation:
          "Formalne rozstrzygnięcie organu albo sądu. W tłumaczeniu trzeba zachować nazwę organu, podstawę, sentencję, uzasadnienie i pouczenie, jeżeli występują."
      },
      {
        term: "zarządzenie",
        explanation:
          "Akt o charakterze organizacyjnym lub procesowym. Należy odróżnić go od postanowienia, decyzji i wyroku."
      },
      {
        term: "akta sprawy",
        explanation:
          "Zbiór dokumentów związanych ze sprawą. Przy tłumaczeniu akt ważna jest kolejność, numeracja, sygnatury i opis załączników."
      },
      {
        term: "sygnatura sprawy",
        explanation:
          "Oznaczenie identyfikujące sprawę. W dokumentach procesowych nie powinno być pomijane ani swobodnie modyfikowane."
      },
      {
        term: "pouczenie",
        explanation:
          "Fragment dokumentu informujący o prawach, obowiązkach lub terminach. W tłumaczeniu wymaga szczególnej precyzji."
      }
    ]
  },
  {
    title: "Sprawy cywilne",
    lead:
      "Pojęcia używane przy sprawach rodzinnych, spadkowych, majątkowych, umowach, roszczeniach i dokumentach prywatnych.",
    terms: [
      {
        term: "powód",
        explanation:
          "Strona inicjująca postępowanie cywilne. W tłumaczeniu należy odróżnić powoda od pozwanego, wnioskodawcy i uczestnika."
      },
      {
        term: "pozwany",
        explanation:
          "Strona, przeciwko której skierowano powództwo. Termin ma określone znaczenie procesowe i nie powinien być zastępowany potocznym opisem."
      },
      {
        term: "wnioskodawca",
        explanation:
          "Osoba składająca wniosek, często w postępowaniu nieprocesowym. W zależności od sprawy może występować obok uczestników."
      },
      {
        term: "uczestnik postępowania",
        explanation:
          "Osoba biorąca udział w postępowaniu nieprocesowym. W tłumaczeniu trzeba zachować jej rolę formalną."
      },
      {
        term: "pełnomocnictwo",
        explanation:
          "Dokument upoważniający do działania w imieniu innej osoby lub podmiotu. Ważny jest zakres umocowania, data, podpis i forma dokumentu."
      }
    ]
  },
  {
    title: "Dowody cyfrowe i korespondencja",
    lead:
      "Pojęcia potrzebne przy tłumaczeniu komunikatorów, wiadomości, screenów, plików i transakcji.",
    terms: [
      {
        term: "dowód cyfrowy",
        explanation:
          "Materiał w formie elektronicznej, który może mieć znaczenie dla sprawy. Może obejmować wiadomości, pliki, zrzuty ekranu, transakcje i metadane."
      },
      {
        term: "zrzut ekranu",
        explanation:
          "Obraz przedstawiający fragment komunikacji albo działania aplikacji. W tłumaczeniu ważne są daty, godziny, nazwy użytkowników i kolejność wiadomości."
      },
      {
        term: "eksport rozmowy",
        explanation:
          "Plik wygenerowany z komunikatora. Może być bardziej uporządkowany niż pojedyncze screeny, ale nadal wymaga ustalenia zakresu tłumaczenia."
      },
      {
        term: "metadane",
        explanation:
          "Dane opisujące plik, wiadomość albo transakcję. Nie zawsze są widoczne, ale mogą mieć znaczenie dla kontekstu materiału."
      },
      {
        term: "historia transakcji",
        explanation:
          "Zestawienie operacji finansowych. Przy tłumaczeniu ważne są daty, kwoty, waluty, odbiorcy, tytuły i numery referencyjne."
      }
    ]
  },
  {
    title: "Tłumaczenia ustne i konferencje",
    lead:
      "Pojęcia związane z przygotowaniem spotkań, konferencji, rozmów formalnych i materiałów terminologicznych.",
    terms: [
      {
        term: "tłumaczenie konsekutywne",
        explanation:
          "Tłumaczenie wypowiedzi po jej fragmencie. Stosowane przy spotkaniach, rozmowach formalnych, konsultacjach i wystąpieniach."
      },
      {
        term: "glosariusz",
        explanation:
          "Lista terminów, nazw własnych, skrótów i ustalonych odpowiedników. Pomaga zachować spójność podczas tłumaczenia ustnego i pisemnego."
      },
      {
        term: "agenda spotkania",
        explanation:
          "Plan spotkania albo konferencji. Ułatwia przygotowanie terminologii i przewidzenie tematów wypowiedzi."
      },
      {
        term: "materiały konferencyjne",
        explanation:
          "Prezentacje, programy, streszczenia, dokumenty pomocnicze i informacje dla uczestników. Dobrze przygotowane materiały ograniczają ryzyko terminologiczne."
      },
      {
        term: "tryb roboczy",
        explanation:
          "Sposób pracy nastawiony na zrozumienie i konsultację, a nie na formalną publikację tekstu. W tłumaczeniu trzeba odróżnić go od gotowego dokumentu poświadczonego."
      }
    ]
  }
];

export default function LegalTranslationGlossaryPage() {
  return (
    <main>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="text-sm font-black text-amber-200 no-underline"
          >
            ← Blog ekspercki
          </Link>

          <p className="mt-10 text-xs font-black uppercase tracking-[0.24em] text-amber-200">
            Słownik prawno-tłumaczeniowy
          </p>

          <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight text-white">
            Pojęcia z prawa, akt, postępowań i tłumaczeń.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Słownik porządkuje terminy, które często pojawiają się przy
            tłumaczeniu dokumentów karnych, cywilnych, sądowych, policyjnych,
            prokuratorskich, cyfrowych oraz materiałów do tłumaczeń ustnych i
            konferencji.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6">
          {groups.map((group) => (
            <section
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">
                Dział słownika
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
                {group.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                {group.lead}
              </p>

              <div className="mt-6 grid gap-4">
                {group.terms.map((item) => (
                  <article
                    key={item.term}
                    className="rounded-2xl border border-white/10 bg-slate-950/45 p-5"
                  >
                    <h3 className="text-2xl font-black tracking-tight text-white">
                      {item.term}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      {item.explanation}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950 shadow-xl shadow-black/20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-700">
              Jak korzystać ze słownika
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Termin nie istnieje w próżni.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-800">
              W tłumaczeniu prawnym znaczenie terminu zależy od dokumentu,
              organu, etapu sprawy, języka źródłowego i funkcji materiału.
              Dlatego słownik należy traktować jako narzędzie porządkujące, a
              nie jako mechaniczny wykaz zamienników.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
