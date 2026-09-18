"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es-CO">
      <body className="bg-[#07152F] text-white">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-5">
          <h1 className="text-3xl font-semibold">No pudimos cargar el sitio</h1>
          <p className="mt-4 text-white/70">
            Inténtalo de nuevo. Si el problema continúa, vuelve más tarde.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex min-h-12 w-fit items-center rounded-full bg-[#0878F9] px-6 text-sm font-semibold"
            onClick={reset}
          >
            Reintentar
          </button>
        </main>
      </body>
    </html>
  );
}
