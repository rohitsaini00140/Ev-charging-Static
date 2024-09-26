import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Selector from '../../../component/selector/Selector';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { deviceSchema } from './deviceSchema';
import { Typography } from '@mui/material';
import { inputStyle } from '../../../component/inputStyle';

function AddOrUpdateDeviceFields() {

    const defaultValues = {
        name: "",
        project_id: "",
        type: "",
        location: "",
        serial_number: "",
        status: ""
    }

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(deviceSchema),
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
                            sx={inputStyle}
                            fullWidth
                        />
                        {errors.name && <Typography color={"red"} mt={".5rem"}>*{errors.name.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            label="Serial No."
                            {...register("serial_number", { required: true })}
                            sx={inputStyle}
                            fullWidth
                        />
                        {errors.serial_number && <Typography color={"red"} mt={".5rem"}>*{errors.serial_number.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            label="Location"
                            {...register("location", { required: true })}
                            sx={inputStyle}
                            fullWidth
                        />
                        {errors.location && <Typography color={"red"} mt={".5rem"}>*{errors.location.message}</Typography>}
                    </Stack>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                >
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("project_id")}
                            onChange={(e) => setValue("project_id", e.target.value, { shouldValidate: true })}
                            placeholder='Select project'
                            selectType="single"
                        />
                        {errors.project_id && <Typography color={"red"} mt={".5rem"}>*{errors.project_id.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("type")}
                            onChange={(e) => setValue("type", e.target.value, { shouldValidate: true })}
                            placeholder='Select type'
                            selectType="single"
                        />
                        {errors.type && <Typography color={"red"} mt={".5rem"}>*{errors.type.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("status")}
                            onChange={(e) => setValue("status", e.target.value, { shouldValidate: true })}
                            placeholder='Select status'
                            selectType="single"
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

export default AddOrUpdateDeviceFields;