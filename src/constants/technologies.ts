export type TechnologyGroup = {
  id: string;
  title: string;
  items: readonly string[];
};

export const technologyGroups: readonly TechnologyGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "Python", "APIs REST", "Microservicios"],
  },
  {
    id: "data-stores",
    title: "Bases de datos",
    items: ["PostgreSQL", "MySQL", "Redis", "SQL Server"],
  },
  {
    id: "cloud",
    title: "Cloud",
    items: ["AWS", "Azure", "Google Cloud"],
  },
  {
    id: "devops",
    title: "DevOps",
    items: ["Docker", "CI/CD", "Terraform", "Observabilidad"],
  },
  {
    id: "data",
    title: "Data",
    items: ["Python", "ETL/ELT", "Modelado dimensional", "BI"],
  },
  {
    id: "security",
    title: "Security",
    items: ["IAM", "OWASP", "Secrets management", "Hardening"],
  },
] as const;

export const technologiesIntro = {
  eyebrow: "Tecnologías",
  title: "Herramientas al servicio del problema",
  lead: "El stack se define según el contexto de cada organización. Estas son algunas de las tecnologías con las que diseñamos e implementamos soluciones.",
} as const;
