import { Section } from "@/components/ui/Container";
import { trustContent } from "@/constants/content";

export function TrustBar() {
  return (
    <Section tone="cloud" className="py-14 md:py-16">
      <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.22em] text-blue">
        {trustContent.eyebrow}
      </p>
      <h2 className="mt-3 text-center font-display text-2xl font-semibold text-navy md:text-3xl">
        {trustContent.title}
      </h2>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustContent.items.map((item) => (
          <li
            key={item.label}
            className="rounded-2xl border border-navy/8 bg-white px-5 py-5"
          >
            <p className="font-display text-sm font-semibold text-navy">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
