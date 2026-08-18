import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'neutral' | 'error';
type ButtonAppearance = 'filled' | 'light' | 'outline' | 'ghost' | 'glass';
type ButtonSize = '2xl' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
};

export function Button({
  variant = 'primary',
  appearance = 'filled',
  size = '2xl',
  className = '',
  ...props
}: ButtonProps) {
  return <button className={`btn btn--${size} btn--${variant}-${appearance} ${className}`.trim()} {...props} />;
}
