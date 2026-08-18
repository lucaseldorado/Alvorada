import { Rating } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function RatingSection() {
  return (
    <div className={styles['icon-card']}>
      <p style={{ color: 'var(--content-secondary)' }}>Avaliação visual de cinco estrelas.</p>
      <Rating value={4} />
    </div>
  );
}
