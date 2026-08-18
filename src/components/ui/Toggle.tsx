import type { InputHTMLAttributes } from 'react';

type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  controlSize?: 'sm' | 'xs';
};

export function Toggle({ label, controlSize = 'sm', className = '', ...props }: ToggleProps) {
  const isSelected = Boolean(props.checked ?? props.defaultChecked);

  return (
    <label className={`control-inline ${className}`.trim()}>
      <input type="checkbox" className="sr-only" {...props} />
      <span className={`toggle toggle--${controlSize} ${isSelected ? 'toggle--selected' : ''}`.trim()} aria-hidden="true">
        <span className="toggle__thumb" />
      </span>
      <span>{label}</span>
    </label>
  );
}
