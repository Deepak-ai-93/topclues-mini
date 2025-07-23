import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';
import { OurWorkSection } from '@/components/sections/our-work-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OurWorkSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
