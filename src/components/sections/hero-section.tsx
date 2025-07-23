"use client";

import { AnimatedText } from '@/components/animated-text';

export function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 bg-background">
      <AnimatedText
        text="Simplicity is the ultimate sophistication."
        el="h1"
        splitType="words"
        className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-center text-foreground font-headline tracking-tighter"
      />
    </section>
  );
}
