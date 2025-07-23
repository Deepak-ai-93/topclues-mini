import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SocialMediaSection } from '@/components/sections/social-media-section';
import { VideoEditingSection } from '@/components/sections/video-editing-section';
import { GraphicDesignSection } from '@/components/sections/graphic-design-section';
import { OurWorkSection } from '@/components/sections/our-work-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <SocialMediaSection />
      <VideoEditingSection />
      <GraphicDesignSection />
      <OurWorkSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
