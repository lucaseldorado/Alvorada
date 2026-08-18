import { Radio } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function RadioSection() {
  return (
    <div className={styles['icon-card']}>
      <p style={{ color: 'var(--content-secondary)' }}>Seleção exclusiva.</p>
      <Radio name="theme-doc" label="Light" defaultChecked />
    </div>
  );
}
