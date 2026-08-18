import type { ReactNode } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type TooltipProps = {
  content: string;
  children?: ReactNode;
  tone?: 'inverse' | 'brand' | 'swap';
  appearance?: 'filled' | 'light';
};

export function Tooltip({ content, children, tone = 'inverse', appearance = 'filled' }: TooltipProps) {
  return <span className={cn(styles.tooltip, styles[`tooltip--${tone}-${appearance}`])}>{children ?? content}</span>;
}
