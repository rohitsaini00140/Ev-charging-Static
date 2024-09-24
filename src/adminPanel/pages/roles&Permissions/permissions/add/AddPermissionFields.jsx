import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Selector from '../../../../component/selector/Selector';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { permissionSchema } from './permissionSchema';
import { Typography } from '@mui/material';
import { inputStyle } from './addPermissionStyle';

function AddPermissionFields() {

    const defaultValues = {
        name: "",
        description: "",
        status: "",
    }

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(permissionSchema),
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
                    spacing={{ xs: 1, sm: 2, md: 12 }}
                >
                    <Stack width={"100%"}>
                        <TextField
                            label="Name"
                            {...register("name", { required: true })}
                            sx={inputStyle}
                            fullWidth
                        />
                        {errors.name && <Typography color={"red"} mt={".5rem"}>*{errors.name.message}</Typography>}
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
                <Stack width={"100%"}>
                    <TextField
                        label="Description"
                        {...register("description", { required: true })}
                        fullWidth
                        multiline
                        sx={inputStyle}
                        rows={4}
                    />
                    {errors.description && <Typography color={"red"} mt={".5rem"}>*{errors.description.message}</Typography>}
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

export default AddPermissionFields;