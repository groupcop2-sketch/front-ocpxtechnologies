import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactContent } from "@/constants/content";
import { company, location } from "@/config/site";
import { getPublicContactEmail } from "@/config/env";

export function Contact() {
  const email = getPublicContactEmail();

  return (
    <Section id="contacto" tone="cloud" ariaLabelledby="contacto-title">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contacto-title"
            eyebrow={contactContent.eyebrow}
            title={contactContent.title}
            lead={contactContent.lead}
          />
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-display font-semibold text-navy">Operación</dt>
              <dd className="mt-1 text-neutral">{location.country}</dd>
            </div>
            {email ? (
              <div>
                <dt className="font-display font-semibold text-navy">Correo</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${email}`}
                    className="text-blue underline-offset-2 hover:underline"
                  >
                    {email}
                  </a>
                </dd>
              </div>
            ) : null}
            {location.phone ? (
              <div>
                <dt className="font-display font-semibold text-navy">Teléfono</dt>
                <dd className="mt-1 text-neutral">{location.phone}</dd>
              </div>
            ) : null}
            {location.address ? (
              <div>
                <dt className="font-display font-semibold text-navy">Dirección</dt>
                <dd className="mt-1 text-neutral">{location.address}</dd>
              </div>
            ) : null}
          </dl>
          <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.2em] text-neutral">
            {company.philosophy}
          </p>
        </div>
        <div className="rounded-3xl border border-navy/8 bg-white p-6 shadow-[0_16px_50px_rgb(7_21_47_/_0.06)] md:p-8 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
