import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { roleSchema } from './roleSchema';
import { Typography } from '@mui/material';
import { inputStyle } from '../../../../component/inputStyle';
import { useState, useMemo } from 'react';
import { useCreateRolesMutation } from '../../../../../globalState/roles/rolesApi';
import Alertbar from '../../../../component/Alertbar';

function AddOrUpdateRoleFields() {

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const [createRoles] = useCreateRolesMutation()

    const defaultValues = useMemo(() => ({
        name: ""
    }), []);

    const { register, handleSubmit, watch, setValue, setError, reset, formState: { errors } } = useForm({
        resolver: zodResolver(roleSchema),
        defaultValues: defaultValues
    });

    const onSubmit = async (data) => {

        try {
            console.log(data)

            await createRoles(data).unwrap();

            reset(defaultValues)

            setSnackbar({
                open: true,
                message: 'Role successfully created!',
                severity: 'success'
            })

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

export default AddOrUpdateRoleFields;