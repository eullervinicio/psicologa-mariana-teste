import Image, { getImageProps } from "next/image";

import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import aboutImage from "@/assets/images/mariana-sobre.webp";
import {
  aboutContent,
  approachContent,
  contactContent,
  faqContent,
  heroContent,
  needsContent,
  processContent,
} from "@/content/landing-page";
import { siteConfig } from "@/content/site-config";

import styles from "./LandingSections.module.css";

const {
  props: { srcSet: mobileHeroSrcSet },
} = getImageProps({
  src: "/images/mariana-hero-mobile.jpg",
  alt: "",
  width: 941,
  height: 1672,
  sizes: "100vw",
  quality: 75,
});

const { props: desktopHeroImageProps } = getImageProps({
  src: "/images/mariana-hero-original.jpg",
  alt: "",
  width: 1672,
  height: 941,
  sizes: "100vw",
  quality: 100,
  fetchPriority: "high",
});

function Arrow() {
  return (
    <svg aria-hidden="true" className={styles.arrow} viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <picture className={styles.heroPicture}>
        <source media="(max-width: 600px)" srcSet={mobileHeroSrcSet} />
        <img {...desktopHeroImageProps} alt="" className={styles.heroImage} />
      </picture>
      <Container className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <SectionHeading
            eyebrow={heroContent.eyebrow}
            title={heroContent.title}
            description={heroContent.description}
            level={1}
            id="hero-title"
          />

          <div className={styles.heroAction}>
            <WhatsAppLink>
              {heroContent.cta}
              <Arrow />
            </WhatsAppLink>
            <p>{heroContent.ctaNote}</p>
          </div>

          <ul className={styles.heroFacts} aria-label="Informações do atendimento">
            <li>Online e presencial</li>
            <li>
              {siteConfig.city} — {siteConfig.state}
            </li>
          </ul>
          <div className={styles.heroIdentity}>
            <strong>{siteConfig.name}</strong>
            <p>
              {siteConfig.profession} · {siteConfig.registration}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function NeedsSection() {
  return (
    <section className={styles.section} aria-labelledby="needs-title">
      <Container>
        <div className={styles.needsIntro}>
          <SectionHeading
            eyebrow={needsContent.eyebrow}
            title={needsContent.title}
            description={needsContent.description}
            id="needs-title"
          />
        </div>

        <ol className={styles.needsList}>
          {needsContent.items.map((item, index) => (
            <li key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className={styles.about} aria-labelledby="about-title">
      <Container className={styles.aboutGrid}>
        <figure className={styles.aboutPortrait}>
          <Image
            className={styles.aboutImage}
            src={aboutImage}
            alt="Mariana Alves em seu ambiente profissional."
            fill
            sizes="(max-width: 375px) calc(100vw - 32px), (max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 42vw, 458px"
            loading="lazy"
            placeholder="blur"
          />
        </figure>

        <div className={styles.aboutContent}>
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            id="about-title"
          />
          <div className={styles.bodyCopy}>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.signature}>
            <strong>{siteConfig.name}</strong>
            <span>
              {siteConfig.profession} · {siteConfig.registration}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ApproachSection() {
  return (
    <section id="abordagem" className={styles.section} aria-labelledby="approach-title">
      <Container>
        <div className={styles.approachIntro}>
          <SectionHeading
            eyebrow={approachContent.eyebrow}
            title={approachContent.title}
            id="approach-title"
          />
          <div className={styles.bodyCopy}>
            {approachContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ol className={styles.principles}>
          {approachContent.principles.map((principle, index) => (
            <li key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="atendimento" className={styles.process} aria-labelledby="process-title">
      <Container>
        <div className={styles.processIntro}>
          <SectionHeading
            eyebrow={processContent.eyebrow}
            title={processContent.title}
            description={processContent.description}
            id="process-title"
          />
          <WhatsAppLink variant="secondary">
            Solicitar agendamento
            <Arrow />
          </WhatsAppLink>
        </div>

        <ol className={styles.steps}>
          {processContent.steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.modalities}>
          {processContent.modalities.map((modality) => (
            <article key={modality.title}>
              <div className={styles.modalityIcon} aria-hidden="true">
                <span />
              </div>
              <h3>{modality.title}</h3>
              <p>{modality.description}</p>
            </article>
          ))}
        </div>
        <p className={styles.processNote}>{processContent.note}</p>
      </Container>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="duvidas" className={styles.faq} aria-labelledby="faq-title">
      <Container className={styles.faqGrid}>
        <div className={styles.faqIntro}>
          <SectionHeading
            eyebrow={faqContent.eyebrow}
            title={faqContent.title}
            description={faqContent.description}
            id="faq-title"
          />
          <WhatsAppLink variant="text">Tirar uma dúvida</WhatsAppLink>
        </div>

        <div className={styles.faqList}>
          {faqContent.items.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className={styles.faqMarker} aria-hidden="true" />
              </summary>
              <div className={styles.faqAnswer}>
                {item.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className={styles.contact} aria-labelledby="contact-title">
      <Container>
        <div className={styles.contactGrid}>
          <div>
            <p className={styles.contactEyebrow}>{contactContent.eyebrow}</p>
            <h2 id="contact-title">{contactContent.title}</h2>
          </div>
          <div className={styles.contactContent}>
            {contactContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className={styles.contactFacts}>
              Atendimento online e presencial · {siteConfig.city} — {siteConfig.state}
            </p>
            <WhatsAppLink>
              {contactContent.cta}
              <Arrow />
            </WhatsAppLink>
            <small>{contactContent.disclaimer}</small>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
