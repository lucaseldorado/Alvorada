import type { ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';
type AlertAppearance = 'filled' | 'light' | 'outline';

type AlertProps = {
  variant?: AlertVariant;
  appearance?: AlertAppearance;
  title?: string;
  children: ReactNode;
};

export function Alert({ variant = 'info', appearance = 'light', title, children }: AlertProps) {
  return (
    <div className={`alert alert--${variant}-${appearance}`}>
      {title ? <strong className="alert__title">{title}</strong> : null}
      <div className="alert__body">{children}</div>
    </div>
  );
}
