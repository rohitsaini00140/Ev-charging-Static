import * as z from "zod"

export const permissionsToRoleSchema = z.object({
    role_id: z.string().trim().min(1, "Role name is required"),
    permission_id: z.string().trim().min(1, "Permission name is required")
})