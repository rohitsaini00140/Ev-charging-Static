import * as z from 'zod';

export const roleSchema = z.object({
    name: z.string().trim().min(1, "Please Enter Role Name")
});