"use client";

import { useRef } from "react";

import { navigationItems } from "@/content/landing-page";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

import styles from "./Header.module.css";

export function MobileNavigation() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }

  return (
    <details ref={menuRef} className={styles.mobileMenu}>
      <summary aria-label="Menu de navegação">
        <span>Menu</span>
        <span className={styles.menuIcon} aria-hidden="true" />
      </summary>
      <div className={styles.mobilePanel}>
        <nav aria-label="Navegação móvel">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <WhatsAppLink>Conversar pelo WhatsApp</WhatsAppLink>
      </div>
    </details>
  );
}
