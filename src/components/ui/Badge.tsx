import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  color?: 'blue' | 'red' | 'green' | 'orange' | 'yellow' | 'purple' | 'pink';
  appearance?: 'filled' | 'light' | 'outline';
  size?: 'xs' | 'sm' | 'md';
};

export function Badge({ children, color = 'blue', appearance = 'light', size = 'md' }: BadgeProps) {
  return <span className={`badge badge--${size} badge--${color}-${appearance}`}>{children}</span>;
}
