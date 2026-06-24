"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "floating-cta-closed";

export function FloatingCta() {
  const [isMounted, setIsMounted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const wasClosed = window.localStorage.getItem(STORAGE_KEY);

    if (wasClosed === "true") {
      window.requestAnimationFrame(() => {
        setIsClosed(true);
      });
    }
  }, [isMounted]);

  function closeCta() {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setIsClosed(true);
  }

  if (!isMounted || isClosed) {
    return null;
  }

  return (
    <aside className="floating-cta" aria-label="Szybki kontakt">
      <button
        type="button"
        className="floating-cta-close"
        aria-label="Zamknij panel kontaktowy"
        onClick={closeCta}
      >
        ×
      </button>

      <p className="floating-cta-title">Potrzebujesz tłumaczenia?</p>
      <p className="floating-cta-text">
        Napisz krótko, czego dotyczy dokument. Odpowiem z informacją o możliwości realizacji.
      </p>

      <Link className="floating-cta-link" href="/kontakt">
        Wyślij zapytanie
      </Link>
    </aside>
  );
}
