import type { ReactNode } from 'react';

type TooltipProps = {
  content: string;
  children: ReactNode;
};

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <span className="tooltip" data-tooltip={content}>
      {children}
    </span>
  );
}

