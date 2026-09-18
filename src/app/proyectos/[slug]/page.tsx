import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { CtaLink } from "@/components/shared/CtaLink";
import { getProjectBySlug, projects } from "@/constants/projects";
import { cta, projectsContent } from "@/constants/content";
import { routes } from "@/config/site";
import { getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: project.title,
    description: project.summary,
    robots: project.isPlaceholder ? { index: false, follow: true } : undefined,
    alternates: { canonical: routes.project(project.slug) },
    openGraph: project.image
      ? {
          images: [{ url: project.image, alt: project.imageAlt ?? project.title }],
        }
      : undefined,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const blocks = [
    { title: "Problema", text: project.problem },
    { title: "Solución", text: project.solution },
    { title: "Arquitectura", text: project.architecture },
    { title: "Resultado", text: project.result },
  ];

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          getWebPageJsonLd({
            title: project.title,
            description: project.summary,
            path: routes.project(project.slug),
          }),
          getBreadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Proyectos", path: routes.projects },
            { name: project.title, path: routes.project(project.slug) },
          ]),
        ]}
      />
      <Container className="py-28 md:py-32">
        {project.isPlaceholder ? (
          <p className="w-fit rounded-full bg-cloud px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy/70">
            Placeholder — no es un cliente real
          </p>
        ) : (
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-blue">
            {project.sector}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral">
          {project.summary}
        </p>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-display text-sm font-semibold text-blue"
          >
            {projectsContent.liveLabel}
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="font-sans font-normal text-neutral">
              {new URL(project.url).hostname}
            </span>
          </a>
        ) : null}
        {project.image ? (
          <div className="relative mt-10 aspect-[2/1] overflow-hidden rounded-2xl border border-navy/8 bg-navy">
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>
        ) : null}
        <div className="mt-12 grid gap-5">
          {blocks.map((block) => (
            <section
              key={block.title}
              className="rounded-2xl border border-navy/8 bg-cloud p-6 md:p-8"
            >
              <h2 className="font-display text-xl font-semibold text-navy">
                {block.title}
              </h2>
              <p className="mt-3 leading-relaxed text-navy/75">{block.text}</p>
            </section>
          ))}
          <section className="rounded-2xl border border-navy/8 p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-navy">
              Tecnologías
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-cloud px-3 py-1.5 font-display text-xs font-medium text-navy/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaLink href="/#contacto">{cta.primary}</CtaLink>
          <Link
            href={routes.projects}
            className="inline-flex min-h-11 items-center font-display text-sm font-semibold text-navy"
          >
            Volver a proyectos
          </Link>
        </div>
      </Container>
    </div>
  );
}
