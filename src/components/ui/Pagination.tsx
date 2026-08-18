type PaginationProps = {
  current: number;
  total: number;
};

export function Pagination({ current, total }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button className="pagination__nav" type="button" aria-label="Previous page">
        ‹
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`pagination__page ${page === current ? 'is-active' : ''}`.trim()}
          aria-current={page === current ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button className="pagination__nav" type="button" aria-label="Next page">
        ›
      </button>
    </nav>
  );
}

