import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type PaginationProps = {
  current: number;
  total: number;
  size?: 'md' | '2xl';
};

export function Pagination({ current, total, size = 'md' }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button className={cn(styles.pagination__item, size === '2xl' && styles['pagination__item--2xl'])} type="button" aria-label="Previous page">
        ‹
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={cn(styles.pagination__item, page === current && styles['pagination__item--active'], size === '2xl' && styles['pagination__item--2xl'])}
          aria-current={page === current ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button className={cn(styles.pagination__item, size === '2xl' && styles['pagination__item--2xl'])} type="button" aria-label="Next page">
        ›
      </button>
    </nav>
  );
}
