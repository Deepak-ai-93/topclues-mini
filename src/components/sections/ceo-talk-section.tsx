
"use client";

import Image from 'next/image';
import { AnimatedText } from '@/components/animated-text';

export function CeoTalkSection({ id }: { id: string }) {
  return (
    <section id={id} className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center p-8 sm:p-16 lg:p-24 bg-secondary/30">
        <div className="lg:w-1/2 lg:pr-12 order-1 lg:order-2">
            <AnimatedText
            text="A Message from Our CEO"
            el="h2"
            splitType="words"
            className="text-4xl md:text-6xl font-bold font-headline uppercase text-foreground mb-8 text-center lg:text-left"
            />
            <AnimatedText
            text="In today's digital landscape, social media is not just a platform; it's the heartbeat of connection. We harness its power to build authentic relationships between your brand and your audience, creating conversations that matter and communities that last."
            el="p"
            splitType="words"
            stagger={0.01}
            className="text-lg md:text-xl lg:text-2xl font-body text-foreground/80 text-center lg:text-left"
            />
            <div className="mt-8 text-center lg:text-left">
                <p className="font-signature text-4xl md:text-5xl text-foreground">Bhavin Patel</p>
                <p className="font-body text-lg md:text-xl text-foreground/80">CEO, Topclues Solution</p>
            </div>
      </div>
      <div className="lg:w-1/2 lg:pl-12 mb-12 lg:mb-0 order-2 lg:order-1 flex items-center justify-center">
        <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-spin-slow"></div>
            <div className="absolute inset-0 rounded-full border-4 border-yellow-500 animate-spin-slow-reverse" style={{ animationDelay: '1s' }}></div>
            <Image
            src="https://topcluessolutions.in/wp-content/uploads/2025/02/CEO.jpg"
            alt="CEO"
            width={400}
            height={400}
            className="rounded-full shadow-2xl w-full h-full object-cover"
            data-ai-hint="CEO portrait"
            />
        </div>
      </div>
    </section>
  );
}
