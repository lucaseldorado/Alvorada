import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type DividerProps = {
  label?: string;
  variant?: 'solid' | 'dotted' | 'text' | 'icon';
};

export function Divider({ label, variant = 'solid' }: DividerProps) {
  const hasContent = variant === 'text' || variant === 'icon';

  return (
    <div className={cn(styles.divider, styles[`divider--${variant}`])}>
      {hasContent && label ? <span>{label}</span> : null}
    </div>
  );
}
