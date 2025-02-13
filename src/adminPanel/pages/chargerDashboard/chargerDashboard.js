import { z } from "zod";

 export const chargerDashboardSchema = z.object({
  interval: z
    .string()
    .regex(/^\d+$/, "Interval must be a number") // Ensures only numbers are entered
    .nonempty("Interval is required"),
});