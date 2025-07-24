
"use client";

import Image from 'next/image';
import { AnimatedText } from '@/components/animated-text';

export function VideoEditingSection({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center p-8 sm:p-16 lg:p-24 bg-background">
      <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
        <AnimatedText
          text="Video Editing"
          el="h2"
          splitType="words"
          className="text-4xl md:text-6xl font-bold font-headline uppercase text-foreground mb-8 text-center lg:text-left"
        />
        <AnimatedText
          text="From raw footage to a polished final product, we craft videos that captivate and convert. We bring your vision to life with seamless editing and creative storytelling."
          el="p"
          splitType="words"
          stagger={0.01}
          className="text-lg md:text-xl lg:text-2xl font-body text-foreground/80 text-center lg:text-left"
        />
      </div>
      <div className="lg:w-1/2">
        <Image
          src="https://placehold.co/600x400.png"
          alt="Video Editing"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl w-full h-auto object-cover"
          data-ai-hint="video editing"
        />
      </div>
    </section>
  );
}
