import { Fragment } from 'react';
import { cn } from './cn';
import { uiStyles as styles } from './uiStyles';

type StepBarProps = {
  steps: string[];
  currentStep: number;
};

export function StepBar({ steps, currentStep }: StepBarProps) {
  return (
    <ol className={styles['step-bar']}>
      {steps.map((step, index) => (
        <Fragment key={step}>
          <li
            className={cn(styles['step-bar__step'], index === currentStep && styles['step-bar__step--active'], index < currentStep && styles['step-bar__step--complete'])}
          >
            {index + 1}
          </li>
          {index < steps.length - 1 ? (
            <li className={cn(styles['step-bar__connector'], index < currentStep && styles['step-bar__connector--complete'])} />
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
