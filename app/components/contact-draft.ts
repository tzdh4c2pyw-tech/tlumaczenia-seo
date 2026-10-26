export const requesterOptions = [
  "Osoba prywatna", "Kancelaria prawna", "Firma", "Sąd, Policja lub prokuratura", "Inna instytucja",
] as const;

export const serviceOptions = [
  { value: "document", label: "Dokumenty — tłumaczenie pisemne" },
  { value: "oral", label: "Tłumaczenie ustne przy czynności" },
  { value: "digital", label: "Korespondencja i materiał cyfrowy" },
] as const;

export const writtenDirections = [
  "Z ukraińskiego na polski", "Z polskiego na ukraiński", "Do ustalenia po analizie materiału",
] as const;
export const oralDirections = ["Ustne — polski i ukraiński", "Do ustalenia po analizie materiału"] as const;
export const mailtoLengthLimit = 1800;

export type TranslationInquiry = {
  requester: string;
  service: string;
  direction: string;
  scope: string;
  deadline: string;
  city: string;
  purpose: string;
  notes: string;
  name: string;
  phone: string;
};

const singleLine = (value: string, limit: number) => Array.from(value.replace(/[\r\n\t]+/g, " ").trim()).slice(0, limit).join("");
const multiline = (value: string, limit: number) => Array.from(value.replace(/\r\n?/g, "\n").trim()).slice(0, limit).join("");

function formatDate(value: string): string {
  if (!value) return "Do ustalenia";
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) throw new Error("Sprawdź oczekiwany termin.");
  const [, year, month, day] = match;
  const date = new Date(`${year}-${month}-${day}T12:00:00Z`);
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new Error("Sprawdź oczekiwany termin.");
  }
  return `${day}.${month}.${year}`;
}

export function prepareTranslationDraft(input: TranslationInquiry) {
  const service = serviceOptions.find((item) => item.value === input.service);
  if (!service) throw new Error("Wybierz rodzaj tłumaczenia.");
  if (!requesterOptions.some((item) => item === input.requester)) throw new Error("Wybierz, dla kogo przygotowujesz zapytanie.");
  const directions: readonly string[] = input.service === "oral" ? oralDirections : writtenDirections;
  if (!directions.includes(input.direction)) throw new Error("Wybierz kierunek tłumaczenia.");
  const scope = input.scope.trim();
  if (scope.length < 10) throw new Error("Opisz dokument lub czynność w co najmniej 10 znakach.");
  if (scope.length > 1500) throw new Error("Skróć opis do 1500 znaków.");
  const name = singleLine(input.name, 120);
  const phone = singleLine(input.phone, 60);
  const lines = [
    "Dzień dobry,", "",
    "proszę o wycenę i potwierdzenie możliwości realizacji tłumaczenia.", "",
    `Zleceniodawca: ${input.requester}`,
    `Rodzaj tłumaczenia: ${service.label}`,
    `Kierunek: ${input.direction}`,
    `Zakres: ${multiline(scope, 1500)}`,
    `Cel użycia: ${singleLine(input.purpose, 250) || "Do ustalenia"}`,
    `Oczekiwany termin: ${formatDate(input.deadline)}`,
    `Miasto lub miejsce czynności: ${singleLine(input.city, 160) || "Do ustalenia"}`,
    `Dodatkowe informacje: ${multiline(input.notes, 1000) || "Brak"}`, "",
    "Dokumenty do wstępnej wyceny dołączam do wiadomości, jeśli dotyczy.", "",
    `Imię i nazwisko / nazwa instytucji: ${name || "[uzupełnij w wiadomości]"}`,
    `Telefon do kontaktu: ${phone || "[uzupełnij w wiadomości]"}`, "",
    "Z poważaniem",
    ...(name ? [name] : []),
  ];
  return { subject: `Zapytanie o wycenę — ${service.label}`, body: lines.join("\n") };
}

export function prepareMailto(address: string, subject: string, body: string) {
  const base = `mailto:${address}?subject=${encodeURIComponent(subject)}`;
  const full = `${base}&body=${encodeURIComponent(body)}`;
  const needsPaste = full.length > mailtoLengthLimit;
  return { href: needsPaste ? base : full, needsPaste };
}
