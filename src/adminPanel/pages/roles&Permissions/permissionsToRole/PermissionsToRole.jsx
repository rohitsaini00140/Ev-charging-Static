// import { useSelector, useDispatch } from 'react-redux';
// import { togglePermission, toggleAllPermissionsForController } from '../../../../globalState/permission/permissionSlices';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Scrollbar from "../../../component/scrollbar/Scrollbar";
// import { Grid } from '@mui/system';
// import Checkbox from '@mui/material/Checkbox';
// import { useGetRolesQuery } from '../../../../globalState/roles/rolesApi';
// import { useGetAllPermissionsQuery } from '../../../../globalState/permission/permissionApis';
// import Divider from '@mui/material/Divider';
// import Box from '@mui/material/Box';
// import SearchableDropdown from "../../../component/searchableDropdown/SearchableDropdown";
// import { setRole } from '../../../../globalState/roles/rolesSlices';

// const actionsName = ["view", "add", "update", "softDelete", "restore"];

// function PermissionToRole() {
//     const { data: roleData, isSuccess: roleSuccess, error: roleError } = useGetRolesQuery();
//     const { data: permissionData, isSuccess: permissionSuccess, error: permissionError } = useGetAllPermissionsQuery();

//     const { role } = useSelector(state => state.role);
//     const { selectedPermissions } = useSelector(state => state.permission);

//     console.log(selectedPermissions)

//     const dispatch = useDispatch();

//     const handlePermissionChange = (controllerName, actionId) => {
//         dispatch(togglePermission({ controllerName, actionId }));
//     };

//     const handleControllerChange = (controllerName, permissions, isChecked) => {
//         const allActionIds = permissions.map(permission => permission.id);
//         dispatch(toggleAllPermissionsForController({ controllerName, allActionIds, isChecked }));
//     };

//     const handleRoleSelect = (value) => {
//         dispatch(setRole(value));
//     };

//     if (roleError || permissionError) {
//         return <Typography color="error">Error loading data.</Typography>;
//     }

//     const allRoleData = roleSuccess && roleData?.roles;
//     const allPermissionData = permissionSuccess && permissionData?.permissions;
//     const allPermissionDataKeys = allPermissionData.length > 0 && allPermissionData.map(ele => ele.controller_name);

//     return (
//         <Container>
//             <Stack
//                 direction="row"
//                 alignItems="center"
//                 justifyContent="space-between"
//                 mb={5}
//             >
//                 <Typography variant="h4" color="white">Permissions to Role</Typography>
//             </Stack>
//             <Card sx={{ p: "2rem", bgcolor: "#181837" }}>
//                 <Scrollbar>
//                     {allRoleData?.length > 0 && actionsName?.length > 0 ? (
//                         <Box sx={{ overflowX: 'auto' }}>
//                             <Stack width={"100%"} sx={{ margin: "2rem 0rem" }}>
//                                 <SearchableDropdown
//                                     options={allRoleData.length > 0 ? allRoleData : []}
//                                     placeholder="Select role"
//                                     value={role}
//                                     onChange={(newValue) => handleRoleSelect(newValue)}
//                                 />
//                             </Stack>
//                             <Grid container sx={{ borderBottom: '1px solid #ccc', pb: 2, flexWrap: 'nowrap', minWidth: '600px' }}>
//                                 <Grid item sx={{ minWidth: 200 }}>
//                                     <Typography variant="h6" color="white">Permissions</Typography>
//                                 </Grid>
//                                 {actionsName.map((action, i) => (
//                                     <Grid item key={i} sx={{ textAlign: 'center', minWidth: 150 }}>
//                                         <Typography variant="h6" color="white">{action}</Typography>
//                                     </Grid>
//                                 ))}
//                             </Grid>

//                             <Divider sx={{ mb: 2 }} />

//                             {allPermissionDataKeys.length > 0 &&
//                                 allPermissionData.map((permissionData, i) => {
//                                     const isAllChecked = permissionData.permissions.every(
//                                         action => selectedPermissions[permissionData.controller_name]?.actions.includes(action.id)
//                                     );
//                                     return (
//                                         <Grid container key={i} sx={{ mb: 2, alignItems: 'center', flexWrap: 'nowrap', minWidth: '600px' }}>
//                                             <Grid item sx={{ minWidth: 200, display: 'flex', alignItems: 'center' }}>
//                                                 <Checkbox
//                                                     checked={isAllChecked}
//                                                     onChange={() => handleControllerChange(permissionData.controller_name, permissionData.permissions, !isAllChecked)}
//                                                 />
//                                                 <Typography color="white" sx={{ whiteSpace: 'nowrap' }}>
//                                                     {permissionData.controller_name.charAt(0).toUpperCase() + permissionData.controller_name.slice(1).toLowerCase()}
//                                                 </Typography>
//                                             </Grid>
//                                             {permissionData.permissions.map((action, j) => (
//                                                 <Grid item key={j} sx={{ textAlign: 'center', minWidth: 150 }}>
//                                                     <Checkbox
//                                                         checked={!!selectedPermissions[permissionData.controller_name]?.actions.includes(action.id)}
//                                                         onChange={() => handlePermissionChange(permissionData.controller_name, action.id)}
//                                                     />
//                                                 </Grid>
//                                             ))}
//                                         </Grid>
//                                     );
//                                 })
//                             }
//                         </Box>
//                     ) : (
//                         <Typography color="white">Loading roles and permissions...</Typography>
//                     )}
//                 </Scrollbar>
//             </Card>
//         </Container>
//     );
// }

// export default PermissionToRole;






import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { togglePermission, toggleAllPermissionsForController } from '../../../../globalState/permission/permissionSlices';
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
import SearchableDropdown from "../../../component/searchableDropdown/SearchableDropdown";
import { setRole } from '../../../../globalState/roles/rolesSlices';
import { useParams, useNavigate } from 'react-router-dom';
import { permissionToRoleSchema } from "../permissionsToRole/addOrUpdate/permissionsToRoleSchema"

const actionsName = ["view", "add", "update", "softDelete", "restore"];

function PermissionToRole() {
    const { data: roleData, isSuccess: roleSuccess, error: roleError } = useGetRolesQuery();
    const { data: permissionData, isSuccess: permissionSuccess, error: permissionError } = useGetAllPermissionsQuery();

    const { role } = useSelector(state => state.role);
    const { selectedPermissions } = useSelector(state => state.permission);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams(); // for checking if it's an update form

    // react-hook-form setup with Zod validation
    const { handleSubmit, setValue, formState: { errors }, watch } = useForm({
        resolver: zodResolver(permissionToRoleSchema),
        defaultValues: {
            role: '',
            permissions: []
        }
    });

    // Set role in form state
    const handleRoleSelect = (value) => {
        setValue('role', value);
        dispatch(setRole(value));
    };

    // Handle permissions change in form state
    const handlePermissionChange = (controllerName, actionId) => {
        dispatch(togglePermission({ controllerName, actionId }));
    };

    const handleControllerChange = (controllerName, permissions, isChecked) => {
        const allActionIds = permissions.map(permission => permission.id);
        dispatch(toggleAllPermissionsForController({ controllerName, allActionIds, isChecked }));
    };

    // On form submission
    const onSubmit = (data) => {
        if (id) {
            // Update form behavior
            console.log('Updating existing role with data:', data);
            // API call to update the role with permissions
        } else {
            // Create form behavior
            console.log('Creating new role with data:', data);
            // API call to create the role with permissions
        }
        navigate('/success'); // Navigate to success page after submission
    };

    if (roleError || permissionError) {
        return <Typography color="error">Error loading data.</Typography>;
    }

    const allRoleData = roleSuccess && roleData?.roles;
    const allPermissionData = permissionSuccess && permissionData?.permissions;
    const allPermissionDataKeys = allPermissionData.length > 0 && allPermissionData.map(ele => ele.controller_name);

    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" color="white">{id ? 'Update' : 'Create'} Role Permissions</Typography>
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ p: "2rem", bgcolor: "#181837" }}>
                    <Scrollbar>
                        {allRoleData?.length > 0 && actionsName?.length > 0 ? (
                            <Box sx={{ overflowX: 'auto' }}>
                                <Stack width={"100%"} sx={{ margin: "2rem 0rem" }}>
                                    <SearchableDropdown
                                        options={allRoleData.length > 0 ? allRoleData : []}
                                        placeholder="Select role"
                                        value={watch('role')}
                                        onChange={(newValue) => handleRoleSelect(newValue)}
                                    />
                                    {errors.role && <Typography color="error">{errors.role.message}</Typography>}
                                </Stack>
                                <Grid container sx={{ borderBottom: '1px solid #ccc', pb: 2, flexWrap: 'nowrap', minWidth: '600px' }}>
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

                                {allPermissionDataKeys.length > 0 &&
                                    allPermissionData.map((permissionData, i) => {
                                        const isAllChecked = permissionData.permissions.every(
                                            action => selectedPermissions[permissionData.controller_name]?.actions.includes(action.id)
                                        );
                                        return (
                                            <Grid container key={i} sx={{ mb: 2, alignItems: 'center', flexWrap: 'nowrap', minWidth: '600px' }}>
                                                <Grid item sx={{ minWidth: 200, display: 'flex', alignItems: 'center' }}>
                                                    <Checkbox
                                                        checked={isAllChecked}
                                                        onChange={() => handleControllerChange(permissionData.controller_name, permissionData.permissions, !isAllChecked)}
                                                    />
                                                    <Typography color="white" sx={{ whiteSpace: 'nowrap' }}>
                                                        {permissionData.controller_name.charAt(0).toUpperCase() + permissionData.controller_name.slice(1).toLowerCase()}
                                                    </Typography>
                                                </Grid>
                                                {permissionData.permissions.map((action, j) => (
                                                    <Grid item key={j} sx={{ textAlign: 'center', minWidth: 150 }}>
                                                        <Checkbox
                                                            checked={!!selectedPermissions[permissionData.controller_name]?.actions.includes(action.id)}
                                                            onChange={() => handlePermissionChange(permissionData.controller_name, action.id)}
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        );
                                    })
                                }
                                {errors.permissions && <Typography color="error">{errors.permissions.message}</Typography>}
                            </Box>
                        ) : (
                            <Typography color="white">Loading roles and permissions...</Typography>
                        )}
                    </Scrollbar>
                    <button type="submit">{id ? 'Update' : 'Create'}</button>
                </Card>
            </form>
        </Container>
    );
}

export default PermissionToRole;