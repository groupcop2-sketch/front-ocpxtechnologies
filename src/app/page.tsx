import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Technologies } from "@/components/sections/Technologies";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { WhyOcpx } from "@/components/sections/WhyOcpx";
import { JsonLd } from "@/components/shared/JsonLd";
import { seo } from "@/config/site";
import {
  getProfessionalServiceJsonLd,
  getWebPageJsonLd,
} from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageJsonLd({
            title: seo.title,
            description: seo.description,
          }),
          getProfessionalServiceJsonLd(),
        ]}
      />
      <Hero />
      <TrustBar />
      <About />
      <Team />
      <Services />
      <ValueProposition />
      <Process />
      <Technologies />
      <Projects />
      <WhyOcpx />
      <FinalCta />
      <Contact />
    </>
  );
}
