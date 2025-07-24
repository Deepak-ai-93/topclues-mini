
"use client";

import { AnimatedText } from '@/components/animated-text';
import { Button } from '@/components/ui/button';

export function ContactSection({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-background">
      <div className="text-center">
        <AnimatedText
          text="Ready to make an impact?"
          el="h2"
          splitType="words"
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline uppercase text-foreground mb-8"
        />
        <div className="overflow-hidden pb-2">
            <a href="mailto:hello@topclues.com" className="block">
                <Button
                variant="link"
                className="text-2xl sm:text-3xl md:text-4xl font-body text-foreground/80 p-0 h-auto animate-float"
                >
                hello@topclues.com
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
}
