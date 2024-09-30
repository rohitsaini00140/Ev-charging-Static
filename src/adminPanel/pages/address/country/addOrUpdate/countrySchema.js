import * as z from 'zod';

export const countrySchema = z.object({
    name: z.string().trim().min(1, "Name is required")
});