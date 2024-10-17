import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Scrollbar from "../../../component/scrollbar/Scrollbar"
import { permissionsToRoleData, allRoles, allPermissions } from './permissionsToRoleData';
import { Grid } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import { useGetAllRolesQuery } from '../../../../globalState/roles/rolesApi';
import { useGetAllPermissionsQuery } from '../../../../globalState/permission/permissionApis';

function PermissionToRole() {

    const { data: roleData, isSuccess: roleSuccess } = useGetAllRolesQuery()

    const { data: permissionData, isSuccess: permissionSuccess } = useGetAllPermissionsQuery()

    const allRoleData = roleSuccess && roleData?.roles
    const allPermissionData = permissionSuccess && permissionData?.permissions

    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" color="white">Permissions to role</Typography>
            </Stack>
            <Card sx={{ p: "2rem", bgcolor: "#181837" }}>
                <Scrollbar>
                    {allRoleData.length > 0
                        &&
                        allRoleData.map((role, i) => {
                            return <Grid container
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: "2rem"
                                }}
                                size={12}
                            >
                                <Grid size={{ sm: 2, xs: 12 }}>
                                    <Typography key={i} variant='h6' color="white">{role.name}:</Typography>
                                </Grid>
                                <Grid sx={{ display: "flex", flexDirection: "row" }} size={{ sm: 10, xs: 12 }}>
                                    {allPermissionData.length > 0
                                        &&
                                        allPermissionData.map((permission, i) => {
                                            return <Stack sx={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                <Checkbox />
                                                <Typography key={i} color="white" sx={{ whiteSpace: "nowrap" }}>{permission.permission_name}</Typography>
                                            </Stack>
                                        })
                                    }
                                </Grid>
                            </Grid>
                        })
                    }
                </Scrollbar>
            </Card>
        </Container>
    );
}

export default PermissionToRole;