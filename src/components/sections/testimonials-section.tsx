
"use client";

import { AnimatedText } from '@/components/animated-text';
import { Card, CardContent } from '@/components/ui/card';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Jane Doe',
      company: 'Tech Innovators Inc.',
      quote:
        'Topclues transformed our digital presence. Their strategies are pure gold!',
    },
    {
      name: 'John Smith',
      company: 'Lifestyle Co.',
      quote:
        'The most focused and effective team we have ever worked with. Highly recommended.',
    },
    {
      name: 'Sam Wilson',
      company: 'E-Commerce World',
      quote:
        'Our sales doubled after implementing their content strategy. Incredible results.',
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-8 sm:p-16 lg:p-24 bg-secondary/30">
      <AnimatedText
        text="What Our Clients Say"
        el="h2"
        splitType="words"
        className="text-4xl md:text-6xl font-bold font-headline uppercase text-foreground mb-12 text-center"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <blockquote className="text-base md:text-lg font-body text-foreground/80 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-right font-bold text-foreground">
                - {testimonial.name}, {testimonial.company}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
