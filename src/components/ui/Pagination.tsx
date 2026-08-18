type PaginationProps = {
  current: number;
  total: number;
  size?: 'md' | '2xl';
};

export function Pagination({ current, total, size = 'md' }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button className={`pagination__item ${size === '2xl' ? 'pagination__item--2xl' : ''}`.trim()} type="button" aria-label="Previous page">
        ‹
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`pagination__item ${page === current ? 'pagination__item--active' : ''} ${size === '2xl' ? 'pagination__item--2xl' : ''}`.trim()}
          aria-current={page === current ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button className={`pagination__item ${size === '2xl' ? 'pagination__item--2xl' : ''}`.trim()} type="button" aria-label="Next page">
        ›
      </button>
    </nav>
  );
}
