import { useState } from "react";
import "./App.scss";
import StepsIndicators from "./components/StepsIndicators/StepsIndicators";
import StepOne from "./components/StepOne/StepOne";
import { StepOneType } from "./models/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";
import { StepTwoType } from "./models/StepTwo";
import useMultiStepForm, { StepsNavigator } from "./hooks/useMultiStepForm";

export type FormData = StepOneType & StepTwoType;
export type StepFields = StepOneType | StepTwoType;

export type StepProps = {
  fields: StepFields;
  stepsNavigator: StepsNavigator;
  updateFormData: (stepData: StepFields) => void;
};

const INIT_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  billing: "Monthly",
};

function App() {
  const [formData, setFormData] = useState<FormData>(INIT_FORM_DATA);
  const { stepsNavigator } = useMultiStepForm(4);

  const updateFormData = (stepData: StepFields) =>
    setFormData((prev) => ({ ...prev, ...stepData }));

  const steps = [
    <StepOne
      fields={{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      }}
      stepsNavigator={stepsNavigator}
      updateFormData={updateFormData}
    />,
    <StepTwo
      fields={{
        plan: formData.plan,
        billing: formData.billing,
      }}
      stepsNavigator={stepsNavigator}
      updateFormData={updateFormData}
    />,
  ];
  const currentStep = steps[stepsNavigator.currentStep];

  return (
    <div className="multi-step-form">
      <StepsIndicators
        stepsCount={stepsNavigator.stepsCount}
        currentStep={stepsNavigator.currentStep}
      />
      {currentStep}
    </div>
  );
}

export default App;
