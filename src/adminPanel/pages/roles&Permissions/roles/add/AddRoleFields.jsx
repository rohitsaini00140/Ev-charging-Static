import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Selector from '../../../../component/selector/Selector';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { roleSchema } from './roleSchema';
import { Typography } from '@mui/material';
import { inputStyle } from '../../../../component/inputStyle';

function AddRoleFields() {

    const defaultValues = {
        name: ""
    }

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(roleSchema),
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
                <Stack width={"100%"}>
                    <TextField
                        label="Name"
                        {...register("name", { required: true })}
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
    )
}

export default AddRoleFields;