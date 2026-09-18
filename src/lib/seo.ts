import { company, location } from "@/config/site";
import { getSiteUrl } from "@/config/env";
import { services } from "@/constants/services";

type JsonLd = Record<string, unknown>;

export function getOrganizationJsonLd(): JsonLd {
  const url = getSiteUrl();

  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url,
    logo: `${url}/brand/ocpx-mark.png`,
    image: `${url}/og.jpg`,
    slogan: company.tagline,
    description: company.description,
    areaServed: {
      "@type": "Country",
      name: location.country,
    },
  };

  return data;
}

export function getProfessionalServiceJsonLd(): JsonLd {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    url,
    image: `${url}/og.jpg`,
    description: company.description,
    areaServed: {
      "@type": "Country",
      name: location.country,
    },
    slogan: company.tagline,
    knowsAbout: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de OCPX Technologies",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.solution,
        },
      })),
    },
  };
}

export function getWebPageJsonLd(input: {
  title: string;
  description: string;
  path?: string;
}): JsonLd {
  const url = getSiteUrl();
  const pageUrl = `${url}${input.path ?? ""}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.title,
    description: input.description,
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: company.name,
      url,
    },
    inLanguage: "es",
  };
}

export function getBreadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
): JsonLd {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${url}${item.path}`,
    })),
  };
}
