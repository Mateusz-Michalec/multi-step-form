import { useForm } from "react-hook-form";
import {
  StepOneForm,
  StepOneType,
  stepOneinputConfigs,
} from "../../models/StepOne";
import { StepProps } from "../../App";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import StepWrapper from "../StepWrapper/StepWrapper";
import useStepData from "../../hooks/useStepData";
import StepsNavigation from "../StepsNavigation/StepsNavigation";

const StepOne = ({ fields, stepsNavigator, updateFormData }: StepProps) => {
  const { stepData, handleInputChange } = useStepData(fields);

  const [isValidated, setIsValidated] = useState(false);

  const {
    trigger,
    register,
    formState: { errors, isValid },
  } = useForm<StepOneType>({
    resolver: zodResolver(StepOneForm),
  });

  useEffect(() => {
    if (isValid && isValidated) {
      updateFormData(stepData);
      stepsNavigator.goNext();
    }
  }, [isValidated, isValid]);

  const onNext = () => {
    trigger();
    setIsValidated(true);
  };

  return (
    <StepWrapper
      title={"Personal info"}
      desc={"Please provide your name, email adress, and phone number."}
    >
      <form className="d-flex flex-column gap-3">
        {stepOneinputConfigs.map((input) => {
          const field = input.id as keyof StepOneType;
          return (
            <div key={field}>
              <label className="step__label" htmlFor={`${field}`}>
                {input.label}
              </label>
              <input
                value={(stepData as StepOneType)[field]}
                {...register(field)}
                onChange={(e) => handleInputChange(e)}
                className={`${
                  !!errors[field] && isValidated
                    ? "is-invalid"
                    : isValidated
                    ? "is-valid"
                    : ""
                } form-control`}
                type={input.type}
                id={field}
                name={field}
                maxLength={input.maxLength}
                placeholder={input.placeholder}
              />
              <div className="invalid-feedback">{errors[field]?.message}</div>
            </div>
          );
        })}
      </form>
      <StepsNavigation stepsNavigator={stepsNavigator} onNext={onNext} />
    </StepWrapper>
  );
};

export default StepOne;
