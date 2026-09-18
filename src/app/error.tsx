"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // El detalle técnico no se muestra al usuario.
  }, []);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-5 py-24">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-blue">
        Error
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
        Algo no salió como esperábamos
      </h1>
      <p className="mt-4 max-w-xl text-neutral">
        Ha ocurrido un problema al cargar esta página. Puedes intentarlo de
        nuevo o volver más tarde.
      </p>
      <div className="mt-8">
        <Button type="button" onClick={reset}>
          Reintentar
        </Button>
      </div>
    </div>
  );
}
