import { UploadInput } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function FileUploadSection() {
  return (
    <div className={styles['demo-grid']}>
      <UploadInput label="Upload file" />
      <div className={styles['icon-card']}>
        <strong>report.pdf</strong>
        <span style={{ color: 'var(--content-secondary)' }}>2.4 MB · Uploaded</span>
      </div>
    </div>
  );
}
