import * as z from 'zod';

export const userSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email"),
    mobile_No: z.string()
        .trim()
        .min(1, "Mobile No. is required")
        .regex(/^([+]\d{2}[ ])?\d{10}$/, "Invalid mobile number"),
    role: z.string().trim().min(1, "Role is required"),
    status: z.string().trim().min(1, "Status is required")
});