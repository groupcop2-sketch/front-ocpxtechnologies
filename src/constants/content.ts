import { company } from "@/config/site";

export const cta = {
  primary: "Hablemos de tu proyecto",
  secondary: "Conoce nuestras soluciones",
  secondaryHero: "Explorar soluciones",
  submit: "Enviar mensaje",
  sending: "Enviando…",
} as const;

export const heroContent = {
  eyebrow: company.name,
  title: company.tagline,
  body: company.description,
  primaryCta: cta.primary,
  secondaryCta: cta.secondaryHero,
} as const;

export const trustContent = {
  eyebrow: "Capacidades",
  title: "Tecnología al servicio del negocio",
  items: [
    {
      label: "Software",
      detail: "Productos y sistemas que sostienen la operación.",
    },
    {
      label: "Datos",
      detail: "Información clara para decidir con contexto.",
    },
    {
      label: "Automatización",
      detail: "Procesos más ágiles, con menos fricción.",
    },
    {
      label: "Infraestructura",
      detail: "Bases técnicas estables y preparadas para crecer.",
    },
  ],
} as const;

export const aboutContent = {
  eyebrow: "Quiénes somos",
  title: "Ingeniería con criterio de negocio",
  lead: "OCPX Technologies nace para acompañar a organizaciones que necesitan tecnología precisa: bien pensada, bien construida y sostenible en el tiempo.",
  body: "No partimos de una plantilla de producto. Partimos del problema. Escuchamos el contexto, diseñamos la solución adecuada y la implementamos con una arquitectura que se pueda operar, asegurar y evolucionar.",
  purpose: {
    title: "Propósito",
    text: company.purpose,
  },
  mission: {
    title: "Misión",
    text: "Ayudar a las empresas a convertir necesidades reales en soluciones tecnológicas confiables, mantenibles y alineadas con sus objetivos.",
  },
  vision: {
    title: "Visión",
    text: "Ser un socio tecnológico de largo plazo para organizaciones que buscan crecer con ingeniería sólida, comunicación clara y resultados medibles.",
  },
} as const;

export const valuesContent = {
  eyebrow: "Principios",
  title: "La forma en que trabajamos",
  items: [
    {
      title: "Innovación",
      text: "Exploramos lo nuevo cuando aporta valor. La tecnología se elige por el problema, no por la moda.",
    },
    {
      title: "Integridad",
      text: "Comunicamos con transparencia: alcances, riesgos, decisiones y trade-offs. Sin promesas que no podamos sostener.",
    },
    {
      title: "Colaboración",
      text: "Trabajamos con los equipos del cliente. La mejor solución se construye cuando negocio y tecnología conversan.",
    },
    {
      title: "Excelencia",
      text: "Cuidamos la calidad del código, de la arquitectura y de la entrega. Lo que se pone en producción debe poder mantenerse.",
    },
    {
      title: "Impacto positivo",
      text: "Medimos el éxito por el valor que genera la solución en la operación, no por la cantidad de funciones entregadas.",
    },
  ],
} as const;

export const valuePropositionContent = {
  eyebrow: "Soluciones",
  title: "De la idea al resultado",
  lead: "El concepto de marca de OCPX resume cómo abordamos cada iniciativa: entendemos, resolvemos y dejamos capacidad instalada.",
  steps: [
    {
      title: "Ideas",
      text: "Clarificamos el problema, el contexto y el resultado que el negocio realmente necesita.",
    },
    {
      title: "Soluciones",
      text: "Diseñamos e implementamos software, datos, automatización o infraestructura con criterio técnico.",
    },
    {
      title: "Resultados",
      text: "Entregamos una solución operable, segura y preparada para evolucionar con la organización.",
    },
  ],
} as const;

export const whyContent = {
  eyebrow: "Por qué OCPX",
  title: "Diferenciadores con los que sí nos comprometemos",
  lead: "No prometemos atajos. Prometemos un trabajo técnico serio, comunicación clara y soluciones que el negocio pueda sostener.",
  items: [
    {
      title: "Soluciones adaptadas al negocio",
      text: "Cada proyecto parte del contexto operativo, no de un paquete genérico.",
    },
    {
      title: "Arquitectura mantenible",
      text: "Diseñamos para que el sistema se entienda, se opere y se evolucione después de la puesta en marcha.",
    },
    {
      title: "Seguridad desde el diseño",
      text: "La protección de datos, identidades y superficies de ataque se considera desde la arquitectura, no al final.",
    },
    {
      title: "Acompañamiento técnico",
      text: "No desaparecemos al entregar. Acompañamos la implementación y la transferencia de conocimiento.",
    },
    {
      title: "Comunicación clara",
      text: "Traducimos decisiones técnicas a lenguaje de negocio y visibilizamos riesgos a tiempo.",
    },
    {
      title: "Tecnologías modernas, con criterio",
      text: "Usamos herramientas actuales cuando mejoran calidad, velocidad o operación. Sin sobreingeniería.",
    },
    {
      title: "Escalabilidad realista",
      text: "Preparamos la solución para crecer con la demanda, sin inflar la complejidad del día uno.",
    },
    {
      title: "Orientación a resultados",
      text: "El entregable no es un demo: es una capacidad que el equipo puede usar y sostener.",
    },
  ],
} as const;

export const finalCtaContent = {
  title: "¿Tienes un proyecto en mente?",
  body: "Conversemos sobre el problema que quieres resolver y evaluemos cómo la tecnología puede ayudarte.",
  cta: cta.primary,
} as const;

export const contactContent = {
  eyebrow: "Contacto",
  title: "Cuéntanos qué necesitas resolver",
  lead: "Completa el formulario y un miembro del equipo revisará tu mensaje. Mientras más contexto nos des, mejor podremos orientarte.",
  success:
    "Mensaje enviado correctamente. Nuestro equipo se pondrá en contacto contigo.",
  error:
    "No pudimos enviar el mensaje. Inténtalo de nuevo en unos minutos.",
  notConfigured:
    "El canal de envío todavía no está activo. Inténtalo más tarde o vuelve a escribirnos en otro momento.",
  privacyLabel: "He leído y acepto la",
  privacyLink: "política de privacidad",
  fields: {
    name: "Nombre",
    email: "Correo",
    company: "Empresa",
    message: "Mensaje / proyecto",
  },
} as const;

export const projectsContent = {
  eyebrow: "Proyectos",
  title: "Casos de estudio",
  lead: "Estamos documentando nuestros casos de forma rigurosa. No publicamos clientes, métricas ni resultados que no podamos verificar.",
  placeholderNote:
    "Los siguientes bloques muestran la estructura con la que presentaremos cada caso. No representan clientes reales.",
  emptyCta: "Hablemos de un caso similar al tuyo",
} as const;

export const footerContent = {
  blurb:
    "OCPX Technologies diseña y desarrolla soluciones tecnológicas para organizaciones que necesitan software, datos, automatización e infraestructura con criterio de ingeniería.",
} as const;

export const formMessages = {
  nameRequired: "Ingresa tu nombre.",
  nameMax: "El nombre es demasiado largo.",
  emailInvalid: "Ingresa un correo válido.",
  companyMax: "El nombre de la empresa es demasiado largo.",
  messageMin: "Cuéntanos un poco más sobre tu proyecto (mínimo 20 caracteres).",
  messageMax: "El mensaje es demasiado largo.",
  privacyRequired: "Debes aceptar la política de privacidad para continuar.",
} as const;
