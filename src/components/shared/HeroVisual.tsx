import Image from "next/image";
import { company } from "@/config/site";

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[34rem]"
      aria-hidden="true"
    >
      <div className="hero-glow" />
      <svg
        viewBox="0 0 640 640"
        className="absolute inset-0 h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id="ocpx-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18BDF7" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#0878F9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="ocpx-x" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18BDF7" />
            <stop offset="100%" stopColor="#0878F9" />
          </linearGradient>
        </defs>
        <rect
          x="48"
          y="48"
          width="544"
          height="544"
          rx="88"
          fill="none"
          stroke="url(#ocpx-ring)"
          strokeWidth="1.5"
          className="hero-orbit"
        />
        <rect
          x="96"
          y="96"
          width="448"
          height="448"
          rx="72"
          fill="none"
          stroke="rgba(24,189,247,0.18)"
          strokeWidth="1"
        />
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          <line x1="320" y1="70" x2="320" y2="150" />
          <line x1="320" y1="490" x2="320" y2="570" />
          <line x1="70" y1="320" x2="150" y2="320" />
          <line x1="490" y1="320" x2="570" y2="320" />
        </g>
        <polygon
          points="430,150 510,150 250,490 170,490"
          fill="url(#ocpx-x)"
          opacity="0.22"
          className="hero-x"
        />
        <polygon
          points="170,150 250,150 510,490 430,490"
          fill="rgba(255,255,255,0.12)"
          className="hero-x-delay"
        />
      </svg>
      <div className="absolute inset-[18%] flex items-center justify-center">
        <Image
          src="/brand/ocpx-mark.webp"
          alt=""
          width={420}
          height={420}
          priority
          sizes="(max-width: 768px) 70vw, 420px"
          className="h-full w-full rounded-[2rem] object-cover shadow-[0_20px_80px_rgb(8_120_249_/_0.25)]"
        />
      </div>
      <p className="sr-only">{company.name}</p>
    </div>
  );
}
