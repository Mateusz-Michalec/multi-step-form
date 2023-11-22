import { useState } from "react";
import "./App.scss";
import StepsNavigation from "./components/StepsNavigation/StepsNavigation";
import StepOne from "./components/StepOne/StepOne";
import Step from "./components/Step/Step";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step
            title={"Personal info"}
            desc={"Please provide your name, email adress, and phone number."}
          >
            <StepOne />
          </Step>
        );
      default:
        return <StepOne />;
    }
  };

  return (
    <>
      <StepsNavigation currentStep={currentStep} />
      {renderCurrentStep()}
    </>
  );
}

export default App;
