import type { SelectHTMLAttributes } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type DropdownProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Array<{ label: string; value: string }>;
  error?: boolean;
};

export function Dropdown({ label, options, error = false, className = '', ...props }: DropdownProps) {
  return (
    <label className={cn(styles.dropdown, className)}>
      {label ? <span className={styles['text-input__label']}>{label}</span> : null}
      <select className={cn(styles.dropdown__trigger, error && styles['dropdown__trigger--error'])} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
