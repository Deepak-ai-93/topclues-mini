
"use client";

import Image from 'next/image';
import { AnimatedText } from '@/components/animated-text';

export function SocialMediaSection({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center p-8 sm:p-16 lg:p-24 bg-secondary/30">
      <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
        <AnimatedText
          text="Social Media Marketing"
          el="h2"
          splitType="words"
          className="text-4xl md:text-6xl font-bold font-headline uppercase text-foreground mb-8 text-center lg:text-left"
        />
        <AnimatedText
          text="We amplify your message and engage your audience through strategic social media campaigns. Let's build a community around your brand and drive meaningful results."
          el="p"
          splitType="words"
          stagger={0.01}
          className="text-lg md:text-xl lg:text-2xl font-body text-foreground/80 text-center lg:text-left"
        />
      </div>
      <div className="lg:w-1/2">
        <Image
          src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwwfHx8fDE3NTMzMzgyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Social Media Marketing"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl w-full h-auto object-cover"
          data-ai-hint="social media"
        />
      </div>
    </section>
  );
}
