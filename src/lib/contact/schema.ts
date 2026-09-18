import { z } from "zod";
import { formMessages } from "@/constants/content";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, formMessages.nameRequired)
    .max(80, formMessages.nameMax),
  email: z.email(formMessages.emailInvalid),
  company: z.string().trim().max(120, formMessages.companyMax).optional(),
  message: z
    .string()
    .trim()
    .min(20, formMessages.messageMin)
    .max(2000, formMessages.messageMax),
  privacy: z.boolean().refine((value) => value === true, {
    message: formMessages.privacyRequired,
  }),
  website: z.string().optional(),
  startedAt: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const contactFormDefaults: ContactInput = {
  name: "",
  email: "",
  company: undefined,
  message: "",
  privacy: false,
  website: "",
  startedAt: "",
};
