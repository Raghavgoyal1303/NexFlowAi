import React from 'react';
import { cn } from '../../utils/cn';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export function SectionLabel({ children, className, dot }: SectionLabelProps) {
  return (
    <div className={cn("mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5", className)}>
      {dot && <span className="h-2 w-2 rounded-full bg-green animate-pulse" />}
      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/80">
        {children}
      </span>
    </div>
  );
}
