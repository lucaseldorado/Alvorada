import { Card, ListItem, Pagination, ProgressBar, StatusBadge, StepBar, TabMenu } from '../../../components/ui';
import { pageStyles as styles } from '../pageStyles';

export function NavigationSection() {
  return (
    <div className={styles['demo-grid']}>
      <Card title="Progress" description="Progress bar and steps for flows." footer={<Pagination current={2} total={5} />}>
        <ProgressBar value={68} />
        <div className={styles.spacer} />
        <StepBar steps={['Start', 'Build', 'Review', 'Done']} currentStep={2} />
      </Card>
      <Card title="Navigation" description="Tabbed navigation pattern.">
        <TabMenu tabs={['Overview', 'Details', 'History']} activeIndex={0} />
      </Card>
      <Card title="List item" description="Composable row pattern for menus and collections.">
        <ListItem title="Design system item" description="Secondary text" trailing={<StatusBadge label="Ready" />} />
      </Card>
    </div>
  );
}
