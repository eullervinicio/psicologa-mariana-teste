import { navigationItems } from "@/content/landing-page";
import { siteConfig } from "@/content/site-config";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

import { Container } from "./Container";
import styles from "./Header.module.css";

export function Header() {
  const navigation = (
    <ul>
      {navigationItems.map((item) => (
        <li key={item.href}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a className={styles.identity} href="#inicio" aria-label="Voltar ao início">
          <span>{siteConfig.name}</span>
          <small>{siteConfig.profession}</small>
        </a>

        <nav className={styles.navigation} aria-label="Navegação principal">
          {navigation}
        </nav>

        <div className={styles.action}>
          <WhatsAppLink variant="secondary">
            Conversar pelo WhatsApp
          </WhatsAppLink>
        </div>

        <details className={styles.mobileMenu}>
          <summary aria-label="Menu de navegação">
            <span>Menu</span>
            <span className={styles.menuIcon} aria-hidden="true" />
          </summary>
          <div className={styles.mobilePanel}>
            <nav aria-label="Navegação móvel">{navigation}</nav>
            <WhatsAppLink>Conversar pelo WhatsApp</WhatsAppLink>
          </div>
        </details>
      </Container>
    </header>
  );
}
