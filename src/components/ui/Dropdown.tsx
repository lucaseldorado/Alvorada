import type { SelectHTMLAttributes } from 'react';

type DropdownProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Array<{ label: string; value: string }>;
  error?: boolean;
};

export function Dropdown({ label, options, error = false, className = '', ...props }: DropdownProps) {
  return (
    <label className={`dropdown ${className}`.trim()}>
      {label ? <span className="text-input__label">{label}</span> : null}
      <select className={`dropdown__trigger ${error ? 'dropdown__trigger--error' : ''}`.trim()} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
