"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
    if (consent === "accepted") {
      window.dispatchEvent(new Event("cookie-consent-accepted"));
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-accepted"));
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Diese Website nutzt Google Analytics für anonyme Besucherstatistiken.{" "}
            <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink transition-colors">
              Mehr erfahren
            </Link>
          </p>
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="h-4 w-4 rounded border border-border accent-mauve cursor-pointer"
            />
            <span className="text-sm text-ink">Ich stimme der Verwendung von Analytics-Cookies zu</span>
          </label>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm text-muted-foreground hover:text-ink transition-colors px-1"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            disabled={!checked}
            className="text-sm bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
