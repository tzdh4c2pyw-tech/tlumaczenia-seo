"use client";

import { FormEvent, useRef, useState } from "react";

type ConvertStatus = "idle" | "loading" | "success" | "error";

type ApiResponse =
  | {
      ok: true;
      fileName: string;
      pages: number;
      characters: number;
      text: string;
    }
  | {
      ok: false;
      message: string;
    };

export default function PdfToTextTool() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [status, setStatus] = useState<ConvertStatus>("idle");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [pages, setPages] = useState<number | null>(null);
  const [characters, setCharacters] = useState<number | null>(null);
  const [text, setText] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const file = fileInputRef.current?.files?.[0];

    if (!file) {
      setStatus("error");
      setMessage("Wybierz plik PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setStatus("loading");
    setMessage("Przetwarzam plik PDF...");
    setText("");
    setFileName("");
    setPages(null);
    setCharacters(null);

    try {
      const response = await fetch("/api/pdf-to-text", {
        method: "POST",
        body: formData
      });

      const data = (await response.json()) as ApiResponse;

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.ok ? "Nie udało się przetworzyć pliku." : data.message);
        return;
      }

      setStatus("success");
      setMessage("Tekst został wyciągnięty z pliku PDF.");
      setFileName(data.fileName);
      setPages(data.pages);
      setCharacters(data.characters);
      setText(data.text);
    } catch {
      setStatus("error");
      setMessage("Wystąpił błąd połączenia. Spróbuj ponownie.");
    }
  }

  async function copyText() {
    if (!text) {
      return;
    }

    await navigator.clipboard.writeText(text);
    setMessage("Tekst skopiowany do schowka.");
  }

  function resetTool() {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setStatus("idle");
    setMessage("");
    setFileName("");
    setPages(null);
    setCharacters(null);
    setText("");
  }

  return (
    <div className="contact-layout">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-block">
          <p className="section-label">Konwersja PDF</p>
          <h2>Wybierz plik PDF</h2>

          <label>
            Plik PDF
            <input
              ref={fileInputRef}
              name="file"
              type="file"
              accept="application/pdf,.pdf"
            />
          </label>

          <p className="form-note">
            Narzędzie działa najlepiej z PDF-ami zawierającymi warstwę tekstową.
            Jeżeli PDF jest skanem albo zdjęciem dokumentu, tekst może nie
            zostać rozpoznany.
          </p>

          <div className="hero-actions">
            <button
              className="button button-primary"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Przetwarzam..." : "Konwertuj PDF na TXT"}
            </button>

            <button
              className="button button-secondary"
              type="button"
              onClick={resetTool}
            >
              Wyczyść
            </button>
          </div>

          {message ? (
            <p
              className={
                status === "error"
                  ? "form-note form-note-error"
                  : "form-note form-note-success"
              }
            >
              {message}
            </p>
          ) : null}
        </div>

        {text ? (
          <div className="form-block">
            <p className="section-label">Wynik</p>
            <h2>Tekst z pliku PDF</h2>

            <div className="file-box">
              <strong>{fileName}</strong>
              <span>
                Liczba stron: {pages ?? "—"} · Liczba znaków:{" "}
                {characters ?? "—"}
              </span>
            </div>

            <label>
              Wyciągnięty tekst
              <textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                rows={18}
              />
            </label>

            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={copyText}
              >
                Kopiuj tekst
              </button>

              <a
                className="button button-secondary"
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                  text
                )}`}
                download={
                  fileName
                    ? `${fileName.replace(/\.pdf$/i, "")}.txt`
                    : "tekst-z-pdf.txt"
                }
              >
                Pobierz TXT
              </a>
            </div>
          </div>
        ) : null}
      </form>

      <aside className="contact-aside">
        <div className="contact-card">
          <span className="tag">Dla klientów</span>
          <h3>Po co konwertować PDF na tekst?</h3>
          <p>
            Tekst z PDF-u można szybciej wkleić do wiadomości, opisać zakres
            tłumaczenia, policzyć orientacyjną objętość albo wskazać fragmenty
            wymagające tłumaczenia.
          </p>
        </div>

        <div className="contact-card">
          <span className="tag">Dokumenty</span>
          <h3>Nie każdy PDF zawiera tekst.</h3>
          <p>
            Jeżeli PDF jest tylko skanem dokumentu, potrzebne jest OCR. To
            narzędzie wyciąga tekst przede wszystkim z PDF-ów, które mają
            zapisaną warstwę tekstową.
          </p>
        </div>

        <div className="contact-card">
          <span className="tag">Wycena</span>
          <h3>Tekst możesz wysłać do oceny.</h3>
          <p>
            Po konwersji możesz skopiować tekst albo pobrać plik TXT, a
            następnie użyć go przy zapytaniu o tłumaczenie.
          </p>
        </div>
      </aside>
    </div>
  );
}