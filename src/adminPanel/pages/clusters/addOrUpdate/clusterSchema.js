import * as z from 'zod';

export const clusterSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    country_id: z.string().trim().min(1, "Country is required"),
    state_id: z.string().trim().min(1, "State is required"),
    city_id: z.string().trim().min(1, "City is required"),
    location: z.string().trim().min(1, "Location is required")
});