import { siteConfig } from "@/content/site-config";
import { navigationItems } from "@/content/landing-page";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

import { Container } from "./Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.identity}>
          <p className={styles.name}>{siteConfig.name}</p>
          <p>
            {siteConfig.profession} · {siteConfig.registration}
          </p>
          <p>Atendimento online e presencial · {siteConfig.city} — {siteConfig.state}</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className={styles.contact}>
          <WhatsAppLink variant="text">Conversar pelo WhatsApp</WhatsAppLink>
          <p>Conteúdo de caráter informativo. Este site não substitui atendimento psicológico, avaliação profissional ou serviços de urgência.</p>
        </div>
      </Container>
    </footer>
  );
}
