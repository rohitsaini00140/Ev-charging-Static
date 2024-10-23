import * as z from 'zod';
export const clusterSchema = z.object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    email: z.string().trim().min(1, "Email is required").email("Invalid email"),
    country_id: z.number().int().nullable().refine((val) => val !== null, {
        message: " Please Select Cluster"
    }),
    state_id: z.number().int().nullable().refine((val) => val !== null, {
        message: " Please Select Cluster"
    }),
    city_id: z.number().int().nullable().refine((val) => val !== null, {
        message: " Please Select Cluster"
    }),
    location: z.string().trim().min(1, { message: "Location is required" }),
});

// cluster_id: z.number().int().nullable().refine((val) => val !== null, {
//     message: " Please Select Cluster",
