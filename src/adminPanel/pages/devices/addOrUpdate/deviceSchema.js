import * as z from 'zod';
export const deviceSchema = z.object({
    name: z.string().trim().min(1, "Please Enter Device Name"),
    project_id: z.number().int().min(1, "Please Select Project" ),
    cluster_id: z.number().int().min(1, "Please Select Cluster" ),
    type: z.string().trim().min(1, "Please Select Device Type"),
    location: z.string().trim().min(1, "Please Enter Location"),
    serial_number: z.string().trim().min(1, "Please Enter Device Serial No"),
    // status: z.string().trim().min(1, "Please Select Status")
});