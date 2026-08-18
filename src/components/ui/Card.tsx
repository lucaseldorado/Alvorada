import type { ReactNode } from 'react';
import { uiStyles as styles } from './uiStyles';

type CardProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Card({ title, description, children, footer }: CardProps) {
  return (
    <section className={styles.card}>
      {(title || description) && (
        <header className={styles.card__header}>
          {title ? <h2 className={styles.card__title}>{title}</h2> : null}
          {description ? <p className={styles.card__description}>{description}</p> : null}
        </header>
      )}
      <div className={styles.card__body}>{children}</div>
      {footer ? <footer className={styles.card__footer}>{footer}</footer> : null}
    </section>
  );
}
