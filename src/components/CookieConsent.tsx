import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

const GA_ID = "G-CDWCSM9NCX";

function loadGA() {
  if (document.getElementById("gtag-script")) return;

  const script = document.createElement("script");
  script.id = "gtag-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  const inline = document.createElement("script");
  inline.id = "gtag-inline";
  inline.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;
  document.head.appendChild(inline);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "accepted") {
      loadGA();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
    loadGA();
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
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
          Diese Website nutzt Google Analytics für anonyme Besucherstatistiken.{" "}
          <Link
            to="/datenschutz"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Mehr erfahren
          </Link>
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-1"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="text-sm bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:bg-primary/90 transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
