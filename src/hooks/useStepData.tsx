import React, { useState } from "react";
import { StepOneType } from "../models/StepOne";

type StepForm = StepOneType;

const useStepData = (initialData: StepForm) => {
  const [stepData, setStepData] = useState(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.classList.contains("is-invalid"))
      e.target.classList.remove("is-invalid");
    setStepData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { stepData, handleInputChange };
};

export default useStepData;
