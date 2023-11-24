import React from "react";
import { StepProps } from "../../App";
import { StepTwoType } from "../../models/StepTwo";
import iconArcade from "../../assets/icons/icon-arcade.svg";
import iconAdvanced from "../../assets/icons/icon-advanced.svg";
import iconPro from "../../assets/icons/icon-pro.svg";

type PlanData = {
  plan: StepTwoType["plan"];
  price: {
    monthly: string;
    yearly: string;
  };
  icon: string;
};

const plansData: PlanData[] = [
  {
    plan: "Arcade",
    price: {
      monthly: "9",
      yearly: "90",
    },
    icon: iconArcade,
  },
  {
    plan: "Advanced",
    price: {
      monthly: "12",
      yearly: "120",
    },
    icon: iconAdvanced,
  },
  {
    plan: "Pro",
    price: {
      monthly: "15",
      yearly: "150",
    },
    icon: iconPro,
  },
];

const StepTwo = ({ setFormData, goToNextStep }: StepProps) => {
  const plans: Plans[] = ["Arcade", "Advanced", "Pro"];

  return <></>;
};

export default StepTwo;
