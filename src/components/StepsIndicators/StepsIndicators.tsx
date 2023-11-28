import React from "react";
import "./StepsIndicators.scss";

type StepsIndicatorsProps = {
  stepsCount: number;
  currentStep: number;
};

const StepsIndicators = ({ stepsCount, currentStep }: StepsIndicatorsProps) => {
  return (
    <nav
      className="steps-indicators d-flex justify-content-center gap-3 pt-5"
      role="group"
      aria-label="Form steps"
    >
      {[...Array(stepsCount)].map((_, i) => (
        <button
          key={i + 1}
          type="button"
          className={`${
            currentStep === i ? "steps-indicators__btn--active" : ""
          } steps-indicators__btn btn btn-outline-light rounded-circle border-2 fw-bold`}
        >
          {i + 1}
        </button>
      ))}
    </nav>
  );
};

export default StepsIndicators;
