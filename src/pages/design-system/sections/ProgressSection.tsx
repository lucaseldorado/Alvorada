import { ProgressBar } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function ProgressSection() {
  return (
    <div className={styles['icon-card']}>
      <p style={{ color: 'var(--content-secondary)' }}>Avanço de tarefa ou carregamento.</p>
      <ProgressBar value={68} showLabel />
    </div>
  );
}
