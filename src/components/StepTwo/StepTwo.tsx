import React, { useState } from "react";
import { plansData } from "../../models/StepTwo";
import "./StepTwo.scss";
import StepWrapper from "../StepWrapper/StepWrapper";
import { StepProps } from "../../App";
import useStepData from "../../hooks/useStepData";
import StepsNavigation from "../StepsNavigation/StepsNavigation";

const StepTwo = ({ fields, updateFormData, stepsNavigator }: StepProps) => {
  const { stepData, setStepData, handleInputChange } = useStepData(fields);

  const validateStep = () => {
    updateFormData(stepData);
    stepsNavigator.goNext();
  };

  const updateFormDataOnBack = () => {
    updateFormData(stepData);
    stepsNavigator.goBack();
  };

  return (
    <StepWrapper
      title={"Select your plan"}
      desc={"You have the option of monthly or yearly billing."}
    >
      {plansData.map((plan) => (
        <div
          key={plan.plan}
          className={`${
            stepData.plan === plan.plan ? "plan--active" : ""
          } card plan mb-3 form-check`}
        >
          <input
            className="form-check-input visually-hidden"
            type="radio"
            name="plan"
            value={plan.plan}
            id={plan.plan}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="card-body d-flex gap-3" htmlFor={plan.plan}>
            <img className="align-self-start" src={plan.icon} alt={plan.plan} />
            <div>
              <h6 className="card-title plan__title">{plan.plan}</h6>
              <p className="card-subtitle plan__subtitle">
                ${plan.billing[stepData.billing]}/
              </p>
              <p className="card-text plan__text">2 months free</p>
            </div>
          </label>
        </div>
      ))}
      <div className="d-flex gap-4 plan-switch-container mt-4 p-3 rounded justify-content-center">
        <span
          className={
            stepData.billing === "Monthly"
              ? "plan-switch--active"
              : "text-secondary"
          }
        >
          Monthly
        </span>

        <div className="form-check form-switch">
          <input
            checked={stepData.billing === "Yearly" ? true : false}
            onChange={() =>
              setStepData((prev) => ({
                ...prev,
                billing: stepData.billing === "Monthly" ? "Yearly" : "Monthly",
              }))
            }
            value={stepData.billing}
            type="checkbox"
            className="form-check-input plan-switch"
            role="switch"
          />
        </div>

        <span
          className={
            stepData.billing === "Yearly"
              ? "plan-switch--active"
              : "text-secondary"
          }
        >
          Yearly
        </span>
      </div>
      <StepsNavigation
        stepsNavigator={stepsNavigator}
        validateStep={validateStep}
        updateFormDataOnBack={updateFormDataOnBack}
      />
    </StepWrapper>
  );
};

export default StepTwo;
