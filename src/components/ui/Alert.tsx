import type { ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

type AlertProps = {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
};

export function Alert({ variant = 'info', title, children }: AlertProps) {
  return (
    <div className={`alert alert--${variant}`}>
      {title ? <strong className="alert__title">{title}</strong> : null}
      <div className="alert__content">{children}</div>
    </div>
  );
}

