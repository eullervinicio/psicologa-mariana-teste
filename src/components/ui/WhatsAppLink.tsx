import { Children, type ComponentProps } from "react";

import { siteConfig } from "@/content/site-config";
import { createWhatsAppUrl } from "@/lib/whatsapp";

import { ButtonLink } from "./ButtonLink";

type WhatsAppLinkProps = Omit<ComponentProps<typeof ButtonLink>, "href">;

export function WhatsAppLink({ children, ...props }: WhatsAppLinkProps) {
  const visibleLabel = Children.toArray(children)
    .filter((child): child is string | number => ["string", "number"].includes(typeof child))
    .join(" ")
    .trim();
  const accessibleLabel = visibleLabel || "Conversar pelo WhatsApp";
  const href = createWhatsAppUrl({
    number: siteConfig.whatsappNumber,
    message: siteConfig.whatsappMessage,
  });

  if (!href) {
    return (
      <ButtonLink
        disabled
        aria-label={`${accessibleLabel} — número ainda não configurado`}
        title="Número de WhatsApp ainda não configurado"
        {...props}
      >
        {children}
      </ButtonLink>
    );
  }

  return (
    <ButtonLink
      {...props}
      href={href}
      aria-label={`${accessibleLabel} — abrir conversa no WhatsApp em uma nova aba`}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </ButtonLink>
  );
}
