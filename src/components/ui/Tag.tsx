import type { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

export function Tag({ children, size = 'md' }: TagProps) {
  return <span className={`tag tag--${size}`}>{children}</span>;
}

