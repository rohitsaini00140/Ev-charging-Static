export const permissionsToRoleData = [
    {
        roleType: "Moderator",
        permissions: ["addUser", "addOrganization", "addZone", "addRole", "addPermission", "checkSaleRevenue", "checkChargingPoints"]
    },
    {
        roleType: "Admin",
        permissions: ["checkChargingPoints"]
    },
    {
        roleType: "user",
        permissions: ["checkSaleRevenue"]
    }
]

export const allRoles = ["Moderator", "Admin", "User"]

export const allPermissions = ["addUser", "addOrganization", "addZone", "addRole", "addPermission", "checkSaleRevenue", "checkChargingPoints"]