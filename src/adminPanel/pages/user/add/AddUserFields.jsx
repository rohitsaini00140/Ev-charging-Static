import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Selector from '../../../component/Selector';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userSchema } from './userSchema';
import { Typography } from '@mui/material';

function AddUserFields() {

    const defaultValues = {
        name: "",
        email: "",
        mobile_No: "",
        role: "",
        status: "",
    }

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: defaultValues
    });

    const onSubmit = async (data) => {
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
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
                    <Stack width={"100%"}>
                        <TextField
                            label="Mobile No."
                            {...register("mobile_No", { required: true })}
                            fullWidth
                        />
                        {errors.mobile_No && <Typography color={"red"} mt={".5rem"}>*{errors.mobile_No.message}</Typography>}
                    </Stack>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 12 }}
                >
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("role")}
                            onChange={(e) => setValue("role", e.target.value, { shouldValidate: true })}
                            placeholder='Select Role'
                            selectType="single"
                            options={["User", "Admin", "Moderator"]}
                        />
                        {errors.role && <Typography color={"red"} mt={".5rem"}>*{errors.role.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("status")}
                            onChange={(e) => setValue("status", e.target.value, { shouldValidate: true })}
                            placeholder='Status'
                            selectType="single"
                            options={["Active", "Inactive"]}
                        />
                        {errors.status && <Typography color={"red"} mt={".5rem"}>*{errors.status.message}</Typography>}
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
    )
}

export default AddUserFields;