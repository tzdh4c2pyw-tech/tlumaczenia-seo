"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";
import { revealContactAddress } from "./contact-address";
import {
  oralDirections, prepareMailto, prepareTranslationDraft, requesterOptions,
  serviceOptions, writtenDirections, type TranslationInquiry,
} from "./contact-draft";
import "../contact.css";

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;
type Draft = { address: string; subject: string; body: string };

export default function ContactComposer() {
  const ready = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  const id = useId();
  const [service, setService] = useState("document");
  const [draft, setDraft] = useState<Draft | null>(null);
  const [status, setStatus] = useState("");
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const draftText = useRef<HTMLTextAreaElement>(null);
  const hasDraft = Boolean(draft);
  const directions = service === "oral" ? oralDirections : writtenDirections;
  const mail = draft ? prepareMailto(draft.address, draft.subject, draft.body) : null;
  const bodyReady = Boolean(draft?.body.trim());

  useEffect(() => {
    if (hasDraft) resultHeading.current?.focus();
  }, [hasDraft]);

  function invalidateDraft() {
    if (draft) setDraft(null);
    if (status) setStatus("");
  }

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const scope = form.elements.namedItem("scope") as HTMLTextAreaElement;
    scope.setCustomValidity(scope.value.trim().length < 10 ? "Opisz dokument lub czynność w co najmniej 10 znakach, nie licząc spacji na początku i końcu." : "");
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const read = (name: keyof TranslationInquiry) => String(data.get(name) || "");
    try {
      const inquiry: TranslationInquiry = {
        requester: read("requester"), service: read("service"), direction: read("direction"),
        scope: read("scope"), deadline: read("deadline"), city: read("city"),
        purpose: read("purpose"), notes: read("notes"), name: read("name"), phone: read("phone"),
      };
      const prepared = prepareTranslationDraft(inquiry);
      setDraft({ ...prepared, address: revealContactAddress() });
      setStatus("Wiadomość została przygotowana. Nic nie wysłano.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Sprawdź dane formularza i spróbuj ponownie.");
    }
  }

  async function copyDraft() {
    if (!draft || !bodyReady) return;
    try {
      await navigator.clipboard.writeText(draft.body);
      setStatus("Treść skopiowana. Wklej ją do wiadomości w swojej poczcie i dodaj załączniki.");
    } catch {
      draftText.current?.focus();
      draftText.current?.select();
      setStatus("Kopiowanie automatyczne jest niedostępne. Treść została zaznaczona — skopiuj ją ręcznie.");
    }
  }

  return (
    <div className="vp-contact-composer">
      <form onSubmit={prepare} onChange={invalidateDraft} aria-label="Przygotowanie wiadomości o tłumaczeniu" aria-describedby={`${id}-local-note`}>
        <fieldset disabled={!ready} className="vp-contact-fields">
          <legend>01 · Zakres tłumaczenia</legend>
          <div className="vp-contact-grid">
            <label htmlFor={`${id}-requester`}>Dla kogo? <span>(wymagane)</span>
              <select id={`${id}-requester`} name="requester" defaultValue="" required>
                <option value="" disabled>Wybierz zleceniodawcę</option>
                {requesterOptions.map((value) => <option key={value}>{value}</option>)}
              </select>
            </label>
            <label htmlFor={`${id}-service`}>Rodzaj tłumaczenia <span>(wymagane)</span>
              <select id={`${id}-service`} name="service" value={service} onChange={(event) => setService(event.currentTarget.value)} required>
                {serviceOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
          </div>
          <label htmlFor={`${id}-direction`}>Kierunek tłumaczenia <span>(wymagane)</span>
            <select key={service === "oral" ? "oral" : "written"} id={`${id}-direction`} name="direction" defaultValue={directions[0]} required>
              {directions.map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label htmlFor={`${id}-scope`}>Rodzaj dokumentu lub czynności <span>(wymagane)</span>
            <textarea id={`${id}-scope`} name="scope" rows={4} required minLength={10} maxLength={1500}
              aria-describedby={`${id}-scope-help`}
              placeholder={service === "oral" ? "Np. rodzaj czynności, miejsce i przewidywany czas" : service === "digital" ? "Np. korespondencja z komunikatora, liczba plików i zakres tekstu" : "Np. akt urodzenia i dyplom z suplementem"}
              onInput={(event) => event.currentTarget.setCustomValidity("")} />
          </label>
          <p id={`${id}-scope-help`} className="vp-contact-help">10–1500 znaków. Podaj ogólny zakres; bez numerów dokumentów i treści akt. Załączniki dodasz w swojej poczcie.</p>
        </fieldset>
        <fieldset disabled={!ready} className="vp-contact-fields">
          <legend>02 · Termin i cel <span>(opcjonalnie)</span></legend>
          <div className="vp-contact-grid">
            <label htmlFor={`${id}-deadline`}>Oczekiwany termin<input id={`${id}-deadline`} name="deadline" type="date" /></label>
            <label htmlFor={`${id}-city`}>Miasto lub miejsce czynności<input id={`${id}-city`} name="city" autoComplete="address-level2" maxLength={160} placeholder="Np. Kraków lub Warszawa" /></label>
          </div>
          <label htmlFor={`${id}-purpose`}>Cel użycia tłumaczenia<input id={`${id}-purpose`} name="purpose" maxLength={250} placeholder="Np. przedłożenie w urzędzie lub rekrutacja na studia" /></label>
          <label htmlFor={`${id}-notes`}>Dodatkowe ustalenia<textarea id={`${id}-notes`} name="notes" rows={3} maxLength={1000} placeholder="Np. liczba dokumentów, sposób odbioru lub czas trwania czynności" /></label>
          <details className="vp-contact-optional">
            <summary>Dane do wiadomości <span>(opcjonalnie)</span></summary>
            <div className="vp-contact-grid">
              <label htmlFor={`${id}-name`}>Imię i nazwisko / nazwa instytucji<input id={`${id}-name`} name="name" autoComplete="name" maxLength={120} /></label>
              <label htmlFor={`${id}-phone`}>Telefon do kontaktu<input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={60} /></label>
            </div>
          </details>
        </fieldset>
        <button className="vp-button" type="submit" disabled={!ready}>Przygotuj wiadomość</button>
        <p className="vp-contact-help">Najpierw sprawdzisz szkic. Następnie otworzysz program pocztowy i samodzielnie wyślesz wiadomość.</p>
      </form>
      <noscript><p className="vp-contact-note">Formularz wymaga JavaScript. Zapytanie możesz uzgodnić telefonicznie: <a href="tel:+48883040483">883 040 483</a>.</p></noscript>
      {draft && mail ? (
        <section className="vp-contact-result" aria-labelledby={`${id}-result-title`}>
          <p className="vp-eyebrow">Sprawdź przed wysłaniem</p>
          <h3 id={`${id}-result-title`} tabIndex={-1} ref={resultHeading}>Wiadomość jest przygotowana.</h3>
          <p>Adresat: <span className="vp-email-address" dir="ltr">{draft.address}</span><br />Temat: {draft.subject}</p>
          <label className="vp-contact-draft-label" htmlFor={`${id}-draft`}>Treść wiadomości — możesz ją zmienić
            <textarea id={`${id}-draft`} ref={draftText} rows={13} maxLength={8000} value={draft.body} onChange={(event) => { setDraft({ ...draft, body: event.currentTarget.value }); setStatus(""); }} />
          </label>
          <p className="vp-contact-note">{mail.needsPaste
            ? "Ta wiadomość jest dłuższa. Skopiuj jej treść, otwórz program pocztowy i wklej tekst do wiadomości."
            : "Otwórz wiadomość w swoim programie pocztowym. Jeśli tekst nie zostanie przeniesiony, skopiuj go i wklej ręcznie."} Załączniki dodaj w poczcie. Formularz sam niczego nie wysyła.</p>
          {!bodyReady ? <p className="vp-contact-help">Uzupełnij treść wiadomości przed otwarciem poczty.</p> : null}
          <div className="vp-contact-actions">
            <button className="vp-button vp-button-secondary" type="button" onClick={copyDraft} disabled={!bodyReady}>Kopiuj treść</button>
            <a className="vp-button" href={bodyReady ? mail.href : undefined} aria-disabled={!bodyReady} onClick={(event) => { if (!bodyReady) event.preventDefault(); }}>{mail.needsPaste ? "Otwórz pocztę i wklej treść" : "Otwórz w programie pocztowym"}</a>
          </div>
          <p className="vp-contact-help">Zmiana danych formularza usuwa ten szkic. Po zmianach przygotuj wiadomość ponownie.</p>
        </section>
      ) : null}
      <p className="vp-contact-status" role="status" aria-live="polite" aria-atomic="true">{status}</p>
      <p id={`${id}-local-note`} className="vp-contact-local-note">Wpisana treść pozostaje w tej przeglądarce; formularz nie zapisuje jej na serwerze. Kopiowanie zapisuje tekst w schowku, a otwarcie poczty przekazuje przygotowane dane Twojej aplikacji pocztowej.</p>
    </div>
  );
}
