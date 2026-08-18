type DividerProps = {
  label?: string;
  variant?: 'solid' | 'dotted';
};

export function Divider({ label, variant = 'solid' }: DividerProps) {
  return (
    <div className={`divider divider--${variant}`}>
      {label ? <span className="divider__label">{label}</span> : null}
    </div>
  );
}

