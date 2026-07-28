import type { Metadata } from "next";
import { StudioCheck } from "@/components/studio-check/StudioCheck";

export const metadata: Metadata = {
  title: "Javera Studio Check – Wie überzeugend wirkt dein Beauty-Studio online? | JAVERA Studio",
  description:
    "Kostenloser Online-Check für Beauty-Studios: Finde in wenigen Minuten heraus, wo dein Online-Auftritt bereits Vertrauen schafft – und wo noch Potenzial liegt. Ohne Anmeldung, sofortiges Ergebnis.",
  alternates: { canonical: "https://www.javera-studio.at/studio-check" },
  openGraph: {
    title: "Javera Studio Check – Wie überzeugend wirkt dein Beauty-Studio online?",
    description:
      "Kostenloser Online-Check für Beauty-Studios: Finde in wenigen Minuten heraus, wo dein Online-Auftritt bereits Vertrauen schafft – und wo noch Potenzial liegt.",
    url: "https://www.javera-studio.at/studio-check",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Javera Studio Check – Wie überzeugend wirkt dein Beauty-Studio online?",
    description:
      "Kostenloser Online-Check für Beauty-Studios: Finde in wenigen Minuten heraus, wo dein Online-Auftritt bereits Vertrauen schafft – und wo noch Potenzial liegt.",
    images: ["/og-image.jpg"],
  },
};

export default function StudioCheckPage() {
  return <StudioCheck />;
}
