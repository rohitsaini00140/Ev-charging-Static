import * as z from 'zod';

export const zoneSchema = z.object({
    organizationId: z.string().trim().min(1, "Organization id is required"),
    name: z.string().trim().min(1, "Name is required"),
    location: z.string().trim().min(1, "Location is required"),
    status: z.string().trim().min(1, "Status is required")
});