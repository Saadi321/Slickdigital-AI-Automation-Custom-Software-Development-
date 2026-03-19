import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { TrustedSection } from '@/components/sections/trusted-section';
import { ServicesSection } from '@/components/sections/services-section';
import { SolutionsSection } from '@/components/sections/solutions-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ProcessSection } from '@/components/sections/process-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';

interface HomeProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export function Home({ theme, onThemeToggle }: HomeProps) {
  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      <main>
        <HeroSection />
        <TrustedSection />
        <ServicesSection />
        <SolutionsSection />
        <FeaturesSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
