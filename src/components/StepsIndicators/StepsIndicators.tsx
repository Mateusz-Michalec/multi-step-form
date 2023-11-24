import React from "react";
import "./StepsIndicators.scss";

type StepsIndicatorsProps = {
  steps: number[];
  currentStep: number;
};

const StepsIndicators = ({ steps, currentStep }: StepsIndicatorsProps) => {
  return (
    <nav
      className="steps-indicators d-flex justify-content-center gap-3 pt-5"
      role="group"
      aria-label="Form steps"
    >
      {steps.map((step) => (
        <button
          key={step}
          type="button"
          className={`${
            currentStep === step ? "steps-indicators__btn--active" : ""
          } steps-indicators__btn btn btn-outline-light rounded-circle border-2 fw-bold`}
        >
          {step}
        </button>
      ))}
    </nav>
  );
};

export default StepsIndicators;
