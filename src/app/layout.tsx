import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { SideNav } from '@/components/side-nav';
import { ScrollingRocket } from '@/components/scrolling-rocket';

export const metadata: Metadata = {
  title: 'Topclues Scroll',
  description: 'An ultra-minimal one-page website for Topclues Solution',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { id: 'hero', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'social-media', title: 'Social Media' },
    { id: 'video-editing', title: 'Video Editing' },
    { id: 'graphic-design', title: 'Graphic Design' },
    { id: 'ceo-talk', title: 'From the CEO' },
    { id: 'our-team', title: 'Our Team' },
    { id: 'our-work', title: 'Our Work' },
    { id: 'testimonials', title: 'Testimonials' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SideNav items={navItems} />
        <ScrollingRocket />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
