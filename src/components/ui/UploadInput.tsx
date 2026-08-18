import type { InputHTMLAttributes } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type UploadInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function UploadInput({ label, className = '', ...props }: UploadInputProps) {
  return (
    <label className={cn(styles['upload-input'], className)}>
      <span className={styles['upload-input__label']}>{label}</span>
      <span className={styles['upload-input__dropzone']}>
        <input type="file" className={styles['upload-input__control']} {...props} />
      </span>
    </label>
  );
}
