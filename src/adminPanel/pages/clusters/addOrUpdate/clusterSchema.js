import * as z from 'zod';

export const clusterSchema = z.object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    email: z.string().trim().min(1, "Email is required").email("Invalid email"),
    country_id: z.number().int().min(1, { message: "Country is required" }),
    state_id: z.number().int().min(1, { message: "State is required" }),
    city_id: z.number().int().min(1, { message: "City is required" }),
    location: z.string().trim().min(1, { message: "Location is required" }),
});