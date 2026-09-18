export type Project = {
  slug: string;
  title: string;
  summary: string;
  sector: string;
  isPlaceholder: boolean;
  problem: string;
  solution: string;
  architecture: string;
  technologies: readonly string[];
  result: string;
};

/**
 * Casos de estudio.
 * TODO: reemplazar placeholders con proyectos reales verificables.
 * No inventar clientes, métricas, testimonios ni resultados.
 */
export const projects: readonly Project[] = [
  {
    slug: "estructura-caso-de-estudio",
    title: "Estructura de caso de estudio",
    summary:
      "Así presentaremos cada proyecto: problema, solución, arquitectura, tecnologías y resultado. Este bloque es un placeholder.",
    sector: "Placeholder",
    isPlaceholder: true,
    problem:
      "Aquí describiremos el problema de negocio que el cliente necesitaba resolver, con el contexto suficiente y sin revelar información confidencial.",
    solution:
      "Aquí explicaremos el enfoque de OCPX: qué se diseñó, qué se construyó y por qué esa ruta era la adecuada.",
    architecture:
      "Aquí resumiremos las decisiones de arquitectura relevantes: integraciones, datos, seguridad y operación.",
    technologies: ["Por definir"],
    result:
      "Aquí publicaremos resultados verificables cuando existan. No incluiremos métricas, nombres de clientes ni testimonios ficticios.",
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
