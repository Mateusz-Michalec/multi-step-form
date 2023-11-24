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

export type StepOneType = z.infer<typeof StepOneForm> & {
  [key: string]: string;
};
