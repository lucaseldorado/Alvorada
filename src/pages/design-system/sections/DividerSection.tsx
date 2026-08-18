import { Divider } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function DividerSection() {
  return (
    <div className={styles['demo-grid']}>
      <div>
        <p style={{ marginBottom: 8 }}>Solid divider</p>
        <Divider />
      </div>
      <div>
        <p style={{ marginBottom: 8 }}>Text divider</p>
        <Divider label="Section" variant="text" />
      </div>
    </div>
  );
}
