import * as z from 'zod';

export const devicegunSchema = z.object({
    device_id:z.string().trim().min(1, " Please Enter  Name"),
    email: z.string().trim().min(1, " Please Enter  Name"),
    phone: z.string().trim().min(1, " Please Enter  Name"),
    // cluster_id: z.number().int().nullable().refine((val) => val !== null, {
    //     message: " Please Select Cluster",
    // }),
});