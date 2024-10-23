import * as z from 'zod';
export const clusterSchema = z.object({
    name: z.string().trim().min(1, { message: "Enter Cluster Name" }),
    email: z.string().trim().min(1, "Enter Cluster Email").email("Invalid email"),
    country_id: z.number().int().min(1, { message: "Please Select Country" }),
    state_id: z.number().int().min(1, { message: "Please Select State" }),
    city_id: z.number().int().min(1, { message: "Please Select City" }),
    location: z.string().trim().min(1, { message: "Please Enter Location" }),
});