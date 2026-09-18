import Image from "next/image";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, valuesContent } from "@/constants/content";
import { company } from "@/config/site";

export function About() {
  return (
    <Section id="nosotros" ariaLabelledby="nosotros-title">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            id="nosotros-title"
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            lead={aboutContent.lead}
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral">
            {aboutContent.body}
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-navy/8 bg-cloud p-8">
            <Image
              src="/brand/ocpx-logo.webp"
              alt={`Logotipo de ${company.name}`}
              width={420}
              height={140}
              className="h-16 w-auto md:h-20"
              sizes="(max-width: 768px) 240px, 420px"
            />
            <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-neutral">
              {company.philosophy}
            </p>
          </div>
        </div>
        <aside className="grid gap-4 lg:col-span-5">
          {[aboutContent.purpose, aboutContent.mission, aboutContent.vision].map(
            (item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-navy/8 bg-cloud p-6"
              >
                <h3 className="font-display text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral">
                  {item.text}
                </p>
              </article>
            ),
          )}
        </aside>
      </div>
      <div className="mt-16">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-blue">
          {valuesContent.eyebrow}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
          {valuesContent.title}
        </h3>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {valuesContent.items.map((value) => (
            <li
              key={value.title}
              className="rounded-2xl border border-navy/8 p-5 transition-colors hover:border-blue/40"
            >
              <h4 className="font-display text-sm font-semibold text-navy">
                {value.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral">
                {value.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
