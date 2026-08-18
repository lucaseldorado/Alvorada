import { Alert } from '../../../components/ui';
import { cn } from '../../../components/ui/cn';
import { pageStyles as styles } from '../pageStyles';

export function FeedbackSection() {
  return (
    <div className={cn(styles['demo-grid'], styles['demo-grid--feedback'])}>
      <Alert variant="info" title="Info">
        Informational alert for system messages.
      </Alert>
      <Alert variant="success" title="Success">
        Action completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Double-check before continuing.
      </Alert>
      <Alert variant="error" title="Error">
        Something went wrong.
      </Alert>
    </div>
  );
}
