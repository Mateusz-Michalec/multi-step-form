import iconArcade from "../assets/icons/icon-arcade.svg";
import iconAdvanced from "../assets/icons/icon-advanced.svg";
import iconPro from "../assets/icons/icon-pro.svg";

export type StepTwoType = {
  plan: "Arcade" | "Advanced" | "Pro";
  billing: "Monthly" | "Yearly";
  [key: string]: string;
};

type PlanData = {
  plan: StepTwoType["plan"];
  billing: {
    Monthly: string;
    Yearly: string;
  };
  icon: string;
};

export const plansData: PlanData[] = [
  {
    plan: "Arcade",
    billing: {
      Monthly: "9",
      Yearly: "90",
    },
    icon: iconArcade,
  },
  {
    plan: "Advanced",
    billing: {
      Monthly: "12",
      Yearly: "120",
    },
    icon: iconAdvanced,
  },
  {
    plan: "Pro",
    billing: {
      Monthly: "15",
      Yearly: "150",
    },
    icon: iconPro,
  },
];
