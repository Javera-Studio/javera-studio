"use client";

import { usePathname } from "next/navigation";
import { JaveraChatWidget } from "@/components/JaveraChatWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";

/** Routen ohne WhatsApp-Button und KI-Assistenten: eigenständige Check-Flows sollen ungestört durchlaufen werden. */
const HIDDEN_ON = ["/beauty-qualitaetscheck"];

export function SiteWidgets() {
  const pathname = usePathname();
  if (HIDDEN_ON.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return null;
  }

  return (
    <>
      <JaveraChatWidget />
      <WhatsAppButton />
    </>
  );
}
