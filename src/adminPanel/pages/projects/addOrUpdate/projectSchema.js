import * as z from 'zod';

export const projectSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    cluster_id: z.number().int().min(1, { message: "Cluster name is required" }),
    user_id: z.number().int().min(1, "User name is required"),
    location: z.string().trim().min(1, "Location is required")
});