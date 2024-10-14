import * as z from 'zod';

export const deviceSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    project_id: z.number().int().min(1, "Project name is required" ),
    type: z.string().trim().min(1, "Type is required"),
    location: z.string().trim().min(1, "Location is required"),
    serial_number: z.string().trim().min(1, "Serial No. is required"),
    status: z.string().trim().min(1, "Status is required")
});