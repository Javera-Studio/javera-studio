const WHATSAPP_NUMBER = "436601888120";
const WHATSAPP_MESSAGE = "Hallo! Ich habe eine Frage an Javera Studio.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp kontaktieren"
      style={{ bottom: "calc(1.5rem + var(--cookie-banner-h, 0px))" }}
      className="fixed left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-[transform,bottom] hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.257.593 4.46 1.72 6.4L3.2 28.8l6.564-1.68a12.74 12.74 0 0 0 6.24 1.68h.005c7.068 0 12.8-5.73 12.8-12.8s-5.732-12.8-12.805-12.8Zm0 23.36a10.6 10.6 0 0 1-5.402-1.478l-.388-.23-3.897.998 1.04-3.8-.253-.39a10.55 10.55 0 0 1-1.62-5.66c0-5.85 4.762-10.61 10.62-10.61 5.85 0 10.61 4.76 10.61 10.61 0 5.85-4.76 10.56-10.71 10.56Zm5.815-7.928c-.318-.16-1.882-.93-2.174-1.036-.292-.107-.505-.16-.717.16-.213.32-.824 1.036-1.01 1.25-.187.213-.373.24-.69.08-.318-.16-1.343-.494-2.558-1.573-.945-.842-1.583-1.882-1.77-2.2-.186-.32-.02-.492.14-.652.144-.143.318-.373.478-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.717-1.726-.983-2.365-.259-.622-.522-.538-.717-.548l-.61-.01c-.213 0-.56.08-.853.4-.293.32-1.117 1.092-1.117 2.663 0 1.57 1.144 3.088 1.303 3.302.16.213 2.253 3.44 5.46 4.824.763.33 1.359.527 1.823.674.766.244 1.463.21 2.014.127.614-.092 1.882-.769 2.147-1.512.266-.744.266-1.38.187-1.512-.08-.133-.293-.213-.611-.373Z" />
      </svg>
    </a>
  );
}
