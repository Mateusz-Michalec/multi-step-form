import { useForm } from "react-hook-form";
import useStepData from "../../hooks/useStepData";
import { StepOneForm, StepOneType } from "../../models/StepOne";
import { StepProps } from "../../App";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import NextStepBtn from "../NextStepBtn/NextStepBtn";

const StepOne = ({ setFormData, goToNextStep }: StepProps) => {
  const { stepData, handleInputChange } = useStepData({
    name: "",
    email: "",
    phone: "",
  });
  const [isValidated, setIsValidated] = useState(false);

  const {
    trigger,
    register,
    formState: { errors, isValid },
  } = useForm<StepOneType>({
    resolver: zodResolver(StepOneForm),
  });

  useEffect(() => {
    if (isValidated && isValid) {
      setFormData((prev) => ({ ...prev, ...stepData }));
      goToNextStep();
    }
  }, [isValidated]);

  const validateStep = () => {
    trigger();
    setIsValidated(true);
  };

  const inputConfigs = [
    {
      label: "Name",
      type: "text",
      id: "name",
      placeholder: "e.g Stephen King",
      maxLength: 30,
    },
    {
      label: "Email Address",
      type: "email",
      id: "email",
      placeholder: "e.g. stephenking@lorem.com",
      maxLength: 50,
    },
    {
      label: "Phone Number",
      type: "tel",
      id: "phone",
      placeholder: "e.g. 123 456 789",
      maxLength: 9,
    },
  ];

  return (
    <>
      <form className="d-flex flex-column gap-3">
        {inputConfigs.map((input) => {
          const field = input.id;
          return (
            <div key={field}>
              <label className="step__label" htmlFor={`${field}`}>
                {input.label}
              </label>
              <input
                value={stepData[field]}
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
      <NextStepBtn validateStep={validateStep} />
    </>
  );
};

export default StepOne;
