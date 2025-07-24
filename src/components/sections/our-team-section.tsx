
"use client";

import Image from 'next/image';
import { AnimatedText } from '@/components/animated-text';
import { Card, CardContent } from '@/components/ui/card';

export function OurTeamSection({ id }: { id: string }) {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Graphic Designer',
      image: 'https://placehold.co/400x400.png',
      hint: 'portrait professional'
    },
    {
      name: 'Samantha Bee',
      role: 'Content Writer',
      image: 'https://placehold.co/400x400.png',
      hint: 'writer portrait'
    },
    {
      name: 'Peter Jones',
      role: 'Web Developer',
      image: 'https://placehold.co/400x400.png',
      hint: 'developer portrait'
    },
    {
        name: 'Maria Garcia',
        role: 'Social Media Manager',
        image: 'https://placehold.co/400x400.png',
        hint: 'social media professional'
    }
  ];

  return (
    <section id={id} className="min-h-screen w-full flex flex-col items-center justify-center p-8 sm:p-16 lg:p-24 bg-background">
      <AnimatedText
        text="Our Team"
        el="h2"
        splitType="words"
        className="text-4xl md:text-6xl font-bold font-headline uppercase text-foreground mb-12 text-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden text-center">
            <CardContent className="p-4">
              <div className="mx-auto mb-4 overflow-hidden rounded-full w-32 h-32 sm:w-40 sm:h-40">
                <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    data-ai-hint={member.hint}
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-foreground/80">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
