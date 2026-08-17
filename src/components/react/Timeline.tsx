import React from 'react';
import { motion } from 'framer-motion';

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical' | 'responsive';
  children: React.ReactNode;
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ orientation = 'vertical', className = '', children, ...props }, ref) => {
    const isHorizontal = orientation === 'horizontal';
    const isResponsive = orientation === 'responsive';

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Timeline"
        className={`relative ${
          isHorizontal
            ? 'flex flex-row items-stretch'
            : isResponsive
            ? 'flex flex-col md:flex-row items-stretch'
            : 'flex flex-col'
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Timeline.displayName = 'Timeline';

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'completed' | 'active' | 'pending';
  isLast?: boolean;
  children: React.ReactNode;
}

export const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ status = 'pending', isLast = false, className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-status={status}
        className={`group relative flex flex-1 items-start gap-4 pb-8 last:pb-0 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TimelineItem.displayName = 'TimelineItem';

export interface TimelineConnectorProps {
  status?: 'completed' | 'active' | 'pending';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const TimelineConnector: React.FC<TimelineConnectorProps> = ({
  status = 'pending',
  orientation = 'vertical',
  className = '',
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${
        isHorizontal
          ? 'top-6 left-12 right-0 h-[2px]'
          : 'top-10 bottom-0 left-5 w-[2px] -translate-x-1/2'
      } ${
        status === 'completed'
          ? 'bg-accent'
          : status === 'active'
          ? 'bg-gradient-to-b from-accent to-border'
          : 'bg-border'
      } transition-colors duration-300 ${className}`}
    />
  );
};

export interface TimelineIconProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'completed' | 'active' | 'pending';
  children?: React.ReactNode;
}

export const TimelineIcon = React.forwardRef<HTMLDivElement, TimelineIconProps>(
  ({ status = 'pending', className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-semibold transition-all duration-200 ${
          status === 'active'
            ? 'border-accent bg-accent text-white shadow-md shadow-accent/30 ring-4 ring-accent/15'
            : status === 'completed'
            ? 'border-accent/40 bg-pastel-orange/50 text-accent'
            : 'border-border bg-white text-fg-muted'
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TimelineIcon.displayName = 'TimelineIcon';

export interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`flex-1 pt-1 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);
TimelineContent.displayName = 'TimelineContent';

export interface TimelineTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const TimelineTitle = React.forwardRef<HTMLHeadingElement, TimelineTitleProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={`text-sm font-semibold text-fg tracking-tight ${className}`}
        {...props}
      >
        {children}
      </h4>
    );
  }
);
TimelineTitle.displayName = 'TimelineTitle';

export interface TimelineDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  TimelineDescriptionProps
>(({ className = '', children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-xs text-fg-muted font-light leading-relaxed mt-1 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
});
TimelineDescription.displayName = 'TimelineDescription';
