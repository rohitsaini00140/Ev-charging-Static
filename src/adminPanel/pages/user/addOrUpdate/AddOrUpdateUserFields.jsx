import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SearchableDropdown from '../../../component/searchableDropdown/SearchableDropdown';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userSchema } from './userSchema';
import { Typography } from '@mui/material';
import { inputStyle } from '../../../component/inputStyle';
import { useMemo, useState, useEffect } from 'react';
import { useCreateUserMutation, useGetUserByIdQuery, useUpdateUserMutation } from '../../../../globalState/user/userApis';
import Alertbar from '../../../component/Alertbar';
import { useGetAllRolesQuery } from '../../../../globalState/roles/rolesApi';
import { useParams, useNavigate } from 'react-router-dom';

function AddOrUpdateUserFields() {

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const { id } = useParams()
    let navigate = useNavigate()

    const { data, isSuccess } = useGetUserByIdQuery(id, { skip: !id })

    const userForUpdate = (isSuccess && data)

    const { data: roleData, isSuccess: roleSuccess } = useGetAllRolesQuery()

    const allRoleData = roleSuccess && roleData?.roles

    const [createUser] = useCreateUserMutation()
    const [updateUser] = useUpdateUserMutation()

    const defaultValues = useMemo(() => ({
        name: "",
        email: "",
        phone: "",
        role_id: 0,
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
                role_id: userForUpdate.role_id || 0,
            });
        } else {
            reset(defaultValues);
        }
    }, [id, userForUpdate, reset, defaultValues]);

    const onSubmit = async (data) => {
        try {

            if (id) {

                await updateUser({ id, updatedUserData: data }).unwrap();
                setSnackbar({
                    open: true,
                    message: 'User successfully updated!',
                    severity: 'success'
                });

                setTimeout(() => {
                    navigate("/admin/user/view");
                }, 3000);

            } else {

                await createUser(data).unwrap();

                reset(defaultValues)

                setSnackbar({
                    open: true,
                    message: 'User successfully created!',
                    severity: 'success'
                })
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
                                placeholder="Select roles"
                                value={watch("role_id") || 0}
                                onChange={(newValue) => setValue("role_id", newValue,
                                    { shouldValidate: true },
                                )}
                            />
                            {errors.role_id && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.role_id.message}</Typography>}
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"end"}>
                        <Button
                            sx={{
                                color: "white",
                                borderRadius: "5px",
                                bgcolor: "#0ab39c",
                                width: "5rem",
                                height: "2.5rem",
                                BoxShadow: "none",
                                '&:hover': {
                                    bgcolor: "#0ab39c"
                                }
                            }}
                            type='submit'
                        >
                            <Icon
                                icon="mdi:printer"
                                style={{ fontSize: "1.2rem", color: "white", marginRight: ".3rem" }}
                            />
                            Save
                        </Button>
                    </Stack>
                </Stack>
            </form>
            <Alertbar
                open={snackbar.open}
                onClose={handleCloseSnackbar}
                severity={snackbar.severity}
                message={snackbar.message}
                position={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </>
    )
}

export default AddOrUpdateUserFields;