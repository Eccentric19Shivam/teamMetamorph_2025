import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'rotate';
  delay?: number;
}

export function AnimateOnScroll({ children, animation, delay = 0 }: AnimateOnScrollProps) {
  const [ref, isInView] = useInView();

  const baseClasses = 'transition-all duration-1000 opacity-0';
  const animationClasses = {
    'fade-up': 'translate-y-10',
    'fade-down': '-translate-y-10',
    'fade-left': '-translate-x-10',
    'fade-right': 'translate-x-10',
    'zoom-in': 'scale-95',
    'rotate': 'rotate-180'
  };

  const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        ${baseClasses}
        ${animationClasses[animation]}
        ${isInView ? visibleClasses : ''}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}