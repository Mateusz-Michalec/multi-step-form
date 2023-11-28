import { useState } from "react";
import { StepFields } from "../App";

const useStepData = (fields: StepFields) => {
  const [stepData, setStepData] = useState(fields);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.classList.contains("is-invalid"))
      e.target.classList.remove("is-invalid");
    setStepData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { stepData, setStepData, handleInputChange };
};

export default useStepData;
