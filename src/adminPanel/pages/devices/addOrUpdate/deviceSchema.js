import * as z from 'zod';
export const deviceSchema = z.object({
    name: z.string().trim().min(1, "Please Enter Device Name"),
    project_id: z.number().int().nullable().refine((val) => val !== null, {
        message: " Please Select Project"
    }),
    type: z.string().trim().min(1, "Please Select Device Type"),
    location: z.string().trim().min(1, "Please Enter Location"),
    serial_number: z.string().trim().min(1, "Please Enter Device Serial No"),
    device_manufacturer: z.string().trim().min(1, "Please Enter Device Manufacturer"),
    cluster_id: z.number().int().nullable().refine((val) => val !== null, {
        message: " Please Select Cluster"
    }),
    interval: z.string().trim().min(1, "Please Enter Heartbeat Interval").refine(val => !isNaN(Number(val)), {
        message: "Please enter a valid number",
      }).transform(val => Number(val)),
      max_guns:z.string().trim().min(1, "Please Select Max Guns"),
      max_power: z
      .union([z.number(), z.string().regex(/^\d+$/, "Please enter a valid number")])
      .transform((val) => Number(val))
      .refine((val) => val >= 1, { message: "Please Select Max Power" })
    

});