import * as z from 'zod';

export const projectSchema = z.object({
    name: z.string().trim().min(1, "Project name is required"),
    cluster_id: z.number().int().min(1, "Cluster name is required"),
    user_id: z.number().int().min(1, "User name is required"),
    location: z.string().trim().min(1, "Location is required")
});