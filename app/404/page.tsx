import type { Metadata } from "next";
import NotFound from "../not-found";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This AAA Shutter Repair URL does not exist. Call 818-392-8584 or open a service, city, or quote page.",
  alternates: { canonical: absoluteUrl("/404") },
  robots: { index: false, follow: true },
};

export default function FourOhFourPage() {
  return <NotFound />;
}
