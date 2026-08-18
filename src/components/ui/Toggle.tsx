import type { InputHTMLAttributes } from 'react';

type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Toggle({ label, className = '', ...props }: ToggleProps) {
  return (
    <label className={`control control--toggle ${className}`.trim()}>
      <input type="checkbox" className="control__input" {...props} />
      <span className="control__track">
        <span className="control__thumb" />
      </span>
      <span className="control__label">{label}</span>
    </label>
  );
}

