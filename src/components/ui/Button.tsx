import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'neutral' | 'error';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return <button className={`button button--${variant} ${className}`.trim()} {...props} />;
}
