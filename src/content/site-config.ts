export const siteConfig = {
  name: "Dra. Mariana Alves",
  profession: "Psicóloga",
  registration: "CRP 00/000000",
  city: "São Paulo",
  state: "SP",
  audience: "Adultos",
  modalities: ["Online", "Presencial"] as const,
  approach: "Terapia Cognitivo-Comportamental",
  siteUrl: null as string | null,
  whatsappNumber: "5511999999999" as string | null,
  whatsappMessage:
    "Olá, Dra. Mariana. Encontrei seu site e gostaria de saber mais sobre o atendimento psicológico.",
  isProductionReady: false,
} as const;

export type SiteConfig = typeof siteConfig;
