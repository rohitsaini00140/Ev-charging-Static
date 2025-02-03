import * as z from 'zod';

export const projectSchema = z.object({
    name: z.string().trim().min(1, "Please Enter Project Name"),
    cluster_id: z.number().int().nullable().refine((val) => val !== null, {
        message: " Please Select Cluster"
    }),
    // user_id: z.number().int().min(1, "Please Select User"),
    location: z.string().trim().min(1, "Please Enter Location"),
    network_type: z.string().trim().min(1, "Please Select Network Type"),
});