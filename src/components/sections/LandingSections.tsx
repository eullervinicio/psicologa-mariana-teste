import Image, { getImageProps } from "next/image";
import {
  Brain,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  Compass,
  HeartHandshake,
  Heart,
  Leaf,
  MessageCircle,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  UserRound,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import aboutImage from "@/assets/images/mariana-sobre.webp";
import aboutPlantImage from "@/assets/images/planta-decorativa.png";
import signatureImage from "@/assets/images/assinatura-mariana-alves.png";
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

const needsIcons = [Brain, Compass, HeartHandshake, RefreshCw, Sparkles, ClipboardCheck] as const;
const approachIcons = [Search, Leaf, Settings, ChartNoAxesColumnIncreasing] as const;
const processIcons = [MessageCircle, CalendarDays, UserRound, Heart] as const;

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
    <section className={styles.needs} aria-labelledby="needs-title">
      <Container className={styles.needsLayout}>
        <div className={styles.needsIntro}>
          <SectionHeading
            eyebrow={needsContent.eyebrow}
            title={needsContent.title}
            description={needsContent.description}
            id="needs-title"
          />
        </div>

        <ul className={styles.needsTopics}>
          {needsContent.items.map((item, index) => {
            const Icon = needsIcons[index];

            return (
              <li key={item.title}>
                <Icon aria-hidden="true" className={styles.needsIcon} strokeWidth={1.5} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className={styles.about} aria-labelledby="about-title">
      <Image
        className={styles.aboutPlant}
        src={aboutPlantImage}
        alt=""
        sizes="(max-width: 767px) 13rem, (max-width: 1279px) 16rem, 22rem"
        loading="lazy"
      />
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
            <Image
              className={styles.signatureImage}
              src={signatureImage}
              alt=""
              sizes="(max-width: 767px) 17rem, 21rem"
              loading="lazy"
            />
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
      <Container className={styles.approachLayout}>
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
          {approachContent.principles.map((principle, index) => {
            const Icon = approachIcons[index];

            return (
              <li key={principle.title}>
                <div className={styles.principleIcon} aria-hidden="true">
                  <Icon strokeWidth={1.5} />
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="atendimento" className={styles.process} aria-labelledby="process-title">
      <div className={styles.processFlow}>
        <Container className={styles.processLayout}>
          <div className={styles.processIntro}>
            <SectionHeading
              eyebrow={processContent.eyebrow}
              title={processContent.title}
              description={processContent.description}
              id="process-title"
            />
            <WhatsAppLink>
              {processContent.cta}
              <Arrow />
            </WhatsAppLink>
          </div>

          <ol className={styles.steps}>
            {processContent.steps.map((step, index) => {
              const Icon = processIcons[index];

              return (
                <li key={step.number}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div className={styles.stepIcon} aria-hidden="true">
                    <Icon strokeWidth={1.6} />
                  </div>
                  <div className={styles.stepContent}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </div>

      <div className={styles.modalitiesSection}>
        <Container className={styles.processWideContainer}>
          <div className={styles.modalitiesHeader}>
            <div>
              <p className={styles.modalitiesEyebrow}>{processContent.modalitiesEyebrow}</p>
              <h2>{processContent.modalitiesTitle}</h2>
            </div>
            <p>{processContent.modalitiesDescription}</p>
          </div>

          <div className={styles.modalities}>
            {processContent.modalities.map((modality) => (
              <article key={modality.title}>
                <div className={styles.modalityImage}>
                  <Image
                    src={modality.image}
                    alt={modality.imageAlt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc(100vw - 64px), 22vw"
                  />
                </div>
                <div className={styles.modalityContent}>
                  <div>
                    <h3>{modality.title}</h3>
                    <p>{modality.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </div>

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
          {faqContent.items.map((item) => (
            <details key={item.question} name="faq">
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
