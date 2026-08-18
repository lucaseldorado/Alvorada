import type { InputHTMLAttributes } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  supportText?: string;
  error?: boolean;
};

export function TextInput({ label, supportText, error = false, className = '', ...props }: TextInputProps) {
  return (
    <label className={cn(styles['text-input'], className)}>
      {label ? <span className={styles['text-input__label']}>{label}</span> : null}
      <input className={cn(styles['text-input__field'], error && styles['text-input__field--error'])} type="text" {...props} />
      {supportText ? <span className={cn(styles['text-input__support'], error && styles['text-input__support--error'])}>{supportText}</span> : null}
    </label>
  );
}
