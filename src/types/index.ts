export type FormStatus = "idle" | "loading" | "success" | "error";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  privacy: boolean;
};
