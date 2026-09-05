import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCallBar } from "@/components/StickyCallBar";
import { businessJsonLd } from "@/lib/schema";
import {
  GOOGLE_SITE_VERIFICATION,
  GOOGLE_SITE_VERIFICATION_INFO,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const sans = Raleway({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const heading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Plantation Shutter Repair in Los Angeles | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "On-site plantation shutter repair in the San Fernando Valley and greater Los Angeles. Staples, louvers, tilt rods, hinges, magnets, plus blinds and Somfy shades. Call 818-392-8584.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: [GOOGLE_SITE_VERIFICATION, GOOGLE_SITE_VERIFICATION_INFO],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${heading.variable}`}>
      <body>
        <Analytics />
        <JsonLd data={businessJsonLd()} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main" className="site-main">
            {children}
          </main>
          <Footer />
          <StickyCallBar />
        </div>
      </body>
    </html>
  );
}
