import type { InputHTMLAttributes } from 'react';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  controlSize?: 'sm' | 'xs';
};

export function Radio({ label, controlSize = 'sm', className = '', ...props }: RadioProps) {
  const isSelected = Boolean(props.checked ?? props.defaultChecked);

  return (
    <label className={`control-inline ${className}`.trim()}>
      <input type="radio" className="sr-only" {...props} />
      <span className={`radio radio--${controlSize} ${isSelected ? 'radio--selected' : ''}`.trim()} aria-hidden="true" />
      <span>{label}</span>
    </label>
  );
}
