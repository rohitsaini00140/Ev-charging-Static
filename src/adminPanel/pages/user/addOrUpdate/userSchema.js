import * as z from 'zod';

export const userSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email"),
    phone: z.string()
        .trim()
        .min(1, "Mobile No. is required")
        .regex(/^([+]\d{2}[ ])?\d{10}$/, "Invalid mobile number"),
    roles: z.number().int().min(1, "Role is required"),
});