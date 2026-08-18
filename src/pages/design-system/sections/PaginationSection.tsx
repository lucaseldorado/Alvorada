import { Pagination } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function PaginationSection() {
  return (
    <div className={styles['icon-card']}>
      <p style={{ color: 'var(--content-secondary)' }}>Navegação entre páginas de conteúdo.</p>
      <Pagination current={2} total={5} />
    </div>
  );
}
