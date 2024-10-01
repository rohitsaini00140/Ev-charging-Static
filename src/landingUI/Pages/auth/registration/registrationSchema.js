import * as z from 'zod';

export const registrationSchema = z.object({
    name: z.string().trim().min(1, "Please Enter Your Name"),
    email: z.string().trim().min(1, "Please Enter Your Email Address").email("Invalid email format"),
    password: z.string()
        .trim()
        .min(1, "Please Enter Your Password")
        .min(6, "Password should be not less than 6 characters"),
        password_confirmation: z.string().trim().min(1, "Please Enter Confirm Password")
}).refine(data => data.password === data.password_confirmation, {
    message: "Passwords did not match",
    path: ["password_confirmation"],
});
