import type { InputHTMLAttributes } from 'react';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Radio({ label, className = '', ...props }: RadioProps) {
  return (
    <label className={`control control--radio ${className}`.trim()}>
      <input type="radio" className="control__input" {...props} />
      <span className="control__box" />
      <span className="control__label">{label}</span>
    </label>
  );
}

