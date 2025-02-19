import * as z from "zod";

export const gunsSchema = z.object({
  name: z.string().trim().min(1, "Please Enter Connector Name"),
  max_power:  z.string().trim().min(1, "Please Enter Max Power"),

  voltage: z
    .string()
    .trim()
    .min(1, "Please Enter Voltage"),

  current_type: z.string().trim().min(1, "Please Select Current Type"),
  description: z.string().trim().optional(), // Allows an empty string
});
