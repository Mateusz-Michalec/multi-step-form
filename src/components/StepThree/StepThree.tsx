import React, { useState } from "react";
import { StepProps } from "../../App";
import StepWrapper from "../StepWrapper/StepWrapper";
import StepsNavigation from "../StepsNavigation/StepsNavigation";
import { Addon, StepThreeType, addonsData } from "../../models/StepThree";

const StepThree = ({ fields, updateFormData, stepsNavigator }: StepProps) => {
  const [fieldsState, setFieldsState] = useState(fields as StepThreeType);

  const onNext = () => {
    updateFormData(fieldsState);
    stepsNavigator.goNext();
  };

  const onBack = () => {
    updateFormData(fieldsState);
    stepsNavigator.goBack();
  };

  const isChecked = (addonName: string) =>
    fieldsState.addons?.some((addon) => addon.addon === addonName);

  const toggleAddon = (addon: Addon) => {
    const isAlreadyChecked = isChecked(addon.addon);
    if (isAlreadyChecked)
      setFieldsState((prev) => ({
        addons: prev.addons.filter((obj) => obj.addon !== addon.addon),
      }));
    else setFieldsState((prev) => ({ addons: [...prev.addons, addon] }));
  };

  return (
    <StepWrapper
      title={"Pick add-ons"}
      desc={"Add-ons help enhance your gaming experience."}
    >
      <form className="d-flex flex-column gap-3">
        {addonsData.map((addon) => (
          <div className="form-check rounded border py-3 d-flex gap-4 align-items-center ">
            <input
              type="checkbox"
              className="form-check-input ms-0"
              id={addon.addon}
              name={addon.addon}
              checked={isChecked(addon.addon)}
              onChange={() => toggleAddon(addon)}
            />
            <label
              htmlFor={addon.addon}
              className="form-check-label me-4 flex-grow-1 d-flex justify-content-between align-items-center"
            >
              <div>
                <h5 className="step__label mb-0">{addon.addon}</h5>
                <p className="step__label-desc mb-0">{addon.desc}</p>
              </div>
              <span className="step__label-price">
                +${addon.price.monthly}/mo
              </span>
            </label>
          </div>
        ))}
      </form>
      <StepsNavigation
        stepsNavigator={stepsNavigator}
        onNext={onNext}
        onBack={onBack}
      />
    </StepWrapper>
  );
};

export default StepThree;
