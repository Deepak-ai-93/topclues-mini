
"use client";

import Image from 'next/image';
import { AnimatedText } from '@/components/animated-text';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export function OurTeamSection({ id }: { id: string }) {
  const team = {
    'Web Developers': [
      { name: 'Deepak Bagada', role: 'Lead Web Developer', image: 'http://topcluessolutions.in/wp-content/uploads/2025/02/Deepak-bagada-web-designer.webp', hint: 'developer portrait' },
      { name: 'Emma Wilson', role: 'Frontend Developer', image: 'https://placehold.co/400x400.png', hint: 'frontend professional' },
      { name: 'James Taylor', role: 'Backend Developer', image: 'https://placehold.co/400x400.png', hint: 'backend engineer' },
      { name: 'Charlotte Moore', role: 'Full-Stack Developer', image: 'https://placehold.co/400x400.png', hint: 'full-stack programmer' },
      { name: 'William Anderson', role: 'DevOps Engineer', image: 'https://placehold.co/400x400.png', hint: 'devops professional' },
    ],
    'Graphic Designers': [
      { name: 'Alex Johnson', role: 'Lead Graphic Designer', image: 'https://placehold.co/400x400.png', hint: 'portrait professional' },
      { name: 'Olivia Martinez', role: 'Senior Graphic Designer', image: 'https://placehold.co/400x400.png', hint: 'designer portrait' },
      { name: 'Ethan Williams', role: 'UI/UX Designer', image: 'https://placehold.co/400x400.png', hint: 'UI designer' },
      { name: 'Isabella Brown', role: 'Junior Graphic Designer', image: 'https://placehold.co/400x400.png', hint: 'graphic artist' },
      { name: 'Mason Jones', role: 'Brand Identity Specialist', image: 'https://placehold.co/400x400.png', hint: 'branding expert' },
    ],
    'Content Writers': [
      { name: 'Samantha Bee', role: 'Lead Content Strategist', image: 'https://placehold.co/400x400.png', hint: 'writer portrait' },
      { name: 'Noah Garcia', role: 'Copywriter', image: 'https://placehold.co/400x400.png', hint: 'professional writer' },
      { name: 'Sophia Miller', role: 'SEO Content Writer', image: 'https://placehold.co/400x400.png', hint: 'seo specialist' },
      { name: 'Liam Davis', role: 'Technical Writer', image: 'https://placehold.co/400x400.png', hint: 'technical expert' },
      { name: 'Ava Rodriguez', role: 'Blog & Article Writer', image: 'https://placehold.co/400x400.png', hint: 'blogger portrait' },
    ],
    'Social Media Managers': [
      { name: 'Maria Garcia', role: 'Lead Social Media Manager', image: 'https://placehold.co/400x400.png', hint: 'social media professional' },
      { name: 'Benjamin Thomas', role: 'Community Manager', image: 'https://placehold.co/400x400.png', hint: 'community leader' },
      { name: 'Mia White', role: 'Social Media Analyst', image: 'https://placehold.co/400x400.png', hint: 'data analyst' },
      { name: 'Elijah Harris', role: 'Campaign Manager', image: 'https://placehold.co/400x400.png', hint: 'campaign strategist' },
      { name: 'Harper Clark', role: 'Content Curator', image: 'https://placehold.co/400x400.png', hint: 'content specialist' },
    ]
  };

  const departments = Object.keys(team);

  return (
    <section id={id} className="min-h-screen w-full flex flex-col items-center justify-center p-8 sm:p-16 lg:p-24 bg-background">
      <AnimatedText
        text="Our Team"
        el="h2"
        splitType="words"
        className="text-4xl md:text-6xl font-bold font-headline uppercase text-foreground mb-12 text-center"
      />
      <Tabs defaultValue={departments[0]} className="w-full max-w-6xl">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-auto">
          {departments.map((dept) => (
            <TabsTrigger key={dept} value={dept} className="py-2">{dept}</TabsTrigger>
          ))}
        </TabsList>
        {departments.map((dept) => (
          <TabsContent key={dept} value={dept}>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex w-max space-x-4 p-4">
                {(team as any)[dept].map((member: any, index: number) => (
                  <Card key={index} className="overflow-hidden text-center w-64 flex-shrink-0">
                    <CardContent className="p-4">
                      <div className="mx-auto mb-4 overflow-hidden rounded-full w-32 h-32">
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
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
