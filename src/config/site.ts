import { getPublicContactEmail, getSiteUrl } from "@/config/env";

export const company = {
  name: "OCPX Technologies",
  shortName: "OCPX",
  legalName: "OCPX Technologies",
  tagline: "Tecnología que impulsa lo que viene.",
  philosophy: "Ideas | Soluciones | Resultados",
  philosophyItems: ["Ideas", "Soluciones", "Resultados"] as const,
  description:
    "Diseñamos y desarrollamos soluciones de software, datos, automatización e infraestructura que ayudan a las organizaciones a transformar sus procesos y crecer con tecnología.",
  shortDescription:
    "Soluciones tecnológicas B2B: software, datos, automatización e infraestructura.",
  purpose:
    "Transformar necesidades empresariales en soluciones tecnológicas reales, seguras, mantenibles y escalables.",
  country: "Colombia",
  countryCode: "CO",
} as const;

/**
 * Datos corporativos locales.
 * TODO: reemplazar nulls con información corporativa real cuando exista.
 */
export const location = {
  country: company.country,
  countryCode: company.countryCode,
  city: null as string | null,
  region: null as string | null,
  address: null as string | null,
  postalCode: null as string | null,
  phone: null as string | null,
  hours: null as string | null,
} as const;

/**
 * URLs de redes. Solo se renderizan si tienen un valor real.
 * TODO: reemplazar con URLs oficiales cuando estén disponibles.
 */
export const social = {
  linkedin: null as string | null,
  instagram: null as string | null,
  facebook: null as string | null,
  youtube: null as string | null,
} as const;

export const seo = {
  title: "OCPX Technologies | Desarrollo de software y soluciones tecnológicas",
  titleTemplate: "%s | OCPX Technologies",
  description:
    "Diseñamos y desarrollamos software, automatización, datos e infraestructura para que las empresas transformen sus procesos y crezcan con tecnología.",
  ogAlt: "OCPX Technologies — Tecnología que impulsa lo que viene.",
} as const;

export function getSiteConfig() {
  return {
    company,
    location,
    social,
    seo,
    url: getSiteUrl(),
    email: getPublicContactEmail(),
  };
}

export const routes = {
  home: "/",
  privacy: "/privacidad",
  cookies: "/cookies",
  projects: "/proyectos",
  project: (slug: string) => `/proyectos/${slug}`,
} as const;
