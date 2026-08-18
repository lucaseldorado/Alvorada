import { Fragment } from 'react';

type StepBarProps = {
  steps: string[];
  currentStep: number;
};

export function StepBar({ steps, currentStep }: StepBarProps) {
  return (
    <ol className="step-bar">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <li
            className={`step-bar__step ${index === currentStep ? 'step-bar__step--active' : ''} ${index < currentStep ? 'step-bar__step--complete' : ''}`.trim()}
          >
            {index + 1}
          </li>
          {index < steps.length - 1 ? (
            <li className={`step-bar__connector ${index < currentStep ? 'step-bar__connector--complete' : ''}`.trim()} />
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
