type DividerProps = {
  label?: string;
  variant?: 'solid' | 'dotted' | 'text' | 'icon';
};

export function Divider({ label, variant = 'solid' }: DividerProps) {
  const hasContent = variant === 'text' || variant === 'icon';

  return (
    <div className={`divider divider--${variant}`}>
      {hasContent && label ? <span>{label}</span> : null}
    </div>
  );
}
