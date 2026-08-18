import type { ReactNode } from 'react';

type ListItemProps = {
  title: string;
  description?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  active?: boolean;
};

export function ListItem({ title, description, leading, trailing, active = false }: ListItemProps) {
  return (
    <div className={`list-item ${active ? 'list-item--active' : ''}`.trim()}>
      {leading ? <div className="list-item__leading">{leading}</div> : null}
      <div className="list-item__content">
        <strong className="list-item__title">{title}</strong>
        {description ? <p className="list-item__description">{description}</p> : null}
      </div>
      {trailing ? <div className="list-item__trailing">{trailing}</div> : null}
    </div>
  );
}
