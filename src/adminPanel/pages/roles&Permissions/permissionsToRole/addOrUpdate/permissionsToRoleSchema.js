import * as z from "zod"

export const permissionToRoleSchema = z.object({
    role: z.number().min(1, 'Role is required'),
    permissions: z.array(
        z.object({
            controllerName: z.string(),
            actions: z.array(z.number()).min(1, 'At least one action must be selected for each permission'),
        })
    ).refine(
        permissions => permissions.some(p => p.actions.length > 0),
        'At least one action must be selected for any permission'
    )
});