import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { JsonLd } from "@/components/shared/JsonLd";
import { company, routes } from "@/config/site";
import { getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cookies",
  description: `Uso de cookies en el sitio web de ${company.name}.`,
  alternates: { canonical: routes.cookies },
};

export default function CookiesPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageJsonLd({
            title: "Cookies",
            description: `Uso de cookies en el sitio web de ${company.name}.`,
            path: routes.cookies,
          }),
          getBreadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Cookies", path: routes.cookies },
          ]),
        ]}
      />
      <LegalPage title="Cookies" updated="septiembre de 2026">
        <p>
          Este sitio utiliza cookies y tecnologías similares estrictamente
          necesarias para su funcionamiento: sesión, seguridad y preferencias
          técnicas del servidor de aplicación.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Cookies actuales
        </h2>
        <p>
          En su estado inicial, la landing no incorpora herramientas de
          publicidad ni paneles de analítica de terceros que requieran un
          banner de consentimiento. Si se activa analítica de Vercel en el
          entorno de despliegue, se trata de medición de rendimiento y uso
          agregada, asociada a la plataforma de hosting.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Analítica futura
        </h2>
        <p>
          Si se habilita Google Analytics u otra herramienta de seguimiento que
          lo exija, implementaremos un mecanismo de consentimiento antes de
          cargar esos scripts y actualizaremos esta página.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Gestión
        </h2>
        <p>
          Puedes bloquear o eliminar cookies desde la configuración de tu
          navegador. Ten en cuenta que desactivar cookies técnicas puede afectar
          el funcionamiento del sitio.
        </p>
      </LegalPage>
    </>
  );
}
