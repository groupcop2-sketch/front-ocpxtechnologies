import type { AnalyticsEvent } from "@/constants/analytics";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

function canTrack(): boolean {
  return typeof window !== "undefined";
}

export function trackEvent(
  event: AnalyticsEvent,
  payload?: AnalyticsPayload,
): void {
  if (!canTrack()) {
    return;
  }

  const detail = { event, ...payload };

  window.dispatchEvent(new CustomEvent("ocpx:analytics", { detail }));

  const vercelTrack = window.va;
  if (typeof vercelTrack === "function") {
    vercelTrack("event", event, payload);
  }

  const gtag = window.gtag;
  if (typeof gtag === "function") {
    gtag("event", event, payload);
  }
}

declare global {
  interface Window {
    va?: (
      command: "event",
      eventName: string,
      payload?: AnalyticsPayload,
    ) => void;
    gtag?: (
      command: "event",
      eventName: string,
      payload?: AnalyticsPayload,
    ) => void;
  }
}
