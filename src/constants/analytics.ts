export const analyticsEvents = {
  ctaHeroContact: "cta_hero_contact",
  ctaHeroSolutions: "cta_hero_solutions",
  ctaNavContact: "cta_nav_contact",
  ctaServiceContact: "cta_service_contact",
  ctaProjectView: "cta_project_view",
  ctaProjectLive: "cta_project_live",
  ctaFinalContact: "cta_final_contact",
  contactFormSubmit: "contact_form_submit",
  whatsappClick: "whatsapp_click",
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];
