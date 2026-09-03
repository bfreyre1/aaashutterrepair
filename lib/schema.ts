import {
  absoluteUrl,
  AREA_SERVED,
  EMAIL,
  PHONE_TEL,
  SERVICE_TYPES,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export type FaqItem = { question: string; answer: string };

export type BreadcrumbItem = { name: string; path: string };

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE_TEL,
    email: EMAIL,
    image: absoluteUrl("/images/hero-bedroom-shutters.jpg"),
    description:
      "On-site plantation wood shutter repair across the San Fernando Valley and greater Los Angeles, plus blind, shade, and Somfy motorized shade repair.",
    areaServed: AREA_SERVED.map((name) => ({
      "@type": name === "San Fernando Valley" ? "AdministrativeArea" : "City",
      name,
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    })),
    serviceType: [...SERVICE_TYPES],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_TEL,
      email: EMAIL,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };
}

export function serviceJsonLd(input: {
  name: string;
  path: string;
  description: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: SITE_NAME,
      telephone: PHONE_TEL,
      url: SITE_URL,
    },
    areaServed: AREA_SERVED.map((name) => ({
      "@type": name === "San Fernando Valley" ? "AdministrativeArea" : "City",
      name,
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
