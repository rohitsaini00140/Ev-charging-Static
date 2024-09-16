import * as z from 'zod';

export const registrationSchema = z.object({
    name: z.string().trim().min(1, "Title is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email format"),
    password: z.string()
        .trim()
        .min(1, "Password is required")
        .min(6, "Password should not be less than 6 characters"),
    confirm_Password: z.string().trim().min(1, "Confirm password is required")
}).refine(data => data.password === data.confirm_Password, {
    message: "Passwords do not match",
    path: ["confirm_Password"],
});
