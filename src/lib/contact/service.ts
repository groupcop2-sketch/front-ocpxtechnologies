import { getSiteUrl } from "@/config/env";
import { company } from "@/config/site";
import { contactSchema, type ContactInput } from "@/lib/contact/schema";

export type ContactServiceResult =
  | { ok: true }
  | {
      ok: false;
      code: "validation" | "spam" | "rate_limit" | "not_configured" | "provider";
      message: string;
    };

const MIN_ELAPSED_MS = 1600;
const MAX_ELAPSED_MS = 1000 * 60 * 60 * 12;

function hasHoneypot(input: ContactInput): boolean {
  return Boolean(input.website && input.website.trim().length > 0);
}

function isTimingAnomalous(startedAt: string | undefined): boolean {
  if (!startedAt) {
    return true;
  }

  const started = Number(startedAt);
  if (!Number.isFinite(started)) {
    return true;
  }

  const elapsed = Date.now() - started;
  return elapsed < MIN_ELAPSED_MS || elapsed > MAX_ELAPSED_MS;
}

function isSameOrigin(request: Request): boolean {
  const site = getSiteUrl();
  const origin = request.headers.get("origin");

  if (origin) {
    return origin.replace(/\/$/, "") === site;
  }

  const referer = request.headers.get("referer");
  return Boolean(referer?.startsWith(site));
}

async function deliverViaResend(input: ContactInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: input.email,
      subject: `[OCPX] Nuevo mensaje de ${input.name}`,
      text: [
        `Nombre: ${input.name}`,
        `Correo: ${input.email}`,
        `Empresa: ${input.company ?? "—"}`,
        "",
        input.message,
      ].join("\n"),
    }),
  });

  return response.ok;
}

async function deliverViaWebhook(input: ContactInput): Promise<boolean> {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return false;
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: company.name,
      submittedAt: new Date().toISOString(),
      name: input.name,
      email: input.email,
      company: input.company ?? null,
      message: input.message,
    }),
  });

  return response.ok;
}

function hasDeliveryChannel(): boolean {
  const resendReady = Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_EMAIL &&
      process.env.CONTACT_FROM_EMAIL,
  );
  const webhookReady = Boolean(process.env.CONTACT_WEBHOOK_URL);
  return resendReady || webhookReady;
}

export async function submitContact(
  raw: unknown,
  request: Request,
): Promise<ContactServiceResult> {
  if (!isSameOrigin(request)) {
    return {
      ok: false,
      code: "spam",
      message: "Origen no permitido.",
    };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      code: "validation",
      message: parsed.error.issues[0]?.message ?? "Revisa los campos del formulario.",
    };
  }

  const input = parsed.data;
  const payload: ContactInput = {
    ...input,
    company: input.company?.trim() ? input.company.trim() : undefined,
  };

  if (hasHoneypot(payload) || isTimingAnomalous(payload.startedAt)) {
    return {
      ok: false,
      code: "spam",
      message: "No pudimos enviar el mensaje.",
    };
  }

  if (!hasDeliveryChannel()) {
    return {
      ok: false,
      code: "not_configured",
      message: "El canal de envío todavía no está activo.",
    };
  }

  const resendOk = await deliverViaResend(payload);
  if (resendOk) {
    return { ok: true };
  }

  const webhookOk = await deliverViaWebhook(payload);
  if (webhookOk) {
    return { ok: true };
  }

  return {
    ok: false,
    code: "provider",
    message: "No pudimos enviar el mensaje. Inténtalo de nuevo en unos minutos.",
  };
}
