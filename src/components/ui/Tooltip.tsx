import type { ReactNode } from 'react';

type TooltipProps = {
  content: string;
  children?: ReactNode;
  tone?: 'inverse' | 'brand' | 'swap';
  appearance?: 'filled' | 'light';
};

export function Tooltip({ content, children, tone = 'inverse', appearance = 'filled' }: TooltipProps) {
  return <span className={`tooltip tooltip--${tone}-${appearance}`}>{children ?? content}</span>;
}
