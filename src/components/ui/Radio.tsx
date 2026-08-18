import type { InputHTMLAttributes } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  controlSize?: 'sm' | 'xs';
};

export function Radio({ label, controlSize = 'sm', className = '', ...props }: RadioProps) {
  const isSelected = Boolean(props.checked ?? props.defaultChecked);

  return (
    <label className={cn(styles['control-inline'], className)}>
      <input type="radio" className={styles['sr-only']} {...props} />
      <span className={cn(styles.radio, styles[`radio--${controlSize}`], isSelected && styles['radio--selected'])} aria-hidden="true" />
      <span>{label}</span>
    </label>
  );
}
