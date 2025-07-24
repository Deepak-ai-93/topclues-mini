import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SocialMediaSection } from '@/components/sections/social-media-section';
import { VideoEditingSection } from '@/components/sections/video-editing-section';
import { GraphicDesignSection } from '@/components/sections/graphic-design-section';
import { CeoTalkSection } from '@/components/sections/ceo-talk-section';
import { OurTeamSection } from '@/components/sections/our-team-section';
import { OurWorkSection } from '@/components/sections/our-work-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <SocialMediaSection id="social-media" />
      <VideoEditingSection id="video-editing" />
      <GraphicDesignSection id="graphic-design" />
      <CeoTalkSection id="ceo-talk" />
      <OurTeamSection id="our-team" />
      <OurWorkSection id="our-work" />
      <TestimonialsSection id="testimonials" />
      <ContactSection id="contact" />
    </main>
  );
}
