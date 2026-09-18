"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { CtaLink } from "@/components/shared/CtaLink";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { primaryNav } from "@/constants/navigation";
import { analyticsEvents } from "@/constants/analytics";
import { cta } from "@/constants/content";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open || pathname !== "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        solid
          ? "border-b border-white/10 bg-navy/90 shadow-[0_8px_30px_rgb(7_21_47_/_0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo variant="lockup" onDark priority />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-display text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-cyan transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CtaLink
            href="/#contacto"
            size="md"
            eventName={analyticsEvents.ctaNavContact}
            eventMeta={{ location: "navbar" }}
          >
            {cta.primary}
          </CtaLink>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <div id="menu-movil">
        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
