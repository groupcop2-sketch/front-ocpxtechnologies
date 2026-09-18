import { ArrowRight } from "lucide-react";
import { HeroVisual } from "@/components/shared/HeroVisual";
import { CtaLink } from "@/components/shared/CtaLink";
import { Container } from "@/components/ui/Container";
import { analyticsEvents } from "@/constants/analytics";
import { heroContent } from "@/constants/content";
import { company } from "@/config/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy pt-28 text-white md:pt-32"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan/40 to-transparent" />
      <Container className="relative grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            {heroContent.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
          >
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/72 md:text-lg">
            {heroContent.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink
              href="/#contacto"
              eventName={analyticsEvents.ctaHeroContact}
              eventMeta={{ location: "hero" }}
            >
              {heroContent.primaryCta}
            </CtaLink>
            <CtaLink
              href="/#soluciones"
              variant="secondary"
              eventName={analyticsEvents.ctaHeroSolutions}
              eventMeta={{ location: "hero" }}
            >
              {heroContent.secondaryCta}
              <ArrowRight size={16} aria-hidden="true" />
            </CtaLink>
          </div>
          <p className="mt-8 font-display text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            {company.philosophy}
          </p>
        </div>
        <HeroVisual />
      </Container>
      <div className="relative border-t border-white/10 bg-navy/40">
        <Container className="grid gap-6 py-6 sm:grid-cols-3">
          {company.philosophyItems.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="font-display text-sm font-bold text-cyan">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
                {item}
              </span>
              {index < company.philosophyItems.length - 1 ? (
                <span className="ml-auto hidden h-px flex-1 bg-white/10 sm:block" />
              ) : null}
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
