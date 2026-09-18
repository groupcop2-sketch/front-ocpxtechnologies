import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { CtaLink } from "@/components/shared/CtaLink";
import { projects } from "@/constants/projects";
import { projectsContent } from "@/constants/content";
import { routes } from "@/config/site";
import { getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Proyectos y casos de estudio",
  description:
    "Estructura de casos de estudio de OCPX Technologies. Publicaremos proyectos verificables cuando existan.",
  alternates: { canonical: routes.projects },
};

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={[
          getWebPageJsonLd({
            title: "Proyectos y casos de estudio",
            description:
              "Estructura de casos de estudio de OCPX Technologies. Publicaremos proyectos verificables cuando existan.",
            path: routes.projects,
          }),
          getBreadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Proyectos", path: routes.projects },
          ]),
        ]}
      />
      <Container className="py-28 md:py-32">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-blue">
          {projectsContent.eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          {projectsContent.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral md:text-lg">
          {projectsContent.lead}
        </p>
        <p className="mt-4 max-w-2xl text-sm text-neutral">
          {projectsContent.placeholderNote}
        </p>
        <ul className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <article className="h-full rounded-2xl border border-dashed border-navy/20 bg-cloud p-6 md:p-8">
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy/60">
                  {project.isPlaceholder ? "Placeholder" : project.sector}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral">
                  {project.summary}
                </p>
                <Link
                  href={routes.project(project.slug)}
                  className="mt-6 inline-flex min-h-11 items-center font-display text-sm font-semibold text-blue"
                >
                  Ver estructura
                </Link>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <CtaLink href="/#contacto" variant="outline">
            {projectsContent.emptyCta}
          </CtaLink>
        </div>
      </Container>
    </div>
  );
}
