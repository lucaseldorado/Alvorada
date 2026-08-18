import { CheckIcon, ChevronRightIcon, InfoIcon } from '../../../icons';
import { pageStyles as styles } from '../pageStyles';

const icons = [
  { name: 'Check', Component: CheckIcon },
  { name: 'Info', Component: InfoIcon },
  { name: 'ChevronRight', Component: ChevronRightIcon }
];

export function IconsSection() {
  return (
    <div className={styles['icons-grid']}>
      {icons.map(({ name, Component }) => (
        <div key={name} className={styles['icon-card']}>
          <Component size={20} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
