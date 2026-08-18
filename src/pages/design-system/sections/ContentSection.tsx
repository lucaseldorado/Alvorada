import { pageStyles as styles } from '../pageStyles';

export function ContentSection() {
  return (
    <div className={styles['demo-grid']}>
      <div className={styles['icon-card']}>
        <div>
          <strong style={{ display: 'block', fontSize: 20 }}>Title</strong>
          <span style={{ color: 'var(--content-secondary)' }}>Hierarquia principal de leitura.</span>
        </div>
      </div>
      <div className={styles['icon-card']}>
        <div>
          <strong style={{ display: 'block', fontSize: 16 }}>Body</strong>
          <span style={{ color: 'var(--content-secondary)' }}>Texto de apoio e descrição.</span>
        </div>
      </div>
    </div>
  );
}
