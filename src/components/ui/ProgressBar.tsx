type ProgressBarProps = {
  value: number;
  max?: number;
};

export function ProgressBar({ value, max = 100 }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <span className="progress-bar__fill" style={{ width: `${percentage}%` }} />
    </div>
  );
}

