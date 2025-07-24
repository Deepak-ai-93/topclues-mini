
"use client";

import Image from 'next/image';
import { AnimatedText } from '@/components/animated-text';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function OurWorkSection({ id }: { id: string }) {
  const projects = {
    'Web Development': [
      {
        title: 'Project Alpha',
        description: 'A cutting-edge marketing campaign for a tech startup.',
        image: 'https://images.unsplash.com/photo-1678690832311-bb6e361989ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzUzMjQ3MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'tech startup'
      },
      {
        title: 'Project Beta',
        description: 'Rebranding and digital presence for a lifestyle brand.',
        image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTMyNDcxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'lifestyle brand'
      },
      {
        title: 'Project Gamma',
        description: 'Content strategy for an e-commerce platform.',
        image: 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTMyNDcxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'ecommerce platform'
      },
    ],
    'Social Media Marketing': [
        {
          title: 'Social Campaign A',
          description: 'Driving engagement for a consumer brand.',
          image: 'https://placehold.co/600x400.png',
          hint: 'social media engagement'
        },
        {
          title: 'Social Campaign B',
          description: 'Influencer marketing for a fashion label.',
          image: 'https://placehold.co/600x400.png',
          hint: 'fashion influencer'
        },
    ],
    'Video Editing': [
        {
          title: 'Brand Story Video',
          description: 'Corporate video for a finance company.',
          image: 'https://placehold.co/600x400.png',
          hint: 'corporate video'
        },
        {
          title: 'Product Launch Video',
          description: 'Promotional video for a new gadget.',
          image: 'https://placehold.co/600x400.png',
          hint: 'product promo'
        },
    ]
  };

  const categories = Object.keys(projects);

  return (
    <section id={id} className="min-h-screen w-full flex flex-col items-center justify-center p-8 sm:p-16 lg:p-24 bg-secondary/30">
      <AnimatedText
        text="Our Work"
        el="h2"
        splitType="words"
        className="text-4xl md:text-6xl font-bold font-headline uppercase text-foreground mb-12 text-center"
      />
      <Tabs defaultValue={categories[0]} className="w-full max-w-6xl">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-auto">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} className="py-2">{cat}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((cat) => (
          <TabsContent key={cat} value={cat}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {(projects as any)[cat].map((project: any, index: number) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-[3/2]"
                      data-ai-hint={project.hint}
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-foreground/80">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
