import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { JsonLd } from "@/components/shared/JsonLd";
import { company, routes } from "@/config/site";
import { getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales en el sitio de OCPX Technologies.",
  alternates: { canonical: routes.privacy },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageJsonLd({
            title: "Política de privacidad",
            description:
              "Información sobre el tratamiento de datos personales en el sitio de OCPX Technologies.",
            path: routes.privacy,
          }),
          getBreadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Política de privacidad", path: routes.privacy },
          ]),
        ]}
      />
      <LegalPage title="Política de privacidad" updated="septiembre de 2026">
        <p>
          Esta política describe cómo {company.name} trata los datos personales
          que se recogen a través de este sitio web, en particular mediante el
          formulario de contacto. El tratamiento se realiza en el marco de la
          legislación colombiana aplicable, incluida la Ley 1581 de 2012 y sus
          normas complementarias.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Responsable
        </h2>
        <p>
          El responsable del tratamiento es {company.name}, con operación
          inicial en Colombia. Los datos de identificación societaria, domicilio
          y canales oficiales se publicarán en este documento cuando estén
          definitivos.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Datos que recolectamos
        </h2>
        <p>
          Si utilizas el formulario de contacto, podemos recolectar: nombre,
          correo electrónico, empresa y el contenido del mensaje. No solicitamos
          datos sensibles a través de este sitio.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Finalidad
        </h2>
        <p>
          Utilizamos estos datos exclusivamente para responder tu solicitud,
          evaluar una posible relación comercial y dar seguimiento al
          intercambio. No vendemos datos personales.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Conservación
        </h2>
        <p>
          Conservamos la información el tiempo necesario para atender la
          consulta y cumplir obligaciones legales. Después, se elimina o se
          anonimiza.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Derechos
        </h2>
        <p>
          Puedes solicitar acceso, actualización, rectificación o supresión de
          tus datos, así como revocar la autorización, a través del formulario
          de contacto o del correo corporativo cuando esté publicado.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Encargados y transferencias
        </h2>
        <p>
          Si el envío de mensajes se realiza mediante un proveedor de correo o
          un webhook de integración, esos encargados tratarán los datos solo
          para esa finalidad y bajo las medidas de seguridad correspondientes.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy">
          Cambios
        </h2>
        <p>
          Cualquier actualización de esta política se publicará en esta misma
          página con una nueva fecha de revisión.
        </p>
      </LegalPage>
    </>
  );
}
