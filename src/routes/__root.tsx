import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_AT" },
      { property: "og:site_name", content: "Javera Studio" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
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
        <Toaster richColors position="top-center" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
