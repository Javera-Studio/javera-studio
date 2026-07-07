import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien",
    template: "%s | Javera Studio",
  },
  description:
    "Website, Branding & Grafik für Beauty Studios in Wien. Von der Website über das Logo bis zu Flyern & Social Media – individuell gestaltet, professionell umgesetzt.",
  metadataBase: new URL("https://www.javera-studio.at"),
  openGraph: {
    siteName: "Javera Studio",
    locale: "de_AT",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
