import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-display text-xs font-semibold uppercase tracking-[0.22em]",
            isDark ? "text-cyan" : "text-blue",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl",
          isDark ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            isDark ? "text-white/70" : "text-neutral",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
