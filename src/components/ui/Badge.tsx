import type { ReactNode } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type BadgeProps = {
  children: ReactNode;
  color?: 'blue' | 'red' | 'green' | 'orange' | 'yellow' | 'purple' | 'pink';
  appearance?: 'filled' | 'light' | 'outline';
  size?: 'xs' | 'sm' | 'md';
};

export function Badge({ children, color = 'blue', appearance = 'light', size = 'md' }: BadgeProps) {
  return <span className={cn(styles.badge, styles[`badge--${size}`], styles[`badge--${color}-${appearance}`])}>{children}</span>;
}
