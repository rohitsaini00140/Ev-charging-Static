import * as z from 'zod';

export const roleSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    description: z.string().trim().min(1, "Description is required"),
    status: z.string().trim().min(1, "Status is required")
});