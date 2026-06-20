"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./floating-cta.css";

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const wasClosed = window.localStorage.getItem("floating-cta-closed");

    if (wasClosed === "true") {
      setIsClosed(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  function closeCta() {
    setIsClosed(true);
    setIsVisible(false);
    window.localStorage.setItem("floating-cta-closed", "true");
  }

  if (isClosed) {
    return null;
  }

  return (
    <aside
      className={isVisible ? "floating-cta visible" : "floating-cta"}
      aria-label="Szybka wycena tłumaczenia"
    >
      <button
        className="floating-cta-close"
        type="button"
        onClick={closeCta}
        aria-label="Zamknij okienko"
      >
        ×
      </button>

      <div className="floating-cta-kicker">Wstępna ocena materiału</div>

      <h2>Wyślij tekst do wyceny.</h2>

      <p>
        Dokument, fragment akt, pismo procesowe, korespondencję albo materiał
        cyfrowy można przekazać do wstępnej analizy przez formularz.
      </p>

      <div className="floating-cta-note">
        Zapraszam sądy, Policję, prokuratury, organy ścigania, kancelarie i
        instytucje do przekazywania materiałów wymagających oceny językowej.
      </div>

      <div className="floating-cta-actions">
        <Link className="floating-cta-primary" href="/kontakt">
          Wyślij tekst do wyceny
        </Link>

        <Link className="floating-cta-secondary" href="/tlumaczenia-dla-policji">
          Dla organów
        </Link>
      </div>
    </aside>
  );
}