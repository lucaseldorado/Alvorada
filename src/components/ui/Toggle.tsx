import type { InputHTMLAttributes } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  controlSize?: 'sm' | 'xs';
};

export function Toggle({ label, controlSize = 'sm', className = '', ...props }: ToggleProps) {
  const isSelected = Boolean(props.checked ?? props.defaultChecked);

  return (
    <label className={cn(styles['control-inline'], className)}>
      <input type="checkbox" className={styles['sr-only']} {...props} />
      <span className={cn(styles.toggle, styles[`toggle--${controlSize}`], isSelected && styles['toggle--selected'])} aria-hidden="true">
        <span className={styles.toggle__thumb} />
      </span>
      <span>{label}</span>
    </label>
  );
}
