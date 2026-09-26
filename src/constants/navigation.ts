import { routes } from "@/config/site";

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: readonly NavItem[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const footerNav: readonly NavItem[] = [
  { label: "Inicio", href: routes.home },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: routes.projects },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const legalNav: readonly NavItem[] = [
  { label: "Política de privacidad", href: routes.privacy },
  { label: "Cookies", href: routes.cookies },
] as const;
