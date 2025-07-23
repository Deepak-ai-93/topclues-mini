
"use client";

import { AnimatedText } from '@/components/animated-text';

export function ServicesSection() {
  const services = [
    "STRATEGY & CONSULTING",
    "PERFORMANCE MARKETING",
    "CONTENT & CREATIVE",
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-8 bg-background">
      <div className="flex flex-col space-y-8 md:space-y-16">
        {services.map((service, index) => (
          <AnimatedText
            key={index}
            text={service}
            el="h2"
            splitType="chars"
            stagger={0.02}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-headline uppercase text-foreground text-center"
          />
        ))}
      </div>
    </section>
  );
}
