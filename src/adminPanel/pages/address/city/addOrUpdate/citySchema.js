import * as z from 'zod';

export const citySchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    state_id: z.string().trim().min(1, "State is required"),
    postal_code: z.string().trim().min(1, "Postal code is required"),
});