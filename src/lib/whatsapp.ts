type WhatsAppLinkInput = {
  readonly number: string | null;
  readonly message: string;
};

export function createWhatsAppUrl({
  number,
  message,
}: WhatsAppLinkInput): string | null {
  if (!number) {
    return null;
  }

  const normalizedNumber = number.replace(/\D/g, "");

  if (!normalizedNumber) {
    return null;
  }

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}
