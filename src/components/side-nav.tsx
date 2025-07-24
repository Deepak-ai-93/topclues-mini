
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface NavItem {
  id: string;
  title: string;
}

interface SideNavProps {
  items: NavItem[];
}

export function SideNav({ items }: SideNavProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <TooltipProvider>
      <nav className="fixed top-1/2 -translate-y-1/2 left-2 sm:left-4 z-50">
        <ul className="flex flex-col items-center space-y-3 sm:space-y-4">
          {items.map((item) => (
            <li key={item.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      'w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-foreground/30 transition-all duration-300 hover:bg-primary hover:scale-125',
                      {
                        'bg-primary scale-125': activeSection === item.id,
                      }
                    )}
                    aria-label={`Scroll to ${item.title}`}
                  />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </nav>
    </TooltipProvider>
  );
}
