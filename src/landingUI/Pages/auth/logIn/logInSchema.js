import * as z from 'zod';
export const loginSchema = z.object({
    username: z.string().trim()
    .min(1, "Please Enter Your Username"),
    password: z.string()
        .trim()
         .min(1, "Please Enter Your Password")
        .min(6, "Password should not be less than 6 characters")
});
