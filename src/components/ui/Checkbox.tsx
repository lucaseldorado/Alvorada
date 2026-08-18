import type { InputHTMLAttributes } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  controlSize?: 'sm' | 'xs';
};

export function Checkbox({ label, controlSize = 'sm', className = '', ...props }: CheckboxProps) {
  const isSelected = Boolean(props.checked ?? props.defaultChecked);

  return (
    <label className={cn(styles['control-inline'], className)}>
      <input type="checkbox" className={styles['sr-only']} {...props} />
      <span className={cn(styles.checkbox, styles[`checkbox--${controlSize}`], isSelected && styles['checkbox--selected'])} aria-hidden="true" />
      <span>{label}</span>
    </label>
  );
}
