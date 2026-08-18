import type { ReactNode } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type ListItemProps = {
  title: string;
  description?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  active?: boolean;
};

export function ListItem({ title, description, leading, trailing, active = false }: ListItemProps) {
  return (
    <div className={cn(styles['list-item'], active && styles['list-item--active'])}>
      {leading ? <div className={styles['list-item__leading']}>{leading}</div> : null}
      <div className={styles['list-item__content']}>
        <strong className={styles['list-item__title']}>{title}</strong>
        {description ? <p className={styles['list-item__description']}>{description}</p> : null}
      </div>
      {trailing ? <div className={styles['list-item__trailing']}>{trailing}</div> : null}
    </div>
  );
}
