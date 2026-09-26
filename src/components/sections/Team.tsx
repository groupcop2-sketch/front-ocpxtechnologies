import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamPortrait } from "@/components/shared/TeamPortrait";
import { teamContent } from "@/constants/content";
import { team } from "@/constants/team";

export function Team() {
  return (
    <Section id="equipo" tone="cloud" ariaLabelledby="equipo-title">
      <SectionHeading
        id="equipo-title"
        eyebrow={teamContent.eyebrow}
        title={teamContent.title}
        lead={teamContent.lead}
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <li key={member.slug}>
            <article className="h-full overflow-hidden rounded-2xl border border-navy/8 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/35 hover:shadow-[0_16px_40px_rgb(7_21_47_/_0.08)]">
              <div className="relative aspect-[4/5]">
                <TeamPortrait member={member} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 font-display text-sm font-medium text-blue">
                  {member.role}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <li
                      key={specialty}
                      className="rounded-full bg-cloud px-3 py-1.5 font-display text-[0.7rem] font-medium tracking-wide text-navy/75"
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
