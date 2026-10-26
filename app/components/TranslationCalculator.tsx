"use client";

import { useId, useRef, useState } from "react";
type Locale = "pl" | "uk" | "en";
const localizePath = (_path: string, _locale: Locale) => "/kontakt";
import {
  CHARACTERS_PER_PAGE, COMMERCIAL_SOURCE, MAX_ATTENDANCE_MINUTES, MAX_DOCUMENT_CHARACTERS,
  MAX_DOCUMENTS, STATUTORY_ORAL_HOURLY_CENTS, STATUTORY_WRITTEN_CENTS, TARIFF_SOURCE,
  countPastedCharacters, estimateStatutoryOral, estimateWritten, parseCharacterCount,
  parseRateCents, type TranslationDirection,
} from "@/lib/translation-calculator";
import "../calculator.css";

const copy = {
  pl: {
    intro: "Sprawdź orientacyjną kwotę tłumaczenia pisemnego lub podstawowe wynagrodzenie za czynność na żądanie organu. Obliczenia są bezpłatne i odbywają się w tej przeglądarce.",
    badge: "Bezpłatnie · bez wysyłania tekstu", mode: "Podstawa obliczenia", commercial: "Zlecenie prywatne lub firmowe", statutory: "Zlecenie organu — stawki ustawowe",
    commercialNote: "Wpisz stawkę uzgodnioną z kancelarią. Kalkulator nie ustala cennika ani terminu realizacji. Rozliczenie co 1125 znaków i zaokrąglenie osobno dla każdego dokumentu to przyjęte tutaj założenie wyceny — potwierdź je przy zleceniu.",
    statutoryNote: "Ten tryb dotyczy czynności na żądanie sądu, prokuratora, Policji lub organu administracji publicznej. Sama potrzeba złożenia dokumentu w sądzie lub urzędzie nie oznacza zastosowania tych stawek do prywatnego zlecenia.",
    direction: "Kierunek tłumaczenia", ukPl: "Ukraiński → polski", plUk: "Polski → ukraiński", rate: "Uzgodniona stawka za 1125 znaków", rateHint: "PLN; wpisz kwotę z dokładnością do 2 miejsc, np. stawkę z otrzymanej oferty.", ratePlaceholder: "Wpisz uzgodnioną stawkę", service: "Rodzaj czynności", written: "Tłumaczenie pisemne", oral: "Tłumaczenie ustne / obecność", minutes: "Czas obecności w minutach", minutesHint: "Od wyznaczonej godziny wezwania do zwolnienia z czynności, także czas oczekiwania. Każda rozpoczęta godzina jest liczona jako pełna.",
    documents: "Dokumenty do oszacowania", document: "Dokument", remove: "Usuń", count: "Liczba znaków ze spacjami", countHint: "Dla rozliczenia ustawowego liczy się tekst wykonanego tłumaczenia. Liczba znaków oryginału daje jedynie przybliżenie.", paste: "Policz wklejony tekst lokalnie", closePaste: "Usuń wklejony tekst i zostaw liczbę", pasteLabel: "Tekst do orientacyjnego policzenia", pasteHint: "Opcjonalnie, do 200 000 znaków. Licznik uwzględnia znaki i spacje; pomija nowe linie, zamienia tabulatory na spację. Nie ocenia, które odstępy są uzasadnione. Niczego nie zapisuje ani nie wysyła.", add: "+ Dodaj dokument", docHint: "Kalkulator zaokrągla każdy dokument osobno do pełnej strony rozliczeniowej. To jawne założenie szacunku, nie dodatkowa reguła ustawy. Pusta pozycja z liczbą 0 nie nalicza strony.",
    result: "Twój szacunek", base: "Kwota podstawowa", empty: "Uzupełnij liczbę znaków i stawkę, aby zobaczyć wynik.", emptyStatutory: "Uzupełnij liczbę znaków lub czas obecności, aby zobaczyć wynik.", pages: "Strony rozliczeniowe", characters: "Znaki łącznie", appliedRate: "Stawka za stronę", hourly: "Stawka za godzinę", hours: "Rozpoczęte godziny", excluded: "Przed ewentualnym VAT i dodatkami. Bez podwyższeń za tryb lub warunki czynności, kosztów dojazdu, wydatków, odpisów i dodatkowych usług. Ostateczna kwota zależy od materiału i podstawy zlecenia.",
    nonbinding: "To pomoc w planowaniu, nie wiążąca oferta ani rozstrzygnięcie o wynagrodzeniu.", contact: "Uzgodnij wycenę i termin", copy: "Kopiuj podsumowanie", copied: "Podsumowanie skopiowane. Możesz wkleić je do zapytania.", copyFallback: "Zaznacz i skopiuj poniższe podsumowanie ręcznie.", summary: "Orientacyjne obliczenie — vadymrekel.pro", summaryLabel: "Podsumowanie do skopiowania", source: "Podstawa stawek dla organów: rozporządzenie, tekst jednolity Dz.U. 2025 poz. 312 (§ 2, 6–8).", agreement: "Zlecenia umowne: art. 16 ust. 1 ustawy o zawodzie tłumacza przysięgłego.", sourceNote: "Strona rozliczeniowa zawiera 1125 znaków; rozpoczętą stronę liczy się jako całą. Stawka godzinowa dla języka ukraińskiego to 67,82 zł powiększone o 30%, po zaokrągleniu 88,17 zł. Szczególne podstawy podwyższenia wymagają osobnej oceny.", privacy: "Kalkulator działa lokalnie, bez plików cookie i pamięci trwałej. Wpisane dane pozostają w pamięci tej karty do jej zamknięcia lub odświeżenia. Przy kopiowaniu podsumowanie trafia wyłącznie do Twojego schowka.", nojs: "Włącz JavaScript, aby obliczyć szacunek. Wycenę możesz również uzgodnić telefonicznie: 883 040 483.",
  },
  en: {
    intro: "Estimate the cost of written translation or the basic statutory fee for work commissioned by an authority. This calculator is free and runs in your browser.",
    badge: "Free · no text upload", mode: "Calculation basis", commercial: "Private or business commission", statutory: "Authority commission — statutory rates",
    commercialNote: "Enter the rate agreed with the office. The calculator does not set prices or confirm deadlines. A 1,125-character unit and rounding each document separately are assumptions used for this estimate; confirm them when commissioning the work.",
    statutoryNote: "This mode applies to work requested by a court, prosecutor, Police or public administration authority. A private translation needed for submission to a court or public office does not automatically qualify for these rates.",
    direction: "Translation direction", ukPl: "Ukrainian → Polish", plUk: "Polish → Ukrainian", rate: "Agreed rate per 1,125 characters", rateHint: "PLN; enter up to 2 decimal places, using the rate in your quotation.", ratePlaceholder: "Enter your agreed rate", service: "Type of work", written: "Written translation", oral: "Interpreting / attendance", minutes: "Attendance time in minutes", minutesHint: "From the appointed summons time until release, including waiting time. Each commenced hour counts as a full hour.",
    documents: "Documents to estimate", document: "Document", remove: "Remove", count: "Characters including spaces", countHint: "Statutory billing uses the completed translation. Counting the source text gives only an approximation.", paste: "Count pasted text locally", closePaste: "Remove pasted text and keep the count", pasteLabel: "Text for an approximate count", pasteHint: "Optional, up to 200,000 characters. Counts characters and spaces, excludes line breaks and replaces tabs with a space. It does not determine which spaces are justified. Nothing is saved or sent.", add: "+ Add a document", docHint: "Each document is rounded separately to a full billing page. This is an explicit estimate assumption, not an additional statutory rule. A zero-character entry does not incur a page.",
    result: "Your estimate", base: "Basic amount", empty: "Enter the character count and rate to see the result.", emptyStatutory: "Enter the character count or attendance time to see the result.", pages: "Billing pages", characters: "Total characters", appliedRate: "Rate per page", hourly: "Hourly rate", hours: "Commenced hours", excluded: "Before any applicable VAT and supplements. Excludes increases for special conditions or urgency, travel, expenses, additional copies and other services. The final amount depends on the material and the basis of the commission.",
    nonbinding: "For planning only; not a binding quotation or a determination of remuneration.", contact: "Confirm your quote and deadline", copy: "Copy summary", copied: "Summary copied. You can paste it into your enquiry.", copyFallback: "Select and copy the summary below manually.", summary: "Indicative calculation — vadymrekel.pro", summaryLabel: "Summary to copy", source: "Authority rates: consolidated regulation, Journal of Laws 2025, item 312 (§§ 2, 6–8).", agreement: "Private commissions: Article 16(1) of the Act on the Profession of Sworn Translator.", sourceNote: "One billing page comprises 1,125 characters; a commenced page counts as a whole. The Ukrainian interpreting rate is PLN 67.82 plus 30%, rounded to PLN 88.17 per hour. Any grounds for an increased rate require separate assessment.", privacy: "The calculator runs locally, without cookies or persistent storage. Your entries remain in this tab’s memory until it is closed or refreshed. Copying a summary places it only in your clipboard.", nojs: "Enable JavaScript to calculate an estimate. You can also request a quotation by phone: +48 883 040 483.",
  },
  uk: {
    intro: "Оцініть орієнтовну вартість письмового перекладу або базову винагороду за роботу на вимогу уповноваженого органу. Калькулятор безплатний і працює у вашому браузері.",
    badge: "Безплатно · без надсилання тексту", mode: "Підстава розрахунку", commercial: "Приватне або корпоративне замовлення", statutory: "Замовлення органу — нормативні ставки",
    commercialNote: "Введіть ставку, погоджену з канцелярією. Калькулятор не встановлює ціни чи строки виконання. Одиниця у 1125 знаків та округлення кожного документа окремо — прийняті тут умови оцінки. Підтвердьте їх під час замовлення.",
    statutoryNote: "Цей режим стосується роботи на вимогу суду, прокурора, поліції або органу публічної адміністрації. Якщо приватний переклад потрібен для подання до суду чи установи, це саме по собі не означає застосування цих ставок.",
    direction: "Напрям перекладу", ukPl: "Українська → польська", plUk: "Польська → українська", rate: "Погоджена ставка за 1125 знаків", rateHint: "PLN; введіть суму з точністю до 2 знаків після коми, наприклад ставку з отриманої пропозиції.", ratePlaceholder: "Введіть погоджену ставку", service: "Вид роботи", written: "Письмовий переклад", oral: "Усний переклад / присутність", minutes: "Тривалість присутності у хвилинах", minutesHint: "Від призначеного часу виклику до звільнення від участі, включно з очікуванням. Кожна розпочата година рахується як повна.",
    documents: "Документи для оцінки", document: "Документ", remove: "Видалити", count: "Кількість знаків із пробілами", countHint: "За нормативними ставками враховують текст виконаного перекладу. Кількість знаків оригіналу дає лише приблизну оцінку.", paste: "Порахувати вставлений текст локально", closePaste: "Видалити текст і залишити кількість", pasteLabel: "Текст для орієнтовного підрахунку", pasteHint: "Необов’язково, до 200 000 знаків. Враховує знаки й пробіли, пропускає переноси рядків, замінює табуляцію пробілом. Не визначає обґрунтованість пробілів. Нічого не зберігає й не надсилає.", add: "+ Додати документ", docHint: "Кожен документ округлюється окремо до повної розрахункової сторінки. Це відкрита умова оцінки, а не додаткова вимога закону. Запис із нульовою кількістю знаків не нараховує сторінку.",
    result: "Ваша оцінка", base: "Базова сума", empty: "Введіть кількість знаків і ставку, щоб побачити результат.", emptyStatutory: "Введіть кількість знаків або час присутності, щоб побачити результат.", pages: "Розрахункові сторінки", characters: "Усього знаків", appliedRate: "Ставка за сторінку", hourly: "Ставка за годину", hours: "Розпочаті години", excluded: "До можливого ПДВ і доплат. Без підвищень за терміновість або умови роботи, проїзду, витрат, додаткових примірників та інших послуг. Остаточна сума залежить від матеріалу й підстави замовлення.",
    nonbinding: "Для планування; не є обов’язковою ціновою пропозицією чи рішенням про винагороду.", contact: "Узгодити вартість і строк", copy: "Копіювати підсумок", copied: "Підсумок скопійовано. Можете вставити його у звернення.", copyFallback: "Виділіть і скопіюйте підсумок нижче вручну.", summary: "Орієнтовний розрахунок — vadymrekel.pro", summaryLabel: "Підсумок для копіювання", source: "Ставки для органів: зведений текст розпорядження, Dz.U. 2025, поз. 312 (§ 2, 6–8).", agreement: "Приватні замовлення: ст. 16 ч. 1 Закону про професію присяжного перекладача.", sourceNote: "Розрахункова сторінка містить 1125 знаків; розпочата сторінка рахується як повна. Погодинна ставка для української мови становить 67,82 PLN плюс 30%, після округлення — 88,17 PLN. Підстави для підвищення ставки оцінюють окремо.", privacy: "Калькулятор працює локально, без файлів cookie та постійного сховища. Введені дані залишаються в пам’яті цієї вкладки до закриття або оновлення. Копіювання підсумку передає його лише у ваш буфер обміну.", nojs: "Увімкніть JavaScript для розрахунку. Вартість також можна узгодити телефоном: +48 883 040 483.",
  },
} as const;

type DocumentInput = { key: number; characters: string; text: string; paste: boolean };

export default function TranslationCalculator({ locale = "pl" }: { locale?: Locale }) {
  const t = copy[locale];
  const id = useId();
  const nextKey = useRef(2);
  const summaryField = useRef<HTMLTextAreaElement>(null);
  const [mode, setMode] = useState<"commercial" | "statutory">("commercial");
  const [service, setService] = useState<"written" | "oral">("written");
  const [direction, setDirection] = useState<TranslationDirection>("uk-pl");
  const [rate, setRate] = useState("");
  const [minutes, setMinutes] = useState("");
  const [documents, setDocuments] = useState<DocumentInput[]>([{ key: 1, characters: "", text: "", paste: false }]);
  const [status, setStatus] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const numberLocale = locale === "uk" ? "uk-UA" : locale === "en" ? "en-GB" : "pl-PL";
  const money = (cents: number) => new Intl.NumberFormat(numberLocale, { style: "currency", currency: "PLN" }).format(cents / 100);
  const number = (value: number) => new Intl.NumberFormat(numberLocale).format(value);
  const isOral = mode === "statutory" && service === "oral";
  const counts = documents.map((document) => parseCharacterCount(document.characters));
  const rateCents = mode === "statutory" ? STATUTORY_WRITTEN_CENTS[direction] : parseRateCents(rate);
  const duration = /^\d+$/.test(minutes.trim()) ? Number(minutes) : null;
  const written = !isOral && rateCents !== null && counts.every((count) => count !== null)
    ? estimateWritten(counts as number[], rateCents) : null;
  const oral = isOral && duration !== null && Number.isSafeInteger(duration) && duration <= MAX_ATTENDANCE_MINUTES
    ? estimateStatutoryOral(duration) : null;
  const total = oral?.totalCents ?? written?.totalCents ?? null;
  const basis = mode === "statutory" ? t.statutory : t.commercial;
  const summary = total === null ? "" : [
    t.summary, basis, isOral ? t.oral : `${t.direction}: ${direction === "uk-pl" ? t.ukPl : t.plUk}`,
    ...(oral ? [`${t.minutes}: ${duration}`, `${t.hours}: ${oral.hours}`, `${t.hourly}: ${money(oral.hourlyCents)}`] : written ? [
      ...counts.map((count, index) => `${t.document} ${index + 1}: ${number(count!)} (${t.pages}: ${written.pages[index]})`),
      `${t.pages}: ${written.totalPages}`, `${t.appliedRate}: ${money(rateCents!)}`,
    ] : []), `${t.base}: ${money(total)}`, t.excluded, t.nonbinding,
  ].join("\n");

  function clearStatus() { setStatus(""); setShowSummary(false); }
  function updateDocument(key: number, update: Partial<DocumentInput>) {
    setDocuments((current) => current.map((document) => document.key === key ? { ...document, ...update } : document));
    clearStatus();
  }
  async function copySummary() {
    if (!summary) return;
    try { await navigator.clipboard.writeText(summary); setStatus(t.copied); }
    catch { setShowSummary(true); setStatus(t.copyFallback); }
  }

  return <div className="vp-calculator">
    <div className="vp-calc-intro"><p>{t.intro}</p><span className="vp-calc-badge">{t.badge}</span></div>
    <fieldset className="vp-calc-modes"><legend>{t.mode}</legend>
      {(["commercial", "statutory"] as const).map((item) => <label className="vp-calc-mode" key={item}>
        <input type="radio" name={`${id}-mode`} value={item} checked={mode === item} onChange={() => { setMode(item); clearStatus(); }} />
        <span>{t[item]}</span>
      </label>)}
    </fieldset>
    <div className="vp-calc-layout">
      <div className="vp-calc-fields">
        <p className="vp-calc-note">{mode === "commercial" ? t.commercialNote : t.statutoryNote}</p>
        <div className="vp-calc-grid">
          {mode === "statutory" ? <label className="vp-calc-field" htmlFor={`${id}-service`}>{t.service}
            <select id={`${id}-service`} value={service} onChange={(event) => { setService(event.target.value as "written" | "oral"); clearStatus(); }}>
              <option value="written">{t.written}</option><option value="oral">{t.oral}</option>
            </select>
          </label> : null}
          {!isOral ? <label className="vp-calc-field" htmlFor={`${id}-direction`}>{t.direction}
            <select id={`${id}-direction`} value={direction} onChange={(event) => { setDirection(event.target.value as TranslationDirection); clearStatus(); }}>
              <option value="uk-pl">{t.ukPl}</option><option value="pl-uk">{t.plUk}</option>
            </select>
          </label> : null}
          {mode === "commercial" ? <label className="vp-calc-field" htmlFor={`${id}-rate`}>{t.rate}
            <input id={`${id}-rate`} type="text" inputMode="decimal" autoComplete="off" maxLength={12} placeholder={t.ratePlaceholder} value={rate} onChange={(event) => { setRate(event.target.value); clearStatus(); }} aria-describedby={`${id}-rate-help`} />
            <small id={`${id}-rate-help`}>{t.rateHint}</small>
          </label> : null}
        </div>
        {isOral ? <label className="vp-calc-field" htmlFor={`${id}-minutes`}>{t.minutes}
          <input id={`${id}-minutes`} type="number" min={0} max={MAX_ATTENDANCE_MINUTES} step={1} inputMode="numeric" value={minutes} onChange={(event) => { setMinutes(event.target.value); clearStatus(); }} aria-describedby={`${id}-minutes-help`} placeholder="0" />
          <small id={`${id}-minutes-help`}>{t.minutesHint}</small>
        </label> : <fieldset className="vp-calc-documents"><legend>{t.documents}</legend>
          {documents.map((document, index) => <div className="vp-calc-document" key={document.key}>
            <div className="vp-calc-document-header"><span>{t.document} {index + 1}</span>
              {documents.length > 1 ? <button type="button" aria-label={`${t.remove}: ${t.document} ${index + 1}`} onClick={() => { setDocuments((current) => current.filter((item) => item.key !== document.key)); clearStatus(); }}>{t.remove}</button> : null}
            </div>
            <label className="vp-calc-field" htmlFor={`${id}-count-${document.key}`}>{t.count}
              <input id={`${id}-count-${document.key}`} type="number" min={0} max={MAX_DOCUMENT_CHARACTERS} step={1} inputMode="numeric" readOnly={document.paste} value={document.characters} onChange={(event) => updateDocument(document.key, { characters: event.target.value })} aria-describedby={`${id}-count-help-${document.key}`} placeholder="0" />
              <small id={`${id}-count-help-${document.key}`}>{t.countHint}</small>
            </label>
            <button type="button" className="vp-calc-text-toggle" aria-expanded={document.paste} aria-controls={`${id}-paste-panel-${document.key}`} onClick={() => updateDocument(document.key, { paste: !document.paste, text: "", ...(document.paste ? {} : { characters: "0" }) })}>{document.paste ? t.closePaste : t.paste}</button>
            {document.paste ? <div className="vp-calc-text-panel" id={`${id}-paste-panel-${document.key}`}>
              <label className="vp-calc-field" htmlFor={`${id}-text-${document.key}`}>{t.pasteLabel}
                <textarea id={`${id}-text-${document.key}`} rows={5} maxLength={200_000} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false} value={document.text} onChange={(event) => updateDocument(document.key, { text: event.target.value, characters: String(countPastedCharacters(event.target.value)) })} aria-describedby={`${id}-paste-help-${document.key}`} />
                <small id={`${id}-paste-help-${document.key}`}>{t.pasteHint}</small>
              </label>
            </div> : null}
          </div>)}
          <button className="vp-calc-add" type="button" disabled={documents.length >= MAX_DOCUMENTS} onClick={() => { setDocuments((current) => [...current, { key: nextKey.current++, characters: "", text: "", paste: false }]); clearStatus(); }}>{t.add}</button>
          <p className="vp-calc-help">{t.docHint}</p>
        </fieldset>}
      </div>
      <aside className="vp-calc-result" aria-labelledby={`${id}-result-heading`}>
        <h3 id={`${id}-result-heading`}>{t.result}</h3><p className="vp-calc-result-label">{t.base}</p>
        <output className="vp-calc-amount" aria-live="polite" aria-atomic="true">{total === null ? "—" : money(total)}</output>
        {total === null ? <p>{mode === "commercial" ? t.empty : t.emptyStatutory}</p> : null}
        <dl>
          {isOral ? <><div><dt>{t.hourly}</dt><dd>{money(STATUTORY_ORAL_HOURLY_CENTS)}</dd></div><div><dt>{t.hours}</dt><dd>{oral ? number(oral.hours) : "—"}</dd></div></> : <>
            <div><dt>{t.characters}</dt><dd>{written ? number(written.totalCharacters) : "—"}</dd></div>
            <div><dt>{t.pages} · {number(CHARACTERS_PER_PAGE)}</dt><dd>{written ? number(written.totalPages) : "—"}</dd></div>
            <div><dt>{t.appliedRate}</dt><dd>{rateCents === null ? "—" : money(rateCents)}</dd></div>
          </>}
        </dl>
        <p>{t.excluded}</p><p>{t.nonbinding}</p>
        <div className="vp-calc-result-actions"><a href={localizePath("/kontakt", locale)}>{t.contact}</a><button type="button" disabled={total === null} onClick={copySummary}>{t.copy}</button></div>
        {showSummary ? <textarea ref={summaryField} aria-label={t.summaryLabel} readOnly value={summary} onFocus={(event) => event.currentTarget.select()} rows={7} /> : null}
        <p className="vp-calc-status" role="status" aria-live="polite">{status}</p>
      </aside>
    </div>
    <div className="vp-calc-sources"><p>{t.privacy}</p><p><a href={TARIFF_SOURCE} target="_blank" rel="noreferrer">{t.source}</a> {t.sourceNote}</p><p><a href={COMMERCIAL_SOURCE} target="_blank" rel="noreferrer">{t.agreement}</a></p></div>
    <noscript><p>{t.nojs}</p></noscript>
  </div>;
}
