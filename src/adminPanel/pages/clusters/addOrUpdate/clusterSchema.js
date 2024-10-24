import * as z from 'zod';
export const clusterSchema = z.object({
    name: z.string().trim().min(1, { message: "Please Enter Cluster Name" }),
    email: z.string().trim().min(1, "Please Enter Email Address").email("Invalid email"),
    country_id: z.number().int().nullable().refine((val) => val !== null, {
        message: " Please Select Country"
    }),
    state_id: z.number().int().nullable().refine((val) => val !== null, {
        message: " Please Select State"
    }),
    city_id: z.number().int().nullable().refine((val) => val !== null, {
        message: " Please Select City"
    }),
    location: z.string().trim().min(1, { message: "Please Enter Location" }),
});

// cluster_id: z.number().int().nullable().refine((val) => val !== null, {
//     message: " Please Select Cluster",
