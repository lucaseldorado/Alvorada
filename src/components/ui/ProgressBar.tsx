type ProgressBarProps = {
  value: number;
  max?: number;
  size?: 'md' | 'lg';
  showLabel?: boolean;
};

export function ProgressBar({ value, max = 100, size = 'md', showLabel = false }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={`progress-bar ${size === 'lg' ? 'progress-bar--lg' : ''}`.trim()}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <span className="progress-bar__track">
        <span className="progress-bar__fill" style={{ width: `${percentage}%` }} />
      </span>
      {showLabel ? <span className="progress-bar__label">{Math.round(percentage)}%</span> : null}
    </div>
  );
}
