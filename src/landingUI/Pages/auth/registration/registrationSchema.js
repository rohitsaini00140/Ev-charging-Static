import * as z from 'zod';

export const registrationSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email format"),
    password: z.string()
        .trim()
        .min(1, "Password is required")
        .min(6, "Password should be not less than 6 characters"),
        password_confirmation: z.string().trim().min(1, "Confirm password is required")
}).refine(data => data.password === data.password_confirmation, {
    message: "Passwords did not match",
    path: ["password_confirmation"],
});
