import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type StatusBadgeProps = {
  label: string;
  tone?: 'neutral' | 'success' | 'warning' | 'error' | 'info';
};

export function StatusBadge({ label, tone = 'neutral' }: StatusBadgeProps) {
  return (
    <span className={cn(styles['status-badge'], styles[`status-badge--${tone}`])}>
      <span className={styles['status-badge__dot']} />
      {label}
    </span>
  );
}
