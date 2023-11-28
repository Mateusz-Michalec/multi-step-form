import React, { useState } from "react";

export type StepsNavigator = {
  stepsCount: number;
  currentStep: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  goNext: () => void;
  goBack: () => void;
};

const useMultiStepForm = (stepsCount: number) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    setCurrentStep((step) => {
      if (step === stepsCount - 1) return step;
      return step + 1;
    });
  };

  const goBack = () => {
    setCurrentStep((step) => {
      if (step <= 0) return step;
      return step - 1;
    });
  };

  return {
    stepsNavigator: {
      stepsCount,
      currentStep,
      isFirstStep: currentStep === 0,
      isLastStep: currentStep === stepsCount - 1,
      goNext,
      goBack,
    },
  };
};

export default useMultiStepForm;
