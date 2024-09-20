import * as z from 'zod';

export const organizationSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email"),
    address: z.string().trim().min(1, "Address is required")
});