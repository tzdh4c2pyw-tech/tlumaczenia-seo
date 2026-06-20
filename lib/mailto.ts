const targetEmail = "biegly@vadymrekel.pl";

const defaultSubject = "Wycena tłumaczenia | wstępna ocena materiału";

const defaultBody = [
  "Dzień dobry,",
  "",
  "proszę o wstępną ocenę materiału do tłumaczenia.",
  "",
  "Rodzaj materiału:",
  "Język:",
  "Termin:",
  "Cel tłumaczenia:",
  "Liczba stron / plików:",
  "",
  "Krótki opis:",
  "",
  "",
  "Załączniki dodam ręcznie do tej wiadomości.",
  "",
  "Z poważaniem"
].join("\n");

export const mailtoHref = `mailto:${targetEmail}?subject=${encodeURIComponent(
  defaultSubject
)}&body=${encodeURIComponent(defaultBody)}`;