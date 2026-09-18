import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/shared/CtaLink";
import { projects } from "@/constants/projects";
import { projectsContent } from "@/constants/content";
import { analyticsEvents } from "@/constants/analytics";
import { routes } from "@/config/site";

export function Projects() {
  return (
    <Section id="proyectos" ariaLabelledby="proyectos-title">
      <SectionHeading
        id="proyectos-title"
        eyebrow={projectsContent.eyebrow}
        title={projectsContent.title}
        lead={projectsContent.lead}
      />
      <p className="mt-4 max-w-2xl text-sm text-neutral">
        {projectsContent.placeholderNote}
      </p>
      <ul className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <article className="flex h-full flex-col rounded-2xl border border-dashed border-navy/20 bg-cloud p-6 md:p-8">
              {project.isPlaceholder ? (
                <p className="w-fit rounded-full bg-navy/8 px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy/70">
                  Placeholder
                </p>
              ) : null}
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral">
                {project.summary}
              </p>
              <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                Problema → Solución → Arquitectura → Tecnologías → Resultado
              </p>
              <div className="mt-8">
                <Link
                  href={routes.project(project.slug)}
                  className="inline-flex min-h-11 items-center gap-2 font-display text-sm font-semibold text-blue transition-colors hover:text-navy"
                  data-analytics-event={analyticsEvents.ctaProjectView}
                >
                  Ver estructura del caso
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <CtaLink href="/#contacto" variant="outline">
          {projectsContent.emptyCta}
        </CtaLink>
      </div>
    </Section>
  );
}
