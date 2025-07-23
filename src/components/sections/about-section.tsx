
"use client";

import { AnimatedText } from '@/components/animated-text';

export function AboutSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 sm:p-16 lg:p-24 bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedText
          text="Topclues Solution is a digital marketing agency that crafts focused, measurable, and magnetic strategies."
          el="h2"
          splitType="words"
          className="text-2xl md:text-3xl lg:text-4xl font-body text-foreground text-center mb-8"
        />
        <AnimatedText
          text="We believe in clarity over clutter, and results over rhetoric. Our passion is to elevate your brand's voice in a crowded digital world."
          el="p"
          splitType="words"
          stagger={0.01}
          className="text-lg md:text-xl lg:text-2xl font-body text-foreground/80 text-center"
        />
      </div>
    </section>
  );
}
