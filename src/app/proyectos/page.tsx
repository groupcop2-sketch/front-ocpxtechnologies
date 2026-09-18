import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { CtaLink } from "@/components/shared/CtaLink";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/constants/projects";
import { projectsContent } from "@/constants/content";
import { routes } from "@/config/site";
import { getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Proyectos y casos de estudio",
  description:
    "Casos de estudio de OCPX Technologies, incluyendo Futarix, plataforma web de liga virtual de fútbol.",
  alternates: { canonical: routes.projects },
};

export default function ProjectsPage() {
  const hasPlaceholders = projects.some((project) => project.isPlaceholder);

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          getWebPageJsonLd({
            title: "Proyectos y casos de estudio",
            description:
              "Casos de estudio de OCPX Technologies, incluyendo Futarix, plataforma web de liga virtual de fútbol.",
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
        {hasPlaceholders ? (
          <p className="mt-4 max-w-2xl text-sm text-neutral">
            {projectsContent.placeholderNote}
          </p>
        ) : null}
        <ul className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} headingLevel="h2" />
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
