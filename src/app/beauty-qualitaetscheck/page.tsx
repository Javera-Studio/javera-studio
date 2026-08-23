import type { Metadata } from "next";
import { BeautyQualityCheck } from "@/components/beauty-quality-check/BeautyQualityCheck";

export const metadata: Metadata = {
  title: "Beauty-Qualitätscheck – Passt dein Online-Auftritt zu deinem Studio? | JAVERA Studio",
  description:
    "Persönlicher Kurzcheck für etablierte Beauty-Studios: Finde heraus, ob dein Online-Auftritt noch die Qualität deines heutigen Studios widerspiegelt. Keine automatische Bewertung – persönliche Einschätzung innerhalb von 24 Stunden.",
  alternates: { canonical: "https://www.javera-studio.at/beauty-qualitaetscheck" },
  openGraph: {
    title: "Beauty-Qualitätscheck – Passt dein Online-Auftritt zu deinem Studio?",
    description:
      "Persönlicher Kurzcheck für etablierte Beauty-Studios: Finde heraus, ob dein Online-Auftritt noch die Qualität deines heutigen Studios widerspiegelt.",
    url: "https://www.javera-studio.at/beauty-qualitaetscheck",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Beauty-Qualitätscheck – Passt dein Online-Auftritt zu deinem Studio?",
    description:
      "Persönlicher Kurzcheck für etablierte Beauty-Studios: Finde heraus, ob dein Online-Auftritt noch die Qualität deines heutigen Studios widerspiegelt.",
    images: ["/og-image.jpg"],
  },
};

export default function BeautyQualityCheckPage() {
  return <BeautyQualityCheck />;
}
