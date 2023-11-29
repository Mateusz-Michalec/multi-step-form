export type Addon = {
  addon: string;
  desc: string;
  price: {
    monthly: number;
    yearly: number;
  };
};

export type StepThreeType = {
  addons: Addon[];
};

export const addonsData: Addon[] = [
  {
    addon: "Online service",
    desc: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    addon: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    addon: "Customizable profile",
    desc: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];
