import type { InputHTMLAttributes } from 'react';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  supportText?: string;
  error?: boolean;
};

export function TextInput({ label, supportText, error = false, className = '', ...props }: TextInputProps) {
  return (
    <label className={`text-input ${className}`.trim()}>
      {label ? <span className="text-input__label">{label}</span> : null}
      <input className={`text-input__field ${error ? 'text-input__field--error' : ''}`.trim()} type="text" {...props} />
      {supportText ? <span className={`text-input__support ${error ? 'text-input__support--error' : ''}`.trim()}>{supportText}</span> : null}
    </label>
  );
}
