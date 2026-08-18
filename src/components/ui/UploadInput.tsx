import type { InputHTMLAttributes } from 'react';

type UploadInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function UploadInput({ label, className = '', ...props }: UploadInputProps) {
  return (
    <label className={`upload-input ${className}`.trim()}>
      <span className="upload-input__label">{label}</span>
      <input type="file" className="upload-input__control" {...props} />
    </label>
  );
}

