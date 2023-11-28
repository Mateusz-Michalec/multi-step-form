import React from "react";
import "./StepsNavigation.scss";
import { StepsNavigator } from "../../hooks/useMultiStepForm";
import { StepFields } from "../../App";

type StepNavigationProps = {
  stepsNavigator: StepsNavigator;
  validateStep: () => void;
  updateFormDataOnBack?: () => void;
};

const StepsNavigation = ({
  stepsNavigator,
  validateStep,
  updateFormDataOnBack,
}: StepNavigationProps) => {
  const onBack = updateFormDataOnBack
    ? updateFormDataOnBack
    : stepsNavigator.goBack;

  return (
    <div className="next-btn-container bg-white fixed-bottom p-3 shadow d-flex justify-content-between">
      {stepsNavigator.currentStep > 0 ? (
        <button onClick={() => onBack()} className="btn p-0 text-secondary">
          Go Back
        </button>
      ) : null}
      <button
        onClick={() => validateStep()}
        type="button"
        className="btn btn-primary next-btn ms-auto d-block"
      >
        Next Step
      </button>
    </div>
  );
};

export default StepsNavigation;
