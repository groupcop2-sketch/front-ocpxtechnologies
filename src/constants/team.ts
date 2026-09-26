export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  specialties: readonly string[];
  /**
   * TODO: reemplazar con fotografía real cuando esté disponible.
   */
  photo: string | null;
  initials: string;
};

export const team: readonly TeamMember[] = [
  {
    slug: "andres-palencia",
    name: "Andrés Palencia",
    role: "Fullstack Developer",
    specialties: [
      "Bases de datos",
      "Seguridad",
      "Administración de infraestructura (AWS)",
    ],
    photo: null,
    initials: "AP",
  },
  {
    slug: "anthony-ortiz",
    name: "Anthony Ortiz",
    role: "Fullstack Developer",
    specialties: ["Administración de infraestructura (AWS)"],
    photo: null,
    initials: "AO",
  },
  {
    slug: "edwin-capdevilla",
    name: "Edwin Capdevilla",
    role: "Especialista en bases de datos",
    specialties: ["Fullstack Developer"],
    photo: null,
    initials: "EC",
  },
] as const;
