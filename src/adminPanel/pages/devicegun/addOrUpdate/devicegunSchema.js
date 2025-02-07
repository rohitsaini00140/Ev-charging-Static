import * as z from 'zod';

export const devicegunSchema = z.object({
    device_id: z.number().int().min(1, "Please Enter a Valid Number"),
    gun_type_id: z.number().int().min(1, "Please Enter a Valid Number"),
    gun_slot: z.number().int().min(1, "Please Enter a Valid Number"),
    // cluster_id: z.number().int().nullable().refine((val) => val !== null, {
    //     message: "Please Select Cluster",
    // }),
});
