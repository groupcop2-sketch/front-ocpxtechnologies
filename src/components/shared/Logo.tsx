import Image from "next/image";
import Link from "next/link";
import { company } from "@/config/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "lockup" | "mark" | "horizontal";
  onDark?: boolean;
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "lockup",
  onDark = false,
  className,
  priority = false,
}: LogoProps) {
  if (variant === "horizontal") {
    return (
      <Link href="/" className={cn("inline-flex items-center", className)}>
        <Image
          src="/brand/ocpx-logo.webp"
          alt={company.name}
          width={240}
          height={80}
          priority={priority}
          className="h-10 w-auto md:h-12"
          sizes="240px"
        />
      </Link>
    );
  }

  if (variant === "mark") {
    return (
      <Link href="/" className={cn("inline-flex items-center", className)}>
        <Image
          src="/brand/ocpx-mark.webp"
          alt={company.name}
          width={40}
          height={40}
          priority={priority}
          className="h-10 w-10 rounded-lg"
          sizes="40px"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", className)}
    >
      <Image
        src="/brand/ocpx-mark.webp"
        alt=""
        width={40}
        height={40}
        priority={priority}
        className="h-10 w-10 rounded-lg"
        sizes="40px"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.95rem] font-bold tracking-[0.14em]",
            onDark ? "text-white" : "text-navy",
          )}
        >
          OCPX
        </span>
        <span
          className={cn(
            "mt-1 font-display text-[0.62rem] font-medium tracking-[0.28em] uppercase",
            onDark ? "text-white/70" : "text-neutral",
          )}
        >
          Technologies
        </span>
      </span>
      <span className="sr-only">{company.name}</span>
    </Link>
  );
}
