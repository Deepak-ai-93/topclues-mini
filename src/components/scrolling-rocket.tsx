
"use client";

import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ScrollingRocket() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bottomPosition = 5 + scrollProgress * 90;

  return (
    <div
      className={cn(
        'fixed right-4 z-50 transition-all duration-100 ease-linear flex flex-col items-center',
        'sm:right-6',
        'md:right-8'
      )}
      style={{ bottom: `${bottomPosition}%` }}
    >
      <Rocket className="h-8 w-8 -rotate-45 text-primary/70" />
      <span className="text-xs font-body text-primary/80 mt-1 text-center">
        skyrocket<br/>your reach
      </span>
    </div>
  );
}
