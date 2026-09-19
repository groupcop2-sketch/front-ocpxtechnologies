"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectImage } from "@/constants/projects";
import { projectsContent } from "@/constants/content";
import { cn } from "@/lib/cn";

type ProjectGalleryProps = {
  images: readonly ProjectImage[];
  title: string;
  variant?: "card" | "page";
  priority?: boolean;
};

export function ProjectGallery({
  images,
  title,
  variant = "card",
  priority = false,
}: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  const hasMany = images.length > 1;

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((currentIndex) => {
        const next = currentIndex + direction;
        if (next < 0) {
          return images.length - 1;
        }
        if (next >= images.length) {
          return 0;
        }
        return next;
      });
    },
    [images.length],
  );

  if (!current) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-cloud",
        variant === "card" ? "aspect-[16/10]" : "aspect-[16/9] rounded-2xl border border-navy/8",
      )}
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Capturas de ${title}`}
      tabIndex={hasMany ? 0 : undefined}
      onKeyDown={(event) => {
        if (!hasMany) {
          return;
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        }
      }}
    >
      <Image
        src={current.src}
        alt={current.alt}
        fill
        priority={priority}
        className="object-contain object-center p-3 md:p-5"
        sizes={
          variant === "page"
            ? "(max-width: 1152px) 100vw, 1152px"
            : "(max-width: 1024px) 100vw, 560px"
        }
      />
      {hasMany ? (
        <>
          <button
            type="button"
            className="absolute top-1/2 left-2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm transition-colors hover:bg-white"
            aria-label={projectsContent.galleryPrev}
            onClick={() => go(-1)}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm transition-colors hover:bg-white"
            aria-label={projectsContent.galleryNext}
            onClick={() => go(1)}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                className={cn(
                  "h-2 rounded-full transition-all",
                  imageIndex === index ? "w-5 bg-blue" : "w-2 bg-navy/25 hover:bg-navy/40",
                )}
                aria-label={`Ir a la captura ${imageIndex + 1} de ${images.length}`}
                aria-current={imageIndex === index}
                onClick={() => setIndex(imageIndex)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
