import type { SelectHTMLAttributes } from 'react';

type DropdownProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Array<{ label: string; value: string }>;
};

export function Dropdown({ label, options, className = '', ...props }: DropdownProps) {
  return (
    <label className={`field field--dropdown ${className}`.trim()}>
      {label ? <span className="field__label">{label}</span> : null}
      <select className="field__control" {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

