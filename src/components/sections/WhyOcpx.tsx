import { Check } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyContent } from "@/constants/content";

export function WhyOcpx() {
  return (
    <Section id="por-que-ocpx" tone="graphite" ariaLabelledby="por-que-title">
      <SectionHeading
        id="por-que-title"
        eyebrow={whyContent.eyebrow}
        title={whyContent.title}
        lead={whyContent.lead}
        tone="dark"
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {whyContent.items.map((item) => (
          <li
            key={item.title}
            className="flex gap-4 rounded-2xl border border-white/10 p-5"
          >
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue/15 text-cyan">
              <Check size={16} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
