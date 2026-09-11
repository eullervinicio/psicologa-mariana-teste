import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  AboutSection,
  ApproachSection,
  ContactSection,
  FaqSection,
  HeroSection,
  NeedsSection,
  ProcessSection,
} from "@/components/sections/LandingSections";
import { siteConfig } from "@/content/site-config";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: siteConfig.name,
    description: `Psicóloga com atendimento de adultos pela abordagem ${siteConfig.approach}.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "BR",
    },
    areaServed: `${siteConfig.city} - ${siteConfig.state}`,
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <NeedsSection />
        <AboutSection />
        <ApproachSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
