import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SearchableDropdown from '../../../component/searchableDropdown/SearchableDropdown';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userSchema } from './userSchema';
import { Typography } from '@mui/material';
import { inputStyle } from '../../../component/inputStyle';
import { useMemo, useState, useEffect } from 'react';
import { useGetAllClustersQuery } from '../../../../globalState/cluster/clusterApis';
import { useCreateUserMutation, useGetUserByIdQuery, useUpdateUserMutation } from '../../../../globalState/user/userApis';
import Alertbar from '../../../component/Alertbar';
import { useGetRolesQuery } from '../../../../globalState/roles/rolesApi';
import { useParams, useNavigate } from 'react-router-dom';



const role = JSON.parse(sessionStorage.getItem("role"))





function AddOrUpdateUserFields() {

    const [loading, setLoading] = useState(false);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const { id } = useParams()
    let navigate = useNavigate()

    const { data, isSuccess } = useGetUserByIdQuery(id, { skip: !id })

    const userForUpdate = (isSuccess && data)

    const { data: roleData, isSuccess: roleSuccess } = useGetRolesQuery()
    const { data: clusters, isSuccess: clustersSuccess } = useGetAllClustersQuery()

    const allRoleData = roleSuccess && roleData?.roles
    const allcluters = clustersSuccess && clusters?.clusters

    const [createUser] = useCreateUserMutation()
    const [updateUser] = useUpdateUserMutation()

    const defaultValues = useMemo(() => ({
        name: "",
        email: "",
        phone: "",
        role_id: null,
        cluster_id: null
    }), []);

    const { register, handleSubmit, watch, setValue, setError, reset, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: defaultValues
    });

    useEffect(() => {
        if (id && userForUpdate) {
            reset({
                name: userForUpdate.name || "",
                email: userForUpdate.email || "",
                phone: userForUpdate.phone || "",
                role_id: userForUpdate.role_id || null,
                cluster_id: userForUpdate.cluster_id || null,
                
            });
        } else {
            reset(defaultValues);
        }
    }, [id, userForUpdate, reset, defaultValues]);

    const onSubmit = async (data) => {
        setLoading(true);
        try {

            if (id) {

                await updateUser({ id, updatedUserData: data }).unwrap();

                navigate("/admin/user/view", { state: { message: 'User successfully updated!', severity: 'success' } });

            } else {

                await createUser(data).unwrap();

                reset(defaultValues)

                navigate("/admin/user/view", { state: { message: 'User successfully added!', severity: 'success' } });
            }

        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Error while submitting.',
                severity: 'error'
            });
            if (error.data && error.data.errors) {
                Object.entries(error.data.errors).forEach(([key, message]) => {
                    setError(key, { type: "server", message: message[0] });
                });
            }
            console.error("Error during submission:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar((prevState) => ({
            ...prevState,
            open: false
        }));
    };

    return (
        <>
            <form fullWidth onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 6 }}
                    >
                        {role?.user?.role?.name === "Superadmin" && <Stack width={"100%"}>
                            <SearchableDropdown
                                options={allcluters.length > 0 ? allcluters : []}
                                placeholder="Select Cluster"
                                value={watch("cluster_id")}
                                onChange={(newValue) => setValue("cluster_id", newValue,
                                    { shouldValidate: true }
                                )}
                            />
                            {errors.cluster_id && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.cluster_id.message}</Typography>}
                        </Stack>}
                        <Stack width={"100%"}>
                            <TextField
                                label="Name"
                                {...register("name", { required: true })}
                                value={watch("name") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.name && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.name.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <TextField
                                label="Email Address"
                                {...register("email", { required: true })}
                                value={watch("email") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.email && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.email.message}</Typography>}
                        </Stack>
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 6 }}
                    >
                        <Stack width={"100%"}>
                            <TextField
                                label="Mobile No."
                                {...register("phone", { required: true })}
                                value={watch("phone") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.phone && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.phone.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <SearchableDropdown
                                options={allRoleData.length > 0 ? allRoleData : []}
                                placeholder="Select Role"
                                value={watch("role_id")}
                                onChange={(newValue) => setValue("role_id", newValue,
                                    { shouldValidate: true }
                                )}
                            />
                            {errors.role_id && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.role_id.message}</Typography>}
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"end"}>
                        <LoadingButton
                            loading={loading}
                            type='submit'
                            sx={{
                                bgcolor: '#0ab39c',
                                color: 'white',
                                borderColor:'#0ab39c',
                                padding:"10px 15px",
                                '& .MuiLoadingButton-loadingIndicator': {
                                    color: 'white'
                                },
                                '&:hover': {
                                    bgcolor: '#089d88',
                                    color: 'white',
                                }
                            }}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="outlined"
                        >
                            Save
                        </LoadingButton>
                    </Stack>
                </Stack>
            </form>
            <Alertbar
                open={snackbar.open}
                onClose={handleCloseSnackbar}
                severity={snackbar.severity}
                message={snackbar.message}
                position={{ vertical: 'top', horizontal: 'right' }}
            />
        </>
    )
}

export default AddOrUpdateUserFields;