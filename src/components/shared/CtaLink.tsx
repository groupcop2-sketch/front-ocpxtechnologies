"use client";

import Link from "next/link";
import { buttonClassName, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import type { AnalyticsEvent } from "@/constants/analytics";
import { trackEvent } from "@/lib/analytics";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  eventName?: AnalyticsEvent;
  eventMeta?: Record<string, string>;
  onClick?: () => void;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  eventName,
  eventMeta,
  onClick,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={buttonClassName(variant, size, className)}
      data-analytics-event={eventName}
      onClick={() => {
        if (eventName) {
          trackEvent(eventName, eventMeta);
        }
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
