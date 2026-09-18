import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe o el enlace ha cambiado.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="bg-navy text-white">
      <Container className="flex min-h-[70vh] flex-col justify-center py-28">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          No encontramos esta página
        </h1>
        <p className="mt-4 max-w-xl text-white/70">
          El enlace puede haber cambiado o la dirección no es correcta. Vuelve
          al inicio para continuar.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 w-fit items-center rounded-full bg-blue px-6 font-display text-sm font-semibold text-white"
        >
          Ir al inicio
        </Link>
      </Container>
    </div>
  );
}
