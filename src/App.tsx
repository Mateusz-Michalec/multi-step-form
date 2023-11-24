import { useState } from "react";
import "./App.scss";
import StepsIndicators from "./components/StepsIndicators/StepsIndicators";
import StepOne from "./components/StepOne/StepOne";
import { StepOneType } from "./models/StepOne";
import StepWrapper from "./components/StepWrapper/StepWrapper";
import StepTwo from "./components/StepTwo/StepTwo";
import { StepTwoType } from "./models/StepTwo";

export type FormData = StepOneType & StepTwoType;

export type StepProps = {
  formData?: FormData;
  setFormData: React.Dispatch<React.SetStateAction<StepOneType>>;
  goToNextStep: () => void;
};

function App() {
  const steps = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    billing: "Monthly",
  });

  console.log(formData);

  const goToNextStep = () => {
    setCurrentStep((prev) => {
      if (prev > 0 && prev < steps.length) return (prev += 1);
      else return (prev -= 1);
    });
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepWrapper
            title={"Personal info"}
            desc={"Please provide your name, email adress, and phone number."}
          >
            <StepOne goToNextStep={goToNextStep} setFormData={setFormData} />
          </StepWrapper>
        );
      case 2:
        return (
          <StepWrapper
            title={"Select your plan"}
            desc={"You have the option of monthly or yearly billing."}
          >
            <StepTwo goToNextStep={goToNextStep} setFormData={setFormData} />
          </StepWrapper>
        );
    }
  };

  return (
    <div className="multi-step-form">
      <StepsIndicators steps={steps} currentStep={currentStep} />
      {renderCurrentStep()}
    </div>
  );
}

export default App;
