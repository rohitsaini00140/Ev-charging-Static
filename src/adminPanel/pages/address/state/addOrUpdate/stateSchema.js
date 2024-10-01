import * as z from 'zod';

export const stateSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    country_id: z.string().trim().min(1, "Country is required"),
});