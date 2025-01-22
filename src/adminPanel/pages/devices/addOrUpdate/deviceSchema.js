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
});