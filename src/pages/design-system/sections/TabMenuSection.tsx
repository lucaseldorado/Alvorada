import { TabMenu } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function TabMenuSection() {
  return (
    <div className={styles['icon-card']}>
      <p style={{ color: 'var(--content-secondary)' }}>Alternância entre contextos relacionados.</p>
      <TabMenu tabs={['Overview', 'Details', 'History']} activeIndex={0} />
    </div>
  );
}
