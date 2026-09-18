import { cn } from "@/lib/cn";

const tones = {
  light: "bg-white text-navy",
  cloud: "bg-cloud text-navy",
  navy: "bg-navy text-white",
  graphite: "bg-graphite text-white",
} as const;

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "light",
  ariaLabelledby,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof tones;
  ariaLabelledby?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("scroll-mt-24 py-20 md:py-28", tones[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
