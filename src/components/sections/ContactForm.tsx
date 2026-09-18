"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { contactContent, cta } from "@/constants/content";
import { analyticsEvents } from "@/constants/analytics";
import { routes } from "@/config/site";
import { contactSchema, type ContactInput } from "@/lib/contact/schema";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import type { FormStatus } from "@/types";

type ApiResponse = {
  ok: boolean;
  code?: string;
  message?: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      privacy: false,
      website: "",
      startedAt: "",
    },
  });

  useEffect(() => {
    setValue("startedAt", String(Date.now()));
  }, [setValue, status]);

  async function onSubmit(values: ContactInput) {
    setStatus("loading");
    setServerMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as ApiResponse;

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setServerMessage(
          payload.code === "not_configured"
            ? contactContent.notConfigured
            : payload.message || contactContent.error,
        );
        return;
      }

      setStatus("success");
      setServerMessage(contactContent.success);
      trackEvent(analyticsEvents.contactFormSubmit, { status: "success" });
      reset({
        name: "",
        email: "",
        company: "",
        message: "",
        privacy: false,
        website: "",
      });
    } catch {
      setStatus("error");
      setServerMessage(contactContent.error);
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={contactContent.fields.name}
          required
          error={errors.name?.message}
        >
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(Boolean(errors.name))}
            {...register("name")}
          />
        </Field>
        <Field
          id="email"
          label={contactContent.fields.email}
          required
          error={errors.email?.message}
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass(Boolean(errors.email))}
            {...register("email")}
          />
        </Field>
      </div>
      <Field id="company" label={contactContent.fields.company}>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          className={fieldClass(false)}
          {...register("company")}
        />
      </Field>
      <Field
        id="message"
        label={contactContent.fields.message}
        required
        error={errors.message?.message}
      >
        <textarea
          id="message"
          rows={6}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClass(Boolean(errors.message), "min-h-36 resize-y")}
          {...register("message")}
        />
      </Field>
      <div className="absolute -left-[10000px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Sitio web</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm text-neutral">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-navy/20 text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            {...register("privacy")}
          />
          <span>
            {contactContent.privacyLabel}{" "}
            <a
              href={routes.privacy}
              className="font-medium text-blue underline-offset-2 hover:underline"
            >
              {contactContent.privacyLink}
            </a>
            .
          </span>
        </label>
        {errors.privacy?.message ? (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.privacy.message}
          </p>
        ) : null}
      </div>
      {serverMessage ? (
        <p
          className={cn(
            "rounded-xl px-4 py-3 text-sm",
            status === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-700",
          )}
          role="status"
          aria-live="polite"
        >
          {serverMessage}
        </p>
      ) : null}
      <Button type="submit" size="lg" disabled={isLoading} className="w-full sm:w-auto">
        {isLoading ? cta.sending : cta.submit}
      </Button>
    </form>
  );
}

function fieldClass(invalid: boolean, extra?: string) {
  return cn(
    "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors",
    "placeholder:text-neutral/70",
    invalid
      ? "border-red-400 focus:border-red-500"
      : "border-navy/15 focus:border-blue",
    extra,
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="font-display text-sm font-medium text-navy">
        {label}
        {required ? (
          <span className="text-blue" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      <div
        className="contents"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
      >
        {children}
      </div>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
