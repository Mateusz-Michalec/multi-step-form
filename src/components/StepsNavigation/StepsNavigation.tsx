import React from "react";
import "./StepsNavigation.scss";

type StepNavigationProps = {
  currentStep: number;
};

const StepsNavigation = ({ currentStep }: StepNavigationProps) => {
  const steps = [1, 2, 3, 4];

  return (
    <nav className="steps-navigation">
      <div
        className="d-flex justify-content-center gap-3 pt-5"
        role="group"
        aria-label="Form steps"
      >
        {steps.map((step) => (
          <button
            key={step}
            type="button"
            className={`${
              currentStep === step ? "steps-navigation__btn--active" : ""
            } steps-navigation__btn btn btn-outline-light rounded-circle border-2 fw-bold`}
          >
            {step}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default StepsNavigation;
