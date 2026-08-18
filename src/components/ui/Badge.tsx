import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
};

export function Badge({ children, tone = 'neutral', size = 'md' }: BadgeProps) {
  return <span className={`badge badge--${tone} badge--${size}`}>{children}</span>;
}
