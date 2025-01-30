import * as z from 'zod';

export const cpoSchema = z.object({
    name: z.string().trim().min(1, " Please Enter  Name"),
    email: z.string().trim().min(1, " Please Enter Email Id").email(" Invalid email"),
    phone: z.string()
        .trim()
        .min(1, " Please Enter Mobile No")
        .regex(/^([+]\d{2}[ ])?\d{10}$/, " Invalid Mobile Number"),
    // cluster_id: z.number().int().nullable().refine((val) => val !== null, {
    //     message: " Please Select Cluster",
    // }),
});