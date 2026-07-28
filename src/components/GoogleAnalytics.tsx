"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const GA_ID = "G-CDWCSM9NCX";

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie_consent") === "accepted") {
      // localStorage ist erst nach dem Mount verfügbar (SSR kennt den Wert nicht) –
      // das Setzen hier verhindert einen Hydration-Mismatch, ist also beabsichtigt.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasConsent(true);
    }
    function onConsent() { setHasConsent(true); }
    window.addEventListener("cookie-consent-accepted", onConsent);
    return () => window.removeEventListener("cookie-consent-accepted", onConsent);
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
