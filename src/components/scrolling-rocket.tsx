
"use client";

import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ScrollingRocket() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hookText, setHookText] = useState('skyrocket<br/>your reach');
  let scrollTimeout: NodeJS.Timeout;

  const hooks = [
    { progress: 0.8, html: 'to the<br/>moon!' },
    { progress: 0.6, html: 'drive<br/>results' },
    { progress: 0.4, html: 'boost your<br/>brand' },
    { progress: 0.2, html: 'engage your<br/>audience' },
    { progress: 0, html: 'skyrocket<br/>your reach' },
  ];

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

      const currentHook = hooks.find(h => progress >= h.progress);
      if (currentHook) {
        setHookText(currentHook.html);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [hooks]);

  const leftPosition = 5 + scrollProgress * 80;

  return (
    <div
      className={cn(
        'fixed top-4 z-[9999] transition-all duration-100 ease-linear flex items-center',
        'sm:top-6',
        'md:top-8'
      )}
      style={{ left: `${leftPosition}%` }}
    >
      <Rocket className="h-8 w-8 text-primary/70" />
      <div
        className={cn(
          'absolute right-full -z-10 mr-1 h-4 w-12 origin-right transition-all duration-300',
          isScrolling && scrollProgress > 0.01 ? 'opacity-100 animate-flicker' : 'opacity-0'
        )}
        style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
          background: 'linear-gradient(to right, #ff4500, #ff8c00, transparent)',
          transform: `scaleX(${Math.min(scrollProgress * 20, 1)})`,
        }}
      />
      <span 
        className="text-xs font-body text-primary/80 ml-2 text-center"
        dangerouslySetInnerHTML={{ __html: hookText }}
      />
    </div>
  );
}
