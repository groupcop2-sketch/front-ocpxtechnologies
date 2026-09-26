import Image from "next/image";
import type { TeamMember } from "@/constants/team";
import { cn } from "@/lib/cn";

export function TeamPortrait({ member }: { member: TeamMember }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt={`Retrato de ${member.name}`}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 360px"
      />
    );
  }

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-navy"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-50" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue/25 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-cyan/20 blur-2xl" />
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full opacity-30"
      >
        <defs>
          <linearGradient id={`team-x-${member.slug}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#18BDF7" />
            <stop offset="100%" stopColor="#0878F9" />
          </linearGradient>
        </defs>
        <polygon points="132,28 168,28 68,172 32,172" fill={`url(#team-x-${member.slug})`} />
        <polygon points="32,28 68,28 168,172 132,172" fill="white" opacity="0.25" />
      </svg>
      <span
        className={cn(
          "relative z-10 font-display text-6xl font-semibold tracking-tight text-white md:text-7xl",
        )}
      >
        {member.initials}
      </span>
    </div>
  );
}
