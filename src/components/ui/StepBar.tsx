type StepBarProps = {
  steps: string[];
  currentStep: number;
};

export function StepBar({ steps, currentStep }: StepBarProps) {
  return (
    <ol className="step-bar">
      {steps.map((step, index) => (
        <li key={step} className={`step-bar__item ${index <= currentStep ? 'is-active' : ''}`.trim()}>
          <span className="step-bar__dot" />
          <span className="step-bar__label">{step}</span>
        </li>
      ))}
    </ol>
  );
}

