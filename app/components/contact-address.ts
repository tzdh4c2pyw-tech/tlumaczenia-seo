// Reveal only inside a user action. This reduces simple address scraping;
// the encoding is not a security boundary or a guarantee against spam.
const addressParts = [
  [98, 105, 101, 103, 108, 121],
  [118, 97, 100, 121, 109, 114, 101, 107, 101, 108, 46, 112, 108],
] as const;

export function revealContactAddress(): string {
  if (typeof window === "undefined") {
    throw new Error("Adres jest odsłaniany w przeglądarce po działaniu użytkownika.");
  }
  return addressParts.map((part) => String.fromCharCode(...part)).join(String.fromCharCode(64));
}
