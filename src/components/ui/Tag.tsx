import type { ReactNode } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type TagProps = {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md';
};

export function Tag({ children, size = 'md' }: TagProps) {
  return <span className={cn(styles.tag, styles[`tag--${size}`])}>{children}</span>;
}
