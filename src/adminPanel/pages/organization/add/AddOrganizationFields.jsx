import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { organizationSchema } from './organizationSchema';
import { Typography } from '@mui/material';
import { useAddOrganizationMutation } from '../../../globalState/organization/organizationApis';

function AddOrganizationFields() {

    const [addOrganization] = useAddOrganizationMutation()

    const defaultValues = {
        name: "",
        email: "",
        address: ""
    }

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: zodResolver(organizationSchema),
        defaultValues: defaultValues
    });

    const onSubmit = async (data) => {
        try {
            await addOrganization(data).unwrap();
        } catch (error) {
            if (error.data && error.data.errors) {
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
            console.error("Failed to add organization:", error.data.errors);
        }
    };


    return (
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
                            fullWidth
                        />
                        {errors.name && <Typography color={"red"} mt={".5rem"}>*{errors.name.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            label="Email Address"
                            {...register("email", { required: true })}
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
    )
}

export default AddOrganizationFields;