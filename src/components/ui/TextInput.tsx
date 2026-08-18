import type { InputHTMLAttributes } from 'react';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  supportText?: string;
};

export function TextInput({ label, supportText, className = '', ...props }: TextInputProps) {
  return (
    <label className={`field field--text-input ${className}`.trim()}>
      {label ? <span className="field__label">{label}</span> : null}
      <input className="field__control" type="text" {...props} />
      {supportText ? <span className="field__support">{supportText}</span> : null}
    </label>
  );
}

