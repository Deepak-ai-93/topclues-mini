
"use client";

import { AnimatedText } from '@/components/animated-text';

export function HeroSection({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen w-full flex items-center justify-center p-4 bg-background">
      <AnimatedText
        text="The next level of creativity is simplicity"
        el="h1"
        splitType="words"
        className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase text-center text-foreground font-headline tracking-tighter"
      />
    </section>
  );
}
