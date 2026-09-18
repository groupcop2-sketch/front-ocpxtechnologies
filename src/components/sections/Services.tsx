import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/constants/services";

export function Services() {
  return (
    <Section id="servicios" tone="cloud" ariaLabelledby="servicios-title">
      <SectionHeading
        id="servicios-title"
        eyebrow="Servicios"
        title="Capacidades para transformar la operación"
        lead="Cada servicio parte de un problema concreto. Luego viene la solución técnica y, al final, el beneficio que el negocio puede sostener."
      />
      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug}>
            <article className="group flex h-full flex-col rounded-2xl border border-navy/8 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/35 hover:shadow-[0_16px_40px_rgb(7_21_47_/_0.08)] md:p-8">
              <h3 className="font-display text-xl font-semibold text-navy">
                {service.title}
              </h3>
              <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                    Problema
                  </dt>
                  <dd className="mt-1 text-neutral">{service.problem}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                    Solución
                  </dt>
                  <dd className="mt-1 text-neutral">{service.solution}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                    Beneficio
                  </dt>
                  <dd className="mt-1 text-navy/80">{service.benefit}</dd>
                </div>
              </dl>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-cloud px-3 py-1 font-display text-[0.7rem] font-medium tracking-wide text-navy/70"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
