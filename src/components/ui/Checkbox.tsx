import type { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className={`control control--checkbox ${className}`.trim()}>
      <input type="checkbox" className="control__input" {...props} />
      <span className="control__box" />
      <span className="control__label">{label}</span>
    </label>
  );
}

