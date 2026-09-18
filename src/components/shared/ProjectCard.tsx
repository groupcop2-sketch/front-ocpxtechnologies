"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/constants/projects";
import { projectsContent } from "@/constants/content";
import { analyticsEvents } from "@/constants/analytics";
import { routes } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function ProjectCard({
  project,
  headingLevel = "h3",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  const Title = headingLevel;

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-200",
        project.isPlaceholder
          ? "border-dashed border-navy/20 bg-cloud"
          : "border-navy/8 hover:-translate-y-0.5 hover:border-blue/35 hover:shadow-[0_16px_40px_rgb(7_21_47_/_0.08)]",
      )}
    >
      {project.image ? (
        <div className="relative aspect-[2/1] overflow-hidden bg-navy">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-blue">
          {project.isPlaceholder ? "Placeholder" : project.sector}
        </p>
        <Title className="mt-3 font-display text-xl font-semibold text-navy md:text-2xl">
          {project.title}
        </Title>
        <p className="mt-3 text-sm leading-relaxed text-neutral">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:items-center">
          <Link
            href={routes.project(project.slug)}
            className="inline-flex min-h-11 items-center gap-2 font-display text-sm font-semibold text-blue transition-colors hover:text-navy"
            data-analytics-event={analyticsEvents.ctaProjectView}
            onClick={() =>
              trackEvent(analyticsEvents.ctaProjectView, {
                project: project.slug,
              })
            }
          >
            {projectsContent.caseLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-display text-sm font-semibold text-navy transition-colors hover:text-blue"
              data-analytics-event={analyticsEvents.ctaProjectLive}
              onClick={() =>
                trackEvent(analyticsEvents.ctaProjectLive, {
                  project: project.slug,
                })
              }
            >
              {projectsContent.liveLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
