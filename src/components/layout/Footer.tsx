import { LinkedInIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/shared/SocialIcons";
import { Logo } from "@/components/shared/Logo";
import { company, social } from "@/config/site";
import { footerNav, legalNav } from "@/constants/navigation";
import { footerContent } from "@/constants/content";
import { formatCopyright } from "@/lib/format";

const socialItems = [
  { key: "linkedin", href: social.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { key: "instagram", href: social.instagram, label: "Instagram", icon: InstagramIcon },
  { key: "facebook", href: social.facebook, label: "Facebook", icon: FacebookIcon },
  { key: "youtube", href: social.youtube, label: "YouTube", icon: YouTubeIcon },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const visibleSocial = socialItems.filter((item) => item.href);

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Logo variant="lockup" onDark />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            {footerContent.blurb}
          </p>
          <p className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            {company.philosophy}
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
          <div>
            <p className="font-display text-sm font-semibold">Navegación</p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold">Legal</p>
            <ul className="mt-4 space-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold">Presencia</p>
            <p className="mt-4 text-sm text-white/70">{company.country}</p>
            {visibleSocial.length > 0 ? (
              <ul className="mt-4 flex gap-3">
                {visibleSocial.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.key}>
                      <a
                        href={item.href ?? undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-cyan hover:text-white"
                        aria-label={item.label}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-white/50">
                Canales oficiales en preparación.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{formatCopyright(year)}</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
