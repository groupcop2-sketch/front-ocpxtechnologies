import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/shared/CtaLink";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/constants/projects";
import { projectsContent } from "@/constants/content";

export function Projects() {
  const hasPlaceholders = projects.some((project) => project.isPlaceholder);

  return (
    <Section id="proyectos" ariaLabelledby="proyectos-title">
      <SectionHeading
        id="proyectos-title"
        eyebrow={projectsContent.eyebrow}
        title={projectsContent.title}
        lead={projectsContent.lead}
      />
      {hasPlaceholders ? (
        <p className="mt-4 max-w-2xl text-sm text-neutral">
          {projectsContent.placeholderNote}
        </p>
      ) : null}
      <ul className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
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
