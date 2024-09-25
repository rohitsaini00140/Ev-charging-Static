import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { organizationSchema } from './organizationSchema';
import { Typography } from '@mui/material';
import { useAddOrganizationMutation, useGetOrganizationQuery, useUpdateOrganizationMutation } from '../../../globalState/organization/organizationApis';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Alertbar from '../../../component/Alertbar';
import { inputStyle } from './addOrUpdateOrganizationStyle';


function AddOrUpdateOrganizationFields() {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });
    let { id } = useParams()

    let navigate = useNavigate()

    const { pageNo } = useSelector(state => state.organization);
    const { data, isSuccess } = useGetOrganizationQuery({ page: pageNo })

    const organizationForUpdate = (isSuccess && data?.data) && data.data.find(ele => ele.id === Number(id))

    const [addOrganization] = useAddOrganizationMutation()

    const [updateOrganization] = useUpdateOrganizationMutation()

    const defaultValues = {
        name: organizationForUpdate ? organizationForUpdate.name : "",
        email: organizationForUpdate ? organizationForUpdate.email : "",
        address: organizationForUpdate ? organizationForUpdate.address : ""
    }

    const { register, handleSubmit, setError, reset, watch, formState: { errors } } = useForm({
        resolver: zodResolver(organizationSchema),
        defaultValues: defaultValues
    });

    useEffect(() => {
        if (!id) {
            reset({
                name: "",
                email: "",
                address: ""
            });
        } else if (organizationForUpdate) {
            reset({
                name: organizationForUpdate && organizationForUpdate.name,
                email: organizationForUpdate && organizationForUpdate.email,
                address: organizationForUpdate && organizationForUpdate.address
            });
        }
    }, [id, organizationForUpdate, reset]);

    const onSubmit = async (data) => {
        try {
            if (id) {

                await updateOrganization({ id, updatedOrganizationData: data }).unwrap();

                setSnackbar({
                    open: true,
                    message: 'Organization successfully updated!',
                    severity: 'success'
                });

                setTimeout(() => {
                    navigate("/admin/organization/view");
                }, 3000);

            } else {
                await addOrganization(data).unwrap();
                setSnackbar({
                    open: true,
                    message: 'Organization successfully added!',
                    severity: 'success'
                });
            }
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Error while submitting.',
                severity: 'error'
            });
            if (!error.data.success) {
                if (error.data.errors) {
                    if (error.data.errors.name) {
                        setError("name", {
                            type: "server",
                            message: error.data.errors.name[0]
                        });
                    }
                    if (error.data.errors.email) {
                        setError("email", {
                            type: "server",
                            message: error.data.errors.email[0]
                        });
                    }
                }
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
                            {errors.name && <Typography color={"red"} mt={".5rem"}>*{errors.name.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <TextField
                                label="Email Address"
                                {...register("email", { required: true })}
                                value={watch("email") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.email && <Typography color={"red"} mt={".5rem"}>*{errors.email.message}</Typography>}
                        </Stack>
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 6 }}
                    >
                        <Stack width={"100%"}>
                            <TextField
                                label="Address"
                                {...register("address", { required: true })}
                                value={watch("address") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.address && <Typography color={"red"} mt={".5rem"}>*{errors.address.message}</Typography>}
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
                                boxShadow: "none",
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
            />
        </>
    )
}
export default AddOrUpdateOrganizationFields;