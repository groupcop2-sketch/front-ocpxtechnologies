const TRAILING_SLASH = /\/$/;

function normalizeUrl(value: string): string {
  const withProtocol = value.startsWith("http") ? value : `https://${value}`;
  return withProtocol.replace(TRAILING_SLASH, "");
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return normalizeUrl(explicit);
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) {
    return normalizeUrl(production);
  }

  const vercel = process.env.VERCEL_URL;
  if (vercel) {
    return normalizeUrl(vercel);
  }

  return "http://localhost:3000";
}

export function getPublicContactEmail(): string | null {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null;
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}
