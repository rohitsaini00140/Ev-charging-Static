import * as z from 'zod';

export const zoneSchema = z.object({
    organization_id: z.string().trim().min(1, "Organization is required"),
    name: z.string().trim().min(1, "Name is required"),
    location: z.string().trim().min(1, "Location is required")
});