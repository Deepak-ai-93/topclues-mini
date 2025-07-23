"use client";

import { useLayoutEffect, useRef, type FC, type HTMLAttributes } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps extends HTMLAttributes<HTMLElement> {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  splitType?: 'lines' | 'words' | 'chars';
  stagger?: number;
}

export const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = 'p',
  className,
  splitType = 'chars',
  stagger = 0.03,
  ...props
}) => {
  const textRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;
    
    const split = new SplitType(textEl, { types: 'lines, words, chars' });
    
    let targets: HTMLElement[] = [];
    if (splitType === 'lines') targets = split.lines || [];
    else if (splitType === 'words') targets = split.words || [];
    else targets = split.chars || [];

    if (!targets.length) return;

    gsap.set(textEl.querySelectorAll('.line'), { overflow: 'hidden' });

    const ctx = gsap.context(() => {
        gsap.from(targets, {
            scrollTrigger: {
                trigger: textEl,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: 1,
            },
            yPercent: 110,
            ease: 'power3.out',
            stagger,
        });
    }, textEl);
    
    return () => {
      split.revert();
      ctx.revert();
    };
  }, [splitType, stagger, text]);

  return (
    <Wrapper ref={textRef as any} className={className} {...props}>
      {text}
    </Wrapper>
  );
};
