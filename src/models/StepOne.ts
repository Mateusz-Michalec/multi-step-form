import { z } from "zod";

export const StepOneForm = z.object({
  name: z
    .string()
    .trim()
    .min(4, { message: "Name must be at least 4 characters long" }),
  email: z.string().email().trim(),
  phone: z
    .string()
    .trim()
    .min(9, { message: "Phone must be at least 9 characters long" })
    .regex(/^[0-9]*$/, "Invalid number!"),
});

export type StepOneType = z.infer<typeof StepOneForm>;

export const stepOneinputConfigs = [
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
