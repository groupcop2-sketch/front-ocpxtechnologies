export type Project = {
  slug: string;
  title: string;
  summary: string;
  sector: string;
  isPlaceholder: boolean;
  url: string | null;
  image: string | null;
  imageAlt: string | null;
  problem: string;
  solution: string;
  architecture: string;
  technologies: readonly string[];
  result: string;
};

/**
 * Casos de estudio.
 * TODO: completar con más proyectos reales verificables.
 * No inventar clientes, métricas, testimonios ni resultados.
 */
export const projects: readonly Project[] = [
  {
    slug: "futarix",
    title: "Futarix",
    summary:
      "Plataforma web de liga virtual de fútbol, con acceso autenticado al panel de la competencia.",
    sector: "Deporte digital",
    isPlaceholder: false,
    url: "https://futaryx-front.vercel.app/",
    image: "/projects/futarix.webp",
    imageAlt:
      "Pantalla de inicio de sesión de Futarix, liga virtual de fútbol.",
    problem:
      "Una liga virtual de fútbol necesita un punto de entrada digital claro: identidad de marca, acceso controlado y un panel al que jugadores o administradores puedan entrar con usuario o correo.",
    solution:
      "Diseñamos y publicamos una aplicación web con la identidad de Futarix (Virtual Football League Soccer) y un flujo de acceso al panel mediante usuario o correo y contraseña, incluyendo recuperación de clave.",
    architecture:
      "Frontend web desplegado en Vercel. El entorno público expone el acceso autenticado al panel; no detallamos servicios internos que no sean observables en producción.",
    technologies: ["Aplicación web", "Autenticación", "Vercel"],
    result:
      "El producto está publicado en producción y disponible para acceder al panel de la liga. No incluimos métricas de uso, número de usuarios ni resultados que no hayamos verificado.",
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const publishedProjects = projects.filter(
  (project) => !project.isPlaceholder,
);
