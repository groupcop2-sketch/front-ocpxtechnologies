export type Service = {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  technologies: readonly string[];
};

export const services: readonly Service[] = [
  {
    slug: "desarrollo-de-software",
    title: "Desarrollo de software",
    problem:
      "Los procesos, productos o canales de la organización no tienen el sistema que necesitan, o el que existe ya no escala.",
    solution:
      "Diseñamos y construimos aplicaciones web, APIs, microservicios, integraciones y sistemas empresariales a la medida del negocio.",
    benefit:
      "Una plataforma clara, mantenible y alineada con la operación, lista para evolucionar sin rehacerlo todo.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "APIs REST",
      "Integraciones",
    ],
  },
  {
    slug: "cloud-infraestructura",
    title: "Cloud e infraestructura",
    problem:
      "La infraestructura es frágil, costosa de operar o no está preparada para los entornos que el negocio requiere.",
    solution:
      "Arquitecturamos, implementamos, migramos y operamos entornos cloud e infraestructura con foco en estabilidad y costo.",
    benefit:
      "Bases técnicas más predecibles, observables y preparadas para crecer con la demanda.",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
  },
  {
    slug: "ciberseguridad",
    title: "Ciberseguridad",
    problem:
      "Las aplicaciones, la infraestructura y la información quedan expuestas cuando la seguridad se trata como un añadido.",
    solution:
      "Integramos controles de seguridad en el diseño, el desarrollo y la operación: identidades, datos, aplicaciones y superficie de ataque.",
    benefit:
      "Menor riesgo operativo y una postura de seguridad que acompaña al producto, no que lo frena al final.",
    technologies: [
      "OWASP",
      "IAM",
      "Secrets management",
      "Hardening",
      "Monitoreo",
    ],
  },
  {
    slug: "datos-analytics",
    title: "Datos y analytics",
    problem:
      "La organización tiene datos dispersos y pocas formas confiables de convertirlos en decisiones.",
    solution:
      "Ordenamos, integramos y modelamos la información para que equipos de negocio puedan consultarla y actuar.",
    benefit:
      "Tableros, modelos y flujos de datos que reducen la intuición ciega y mejoran la conversación entre áreas.",
    technologies: ["SQL", "Python", "ETL/ELT", "Warehousing", "BI"],
  },
  {
    slug: "automatizacion-de-procesos",
    title: "Automatización de procesos",
    problem:
      "Tareas repetitivas, traspasos manuales y aprobaciones lentas consumen tiempo y generan errores.",
    solution:
      "Identificamos cuellos de botella y automatizamos flujos operativos con integraciones y reglas claras.",
    benefit:
      "Menos trabajo manual, más consistencia y equipos enfocados en lo que sí requiere criterio humano.",
    technologies: [
      "Workflows",
      "Integraciones",
      "APIs",
      "RPA cuando aplica",
      "Observabilidad",
    ],
  },
  {
    slug: "consultoria-tecnologica",
    title: "Consultoría tecnológica",
    problem:
      "Hay presión por modernizar, pero falta un mapa técnico realista: qué construir, qué no y en qué orden.",
    solution:
      "Acompañamos decisiones de arquitectura, stack, priorización y gobierno de proyectos de TI.",
    benefit:
      "Una ruta técnica defendible, con riesgos visibles y un plan que el negocio puede ejecutar.",
    technologies: [
      "Arquitectura",
      "Discovery",
      "Roadmapping",
      "Due diligence técnica",
    ],
  },
] as const;
