import { Tag } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function TagSection() {
  return (
    <div className={styles['demo-grid']}>
      <Tag>Design</Tag>
      <Tag>React</Tag>
      <Tag>UI</Tag>
    </div>
  );
}
