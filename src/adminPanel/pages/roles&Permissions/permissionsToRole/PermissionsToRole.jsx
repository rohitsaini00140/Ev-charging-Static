// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Scrollbar from "../../../component/scrollbar/Scrollbar"
// import { Grid } from '@mui/system';
// import Checkbox from '@mui/material/Checkbox';
// import { useGetAllRolesQuery } from '../../../../globalState/roles/rolesApi';
// import { useGetAllPermissionsQuery } from '../../../../globalState/permission/permissionApis';

// function PermissionToRole() {

//     const { data: roleData, isSuccess: roleSuccess } = useGetAllRolesQuery()

//     const { data: permissionData, isSuccess: permissionSuccess } = useGetAllPermissionsQuery()

//     const allRoleData = roleSuccess && roleData?.roles
//     const allPermissionData = permissionSuccess && permissionData?.permissions

//     return (
//         <Container>
//             <Stack
//                 direction="row"
//                 alignItems="center"
//                 justifyContent="space-between"
//                 mb={5}
//             >
//                 <Typography variant="h4" color="white">Permissions to role</Typography>
//             </Stack>
//             <Card sx={{ p: "2rem", bgcolor: "#181837" }}>
//                 <Scrollbar>
//                     {allRoleData.length > 0
//                         &&
//                         allRoleData.map((role, i) => {
//                             return <Grid container
//                                 sx={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     mb: "2rem"
//                                 }}
//                                 size={12}
//                             >
//                                 <Grid size={{ sm: 2, xs: 12 }}>
//                                     <Typography key={i} variant='h6' color="white">{role.name}:</Typography>
//                                 </Grid>
//                                 <Grid sx={{ display: "flex", flexDirection: "row" }} size={{ sm: 10, xs: 12 }}>
//                                     {allPermissionData.length > 0
//                                         &&
//                                         allPermissionData.map((permission, i) => {
//                                             return <Stack sx={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//                                                 <Checkbox />
//                                                 <Typography key={i} color="white" sx={{ whiteSpace: "nowrap" }}>{permission.permission_name}</Typography>
//                                             </Stack>
//                                         })
//                                     }
//                                 </Grid>
//                             </Grid>
//                         })
//                     }
//                 </Scrollbar>
//             </Card>
//         </Container>
//     );
// }

// export default PermissionToRole;




import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Scrollbar from "../../../component/scrollbar/Scrollbar";
import { Grid } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import { useGetRolesQuery } from '../../../../globalState/roles/rolesApi';
import { useGetAllPermissionsQuery } from '../../../../globalState/permission/permissionApis';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import SearchableDropdown from "../../../component/searchableDropdown/SearchableDropdown"

const actionsName = ["View", "Add", "Update", "Soft delete", "Restore"]

function PermissionToRole() {
    const { data: roleData, isSuccess: roleSuccess, error: roleError } = useGetRolesQuery();
    const { data: permissionData, isSuccess: permissionSuccess, error: permissionError } = useGetAllPermissionsQuery();

    if (roleError || permissionError) {
        return <Typography color="error">Error loading data.</Typography>;
    }

    const allRoleData = roleSuccess && roleData?.roles;
    const allPermissionData = permissionSuccess && permissionData?.permissions;
    const allPermissionDataKeys = allPermissionData.length > 0 && allPermissionData.map(ele => ele.controller_name);
    // const allActions = Object.values(allPermissionData[0])

    console.log(allPermissionData.length)

    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" color="white">Permissions to Role</Typography>
            </Stack>
            <Card sx={{ p: "2rem", bgcolor: "#181837" }}>
                <Scrollbar>
                    {/* Wrap everything in a Box with overflowX to allow horizontal scrolling */}
                    {allRoleData?.length > 0 && actionsName?.length > 0 ? (
                        <Box sx={{ overflowX: 'auto' }}>
                            <Stack width={"100%"} sx={{ margin: "2rem 0rem" }}>
                                {/* <Typography variant="h6" color="white" mb={2}>Roles</Typography> */}
                                <SearchableDropdown
                                    options={[]}
                                    placeholder="Select role"
                                // value={watch("role_id") || 0}
                                // onChange={(newValue) => setValue("role_id", newValue,
                                //     { shouldValidate: true },
                                // )}
                                />
                            </Stack>
                            <Grid container sx={{ borderBottom: '1px solid #ccc', pb: 2, flexWrap: 'nowrap', minWidth: '600px' }}>
                                {/* Table Header */}
                                <Grid item sx={{ minWidth: 200 }}>
                                    <Typography variant="h6" color="white">Permissions</Typography>
                                </Grid>
                                {actionsName.map((action, i) => (
                                    <Grid item key={i} sx={{ textAlign: 'center', minWidth: 150 }}>
                                        <Typography variant="h6" color="white">{action}</Typography>
                                    </Grid>
                                ))}
                            </Grid>

                            <Divider sx={{ mb: 2 }} />

                            {/* Permissions List */}
                            {allPermissionDataKeys.length > 0
                                &&
                                allPermissionDataKeys.map((permission, i) => (
                                    <Grid container key={i} sx={{ mb: 2, alignItems: 'center', flexWrap: 'nowrap', minWidth: '600px' }}>
                                        {/* Permission Name */}
                                        <Grid item sx={{ minWidth: 200 }}>
                                            <Typography color="white" sx={{ whiteSpace: 'nowrap' }}>{permission.charAt(0).toUpperCase() + permission.slice(1).toLowerCase()}
                                            </Typography>
                                        </Grid>

                                        {/* Role Permissions Checkboxes */}
                                        {actionsName.map((action, j) => (
                                            <Grid item key={j} sx={{ textAlign: 'center', minWidth: 150 }}>
                                                <Checkbox />
                                            </Grid>
                                        ))}
                                    </Grid>
                                ))
                            }
                        </Box>
                    ) : (
                        <Typography color="white">Loading roles and permissions...</Typography>
                    )}
                </Scrollbar>
            </Card>
        </Container>
    );
}

export default PermissionToRole;