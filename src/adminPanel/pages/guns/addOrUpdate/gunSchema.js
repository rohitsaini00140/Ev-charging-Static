import * as z from "zod";

export const gunsSchema = z.object({
  name: z.string().trim().min(1, "Please Enter Gun Name"),
  max_power: z
    .string()
    .trim()
    .min(1, "Please Enter Max Power")
    .refine((val) => !isNaN(Number(val)), {
      message: "Please enter a valid Max Power",
    })
    .transform((val) => Number(val)), // Convert to number

  voltage: z
    .string()
    .trim()
    .min(1, "Please Enter Voltage")
    .refine((val) => !isNaN(Number(val)), {
      message: "Please enter a valid voltage",
    })
    .transform((val) => Number(val)), // Convert to number

  current_type: z.string().trim().min(1, "Please Select Current Type"),
  description: z.string().trim().optional(), // Allows an empty string
});
