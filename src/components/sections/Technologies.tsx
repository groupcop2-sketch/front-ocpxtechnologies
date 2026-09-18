import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologiesIntro, technologyGroups } from "@/constants/technologies";

export function Technologies() {
  return (
    <Section id="tecnologias" tone="cloud" ariaLabelledby="tecnologias-title">
      <SectionHeading
        id="tecnologias-title"
        eyebrow={technologiesIntro.eyebrow}
        title={technologiesIntro.title}
        lead={technologiesIntro.lead}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {technologyGroups.map((group) => (
          <section
            key={group.id}
            className="rounded-2xl border border-navy/8 bg-white p-6"
            aria-labelledby={`tech-${group.id}`}
          >
            <h3
              id={`tech-${group.id}`}
              className="font-display text-base font-semibold text-navy"
            >
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-navy/10 px-3 py-1.5 font-display text-xs font-medium text-navy/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
