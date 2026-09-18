import { Container } from "@/components/ui/Container";
import { CtaLink } from "@/components/shared/CtaLink";
import { analyticsEvents } from "@/constants/analytics";
import { finalCtaContent } from "@/constants/content";

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-navy py-20 text-white md:py-28"
      aria-labelledby="cta-final-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-30" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue/20 blur-3xl" />
      <Container className="relative">
        <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/4 p-8 md:p-12">
          <h2
            id="cta-final-title"
            className="font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl"
          >
            {finalCtaContent.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {finalCtaContent.body}
          </p>
          <div className="mt-8">
            <CtaLink
              href="/#contacto"
              eventName={analyticsEvents.ctaFinalContact}
              eventMeta={{ location: "final_cta" }}
            >
              {finalCtaContent.cta}
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
