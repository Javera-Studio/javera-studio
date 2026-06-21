import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/CookieConsent";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Diese Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Javera Studio — Webdesign für Beauty Studios Wien" },
      { name: "description", content: "Professionelle Websites für Nagelstudios, Kosmetikstudios & Beauty Brands in Wien. Individuell, modern und auf dein Studio abgestimmt." },
      { name: "author", content: "Javera Studio" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_AT" },
      { property: "og:site_name", content: "Javera Studio" },
      { property: "og:title", content: "Javera Studio — Webdesign für Beauty Studios Wien" },
      { property: "og:description", content: "Professionelle Websites für Nagelstudios, Kosmetikstudios & Beauty Brands in Wien. Individuell, modern und auf dein Studio abgestimmt." },
      { property: "og:image", content: "https://www.javera-studio.at/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://www.javera-studio.at/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@javerastudio" },
      { name: "twitter:title", content: "Javera Studio — Webdesign für Beauty Studios Wien" },
      { name: "twitter:description", content: "Professionelle Websites für Nagelstudios, Kosmetikstudios & Beauty Brands in Wien." },
      { name: "twitter:image", content: "https://www.javera-studio.at/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://www.javera-studio.at/" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Javera Studio",
  description: "Webdesign, Grafik & Branding für Beauty Studios in Wien",
  url: "https://www.javera-studio.at",
  email: "hallo@javera-studio.at",
  image: "https://www.javera-studio.at/og-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fahngasse 6/4/2",
    postalCode: "1220",
    addressLocality: "Wien",
    addressCountry: "AT",
  },
  areaServed: { "@type": "City", name: "Wien" },
  sameAs: ["https://www.instagram.com/javerastudio/"],
  priceRange: "€€",
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        <Toaster richColors position="top-center" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
