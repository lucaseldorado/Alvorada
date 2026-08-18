type StatusBadgeProps = {
  label: string;
  tone?: 'neutral' | 'success' | 'warning' | 'error' | 'info';
};

export function StatusBadge({ label, tone = 'neutral' }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${tone}`}>
      <span className="status-badge__dot" />
      {label}
    </span>
  );
}
