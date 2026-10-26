/** Deterministic arithmetic only. No requests, persistence, or document upload. */
export const CHARACTERS_PER_PAGE = 1125;
export const MAX_DOCUMENT_CHARACTERS = 10_000_000;
export const MAX_DOCUMENTS = 30;
export const MAX_RATE_CENTS = 10_000_000;
export const MAX_ATTENDANCE_MINUTES = 60_000;
export const TARIFF_SOURCE = "https://eli.gov.pl/eli/DU/2025/312/ogl";
export const COMMERCIAL_SOURCE = "https://eli.gov.pl/eli/DU/2019/1326/ogl";
export type TranslationDirection = "uk-pl" | "pl-uk";
export const STATUTORY_WRITTEN_CENTS: Record<TranslationDirection, number> = {
  "uk-pl": 4749,
  "pl-uk": 6782,
};

export function parseCharacterCount(value: string): number | null {
  if (!/^\d+$/.test(value.trim())) return null;
  const count = Number(value);
  return Number.isSafeInteger(count) && count <= MAX_DOCUMENT_CHARACTERS ? count : null;
}

/** A transparent approximation, not a legal assessment of justified spaces. */
export function countPastedCharacters(text: string): number {
  const printable = text.normalize("NFC").replace(/\t/g, " ").replace(/[\u0000-\u001F\u007F]/g, "");
  return Array.from(printable).length;
}

export function parseRateCents(value: string): number | null {
  const normalized = value.trim().replace(",", ".");
  if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) return null;
  const [whole, fraction = ""] = normalized.split(".");
  const cents = Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
  return Number.isSafeInteger(cents) && cents > 0 && cents <= MAX_RATE_CENTS ? cents : null;
}

export function pagesForCharacters(characters: number): number {
  if (!Number.isSafeInteger(characters) || characters < 0 || characters > MAX_DOCUMENT_CHARACTERS) throw new RangeError("Invalid character count");
  return Math.ceil(characters / CHARACTERS_PER_PAGE);
}

/** § 7: a fraction of exactly half a grosz rounds down, only a greater fraction rounds up. */
export function roundStatutoryCents(numerator: number, denominator: number): number {
  if (!Number.isSafeInteger(numerator) || numerator < 0 || !Number.isSafeInteger(denominator) || denominator <= 0) throw new RangeError("Invalid monetary fraction");
  const whole = Math.floor(numerator / denominator);
  return whole + (numerator % denominator > denominator / 2 ? 1 : 0);
}

export const STATUTORY_ORAL_HOURLY_CENTS = roundStatutoryCents(STATUTORY_WRITTEN_CENTS["pl-uk"] * 130, 100);

export function estimateWritten(documentCharacters: number[], rateCents: number) {
  if (!documentCharacters.length || documentCharacters.length > MAX_DOCUMENTS) throw new RangeError("Invalid document count");
  if (!Number.isSafeInteger(rateCents) || rateCents <= 0 || rateCents > MAX_RATE_CENTS) throw new RangeError("Invalid rate");
  const pages = documentCharacters.map(pagesForCharacters);
  const totalPages = pages.reduce((sum, value) => sum + value, 0);
  return {
    pages,
    totalPages,
    totalCharacters: documentCharacters.reduce((sum, value) => sum + value, 0),
    totalCents: totalPages * rateCents,
  };
}

export function estimateStatutoryOral(minutes: number) {
  if (!Number.isSafeInteger(minutes) || minutes < 0 || minutes > MAX_ATTENDANCE_MINUTES) throw new RangeError("Invalid attendance time");
  const hours = Math.ceil(minutes / 60);
  return { hours, hourlyCents: STATUTORY_ORAL_HOURLY_CENTS, totalCents: hours * STATUTORY_ORAL_HOURLY_CENTS };
}
