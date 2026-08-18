import type { ReactNode } from 'react';

type CardProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Card({ title, description, children, footer }: CardProps) {
  return (
    <section className="card">
      {(title || description) && (
        <header className="card__header">
          {title ? <h2 className="card__title">{title}</h2> : null}
          {description ? <p className="card__description">{description}</p> : null}
        </header>
      )}
      <div className="card__body">{children}</div>
      {footer ? <footer className="card__footer">{footer}</footer> : null}
    </section>
  );
}
