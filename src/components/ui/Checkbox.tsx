import type { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  controlSize?: 'sm' | 'xs';
};

export function Checkbox({ label, controlSize = 'sm', className = '', ...props }: CheckboxProps) {
  const isSelected = Boolean(props.checked ?? props.defaultChecked);

  return (
    <label className={`control-inline ${className}`.trim()}>
      <input type="checkbox" className="sr-only" {...props} />
      <span className={`checkbox checkbox--${controlSize} ${isSelected ? 'checkbox--selected' : ''}`.trim()} aria-hidden="true" />
      <span>{label}</span>
    </label>
  );
}
