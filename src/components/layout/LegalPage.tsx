import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/shared/Logo";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cloud">
      <Container className="py-28 md:py-32">
        <Logo variant="horizontal" className="mb-10" />
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-blue">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-neutral">Última actualización: {updated}</p>
        <article className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-navy/80 md:text-base">
          {children}
        </article>
        <p className="mt-12">
          <Link href="/" className="font-display text-sm font-semibold text-blue">
            Volver al inicio
          </Link>
        </p>
      </Container>
    </div>
  );
}
