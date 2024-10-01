import * as z from 'zod';
export const contactschema = z.object({
    name: z.string().trim().min(1, "Please Enter Your Name").min(3, "Name Min 3 Char"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email format"),
    city: z.string().trim().min(1, "Please Enter Your City Name"),
    mobile: z.string().trim().min(1, "Please Enter Your Mobile No").min(10, "Mobile No in 10 Digit").max(10, "Only 10 Digit"),
    message: z.string().trim().min(1, "Please Write Something here")
});
