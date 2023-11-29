import React from "react";
import "./StepsNavigation.scss";
import { StepsNavigator } from "../../hooks/useMultiStepForm";
import { StepFields } from "../../App";

type StepNavigationProps = {
  stepsNavigator: StepsNavigator;
  onNext: () => void;
  onBack?: () => void;
};

const StepsNavigation = ({
  stepsNavigator,
  onNext,
  onBack,
}: StepNavigationProps) => {
  return (
    <div className="next-btn-container bg-white fixed-bottom p-3 shadow d-flex justify-content-between">
      {stepsNavigator.currentStep > 0 ? (
        <button
          onClick={() => (onBack ? onBack : stepsNavigator.goBack())}
          className="btn p-0 text-secondary"
        >
          Go Back
        </button>
      ) : null}
      <button
        onClick={() => onNext()}
        type="button"
        className="btn btn-primary next-btn ms-auto d-block"
      >
        Next Step
      </button>
    </div>
  );
};

export default StepsNavigation;
