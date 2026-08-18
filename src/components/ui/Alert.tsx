import type { ReactNode } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

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
    <div className={cn(styles.alert, styles[`alert--${variant}-${appearance}`])}>
      {title ? <strong className={styles.alert__title}>{title}</strong> : null}
      <div className={styles.alert__body}>{children}</div>
    </div>
  );
}
