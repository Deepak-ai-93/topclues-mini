
"use client";

import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ScrollingRocket() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
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
      <div
        className={cn(
          'absolute top-full -z-10 mt-1 h-12 w-4 origin-top transition-all duration-300',
          isScrolling && scrollProgress > 0.01 ? 'opacity-100 animate-flicker' : 'opacity-0'
        )}
        style={{
          clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
          background: 'linear-gradient(to top, #ff4500, #ff8c00, transparent)',
          transform: `scaleY(${Math.min(scrollProgress * 20, 1)})`,
        }}
      />
      <span className="text-xs font-body text-primary/80 mt-1 text-center">
        skyrocket<br/>your reach
      </span>
    </div>
  );
}
