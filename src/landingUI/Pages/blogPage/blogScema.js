import * as z from 'zod';
export const blog_schema = z.object({
    name: z.string().trim().min(1, "Please Enter Your Name").min(3, "Name Min 3 Char"),
    email: z.string().trim().min(1, "Please Enter Your Email Address").email("Invalid email format"),
    message: z.string().trim().min(1, "Please Write Something here")
});
