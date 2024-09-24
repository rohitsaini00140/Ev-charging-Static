import * as z from 'zod';
export const loginSchema = z.object({
    email: z.string().trim().min(1, "Email is required").email("Invalid email format"),
    password: z.string()
        .trim()
        // .min(1, "Password is required")
        .min(6, "Password should not be less than 6 characters")
});
