import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valuePropositionContent } from "@/constants/content";

export function ValueProposition() {
  return (
    <Section
      id="soluciones"
      tone="navy"
      className="relative overflow-hidden"
      ariaLabelledby="soluciones-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-30" />
      <div className="relative">
        <SectionHeading
          id="soluciones-title"
          eyebrow={valuePropositionContent.eyebrow}
          title={valuePropositionContent.title}
          lead={valuePropositionContent.lead}
          tone="dark"
        />
        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {valuePropositionContent.steps.map((step, index) => (
            <li key={step.title} className="relative">
              <article className="h-full rounded-2xl border border-white/10 bg-white/4 p-7">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {step.text}
                </p>
              </article>
              {index < valuePropositionContent.steps.length - 1 ? (
                <div
                  className="pointer-events-none absolute top-1/2 -right-3 hidden h-px w-6 bg-linear-to-r from-cyan/70 to-transparent lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-sm text-white/55">
          La X de OCPX representa esa intersección: conectar el problema de
          negocio con una solución tecnológica que se pueda operar, asegurar y
          escalar.
        </p>
      </div>
    </Section>
  );
}
