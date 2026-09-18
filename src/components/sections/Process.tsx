import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/constants/process";

export function Process() {
  return (
    <Section id="proceso" ariaLabelledby="proceso-title">
      <SectionHeading
        id="proceso-title"
        eyebrow="Cómo trabajamos"
        title="Un proceso que entiende el negocio antes de escribir código"
        lead="OCPX no se limita a desarrollar software. Primero comprendemos la necesidad, luego diseñamos la ruta y recién entonces construimos."
      />
      <ol className="mt-12 grid gap-4 md:grid-cols-5">
        {processSteps.map((step, index) => (
          <li key={step.number} className="relative">
            <article className="h-full rounded-2xl border border-navy/8 p-5 md:p-6">
              <p className="font-display text-2xl font-semibold text-blue">
                {step.number}
              </p>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral">
                {step.text}
              </p>
            </article>
            {index < processSteps.length - 1 ? (
              <span
                className="absolute top-10 -right-2 hidden text-cyan md:block"
                aria-hidden="true"
              >
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
