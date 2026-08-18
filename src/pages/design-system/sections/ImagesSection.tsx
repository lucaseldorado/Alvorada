import { pageStyles as styles } from '../pageStyles';

export function ImagesSection() {
  return (
    <div className={styles['demo-grid']}>
      <div className={styles['icon-card']}>
        <div
          style={{
            minHeight: 180,
            borderRadius: 14,
            border: '1px dashed var(--border-primary)',
            display: 'grid',
            placeItems: 'center',
            color: 'var(--content-secondary)'
          }}
        >
          Image preview
        </div>
      </div>
      <div className={styles['icon-card']}>
        <p style={{ color: 'var(--content-secondary)' }}>
          Imagens devem ser exportadas com alt text, dimensões corretas e estados de carregamento.
        </p>
      </div>
    </div>
  );
}
