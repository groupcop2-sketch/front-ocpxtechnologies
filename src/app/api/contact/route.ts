import { NextResponse } from "next/server";
import { submitContact } from "@/lib/contact/service";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);
  const limited = rateLimit(`contact:${ip}`);

  if (!limited.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "rate_limit",
        message: "Demasiados intentos. Espera unos minutos e inténtalo de nuevo.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, code: "validation", message: "Solicitud inválida." },
      { status: 400 },
    );
  }

  const result = await submitContact(body, request);

  const status = result.ok
    ? 200
    : result.code === "validation" || result.code === "spam"
      ? 400
      : result.code === "not_configured"
        ? 503
        : 502;

  return NextResponse.json(result, { status });
}
