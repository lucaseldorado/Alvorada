import { Badge, Button } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function HeroSection() {
  return (
    <>
      <Badge color="blue" appearance="light">
        Alvorada Design System
      </Badge>
      <h1>CSS dos Componentes</h1>
      <p className={styles.lead}>
        Base de componentes em React + TypeScript inspirada no frame do Figma para acelerar a exportação do design
        system.
      </p>

      <div className={styles['hero-actions']}>
        <Button>Primary action</Button>
        <Button variant="neutral">Neutral</Button>
        <Button variant="error">Error</Button>
      </div>
    </>
  );
}
