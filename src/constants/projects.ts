export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  sector: string;
  isPlaceholder: boolean;
  url: string | null;
  images: readonly ProjectImage[];
  problem: string;
  solution: string;
  architecture: string;
  technologies: readonly string[];
  result: string;
};

/**
 * Catálogo de casos de éxito.
 * TODO: agregar cada proyecto real a medida que se entregue.
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
    images: [
      {
        src: "/projects/futarix.webp",
        alt: "Pantalla de inicio de sesión de Futarix, liga virtual de fútbol.",
      },
    ],
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
  {
    slug: "auctionator",
    title: "Auctionator",
    summary:
      "Sistema web para gestionar inventario y venta de equipos de radiología médica: lotes, clientes, compras, envíos y control de acceso.",
    sector: "Equipos médicos",
    isPlaceholder: false,
    url: "http://app.webauctionator.com/",
    images: [
      {
        src: "/projects/auctionator-login.webp",
        alt: "Inicio de sesión de Auctionator.",
      },
      {
        src: "/projects/auctionator.webp",
        alt: "Panel de Auctionator para inventario y operación de equipos de radiología médica.",
      },
    ],
    problem:
      "Comercializar equipos de radiología médica exige un control preciso del inventario, de cada equipo o lote, de los clientes y de la operación de venta y envío, sin dispersar la información en herramientas sueltas.",
    solution:
      "Desarrollamos Auctionator, una plataforma web con acceso autenticado para administrar inventario de equipos de radiología, lotes, leads, clientes, órdenes de compra, documentos, casos de envío y seguridad del panel.",
    architecture:
      "Frontend en Angular, API y lógica de negocio en .NET, y persistencia en SQL Server. El acceso al panel está protegido por autenticación.",
    technologies: ["Angular", ".NET", "SQL Server"],
    result:
      "El sistema está publicado en producción en app.webauctionator.com y concentra la operación de inventario y venta de equipos de radiología. No incluimos volúmenes de venta ni métricas que no hayamos verificado.",
  },
  {
    slug: "mrgoma-tires",
    title: "Mr Goma Tires",
    summary:
      "Intranet para inventario y ventas de partes de llantas, con acceso autenticado para el equipo operativo.",
    sector: "Autopartes",
    isPlaceholder: false,
    url: "https://intranet.mrgomatires.com/Login.aspx",
    images: [
      {
        src: "/projects/mrgoma-tires.webp",
        alt: "Inicio de sesión de la intranet de Mr Goma Tires.",
      },
    ],
    problem:
      "Un negocio de llantas y partes necesita controlar existencias y ventas en un sistema interno, no en hojas sueltas, y limitar el acceso al personal autorizado.",
    solution:
      "Desarrollamos una intranet en ASP.NET con inicio de sesión para gestionar inventario y ventas de partes de llantas desde un único panel interno.",
    architecture:
      "Aplicación web en ASP.NET (Web Forms) con persistencia en SQL Server. El acceso está protegido por autenticación de usuario y contraseña.",
    technologies: ["ASP.NET", "SQL Server"],
    result:
      "La intranet está publicada en intranet.mrgomatires.com. No incluimos volúmenes de inventario ni cifras de venta que no hayamos verificado.",
  },
  {
    slug: "mindheal-colombia",
    title: "MindLink Heal Colombia",
    summary:
      "Plataforma solidaria de videoconsultas psicológicas 100% gratuitas para personas afectadas por terremotos en Colombia.",
    sector: "Salud mental",
    isPlaceholder: false,
    url: "https://www.mindhealcolombia.online/",
    images: [
      {
        src: "/projects/mindheal-home.webp",
        alt: "Página de inicio de MindLink Heal Colombia, con solicitud de consulta gratuita.",
      },
      {
        src: "/projects/mindheal-hero.webp",
        alt: "Imagen de videoconsulta de apoyo psicológico de MindLink Heal Colombia.",
      },
      {
        src: "/projects/mindheal-proceso.webp",
        alt: "Pasos para solicitar una sesión psicológica gratuita en MindLink Heal Colombia.",
      },
    ],
    problem:
      "Tras un sismo, las personas afectadas necesitan contención emocional inmediata y un canal claro para pedir ayuda, sin costo y sin intermediación comercial.",
    solution:
      "Desarrollamos MindLink Heal Colombia: una plataforma web que conecta a la comunidad afectada con psicólogos voluntarios para videoconsultas confidenciales y gratuitas, además de registro de profesionales y líneas de crisis 24/7.",
    architecture:
      "Frontend en React y backend en Node. El sitio público permite solicitar consulta, conocer cómo funciona el apoyo y sumar psicólogos voluntarios.",
    technologies: ["React", "Node.js"],
    result:
      "El servicio está publicado en mindhealcolombia.online como iniciativa solidaria de salud mental post-terremoto. No incluimos número de consultas, voluntarios ni métricas que no hayamos verificado.",
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCover(project: Project): ProjectImage | undefined {
  return project.images[0];
}

export const publishedProjects = projects.filter(
  (project) => !project.isPlaceholder,
);
