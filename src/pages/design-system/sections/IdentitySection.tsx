import { Avatar, Rating, StatusBadge, Tag, Tooltip } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function IdentitySection() {
  return (
    <div className={styles['chip-row']}>
      <Avatar name="Lucas" />
      <Tag>Default tag</Tag>
      <StatusBadge label="Published" tone="success" />
      <Tooltip content="Reusable tooltip">Hover me</Tooltip>
      <Rating value={4} />
    </div>
  );
}
