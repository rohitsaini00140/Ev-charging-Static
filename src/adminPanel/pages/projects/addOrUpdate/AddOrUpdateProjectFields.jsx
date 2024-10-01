import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Selector from '../../../component/selector/Selector';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { projectSchema } from './projectSchema';
import { Typography } from '@mui/material';
import { inputStyle } from '../../../component/inputStyle';

function AddOrUpdateProjectFields() {

    const defaultValues = {
        name: "",
        cluster_id: "",
        user_id: "",
        location: ""
    }

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(projectSchema),
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
                        <Selector
                            value={watch("cluster_id")}
                            onChange={(e) => setValue("cluster_id", e.target.value, { shouldValidate: true })}
                            placeholder='Select Cluster'
                            selectType="single"
                        />
                        {errors.cluster_id && <Typography color={"red"} mt={".5rem"}>*{errors.cluster_id.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("user_id")}
                            onChange={(e) => setValue("user_id", e.target.value, { shouldValidate: true })}
                            placeholder='Select User'
                            selectType="single"
                        />
                        {errors.user_id && <Typography color={"red"} mt={".5rem"}>*{errors.user_id.message}</Typography>}
                    </Stack>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                >
                    <Stack width={"100%"}>
                        <TextField
                            label="Project name"
                            {...register("name", { required: true })}
                            sx={inputStyle}
                            fullWidth
                        />
                        {errors.name && <Typography color={"red"} mt={".5rem"}>*{errors.name.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            label="Project location"
                            {...register("location", { required: true })}
                            sx={inputStyle}
                            fullWidth
                        />
                        {errors.location && <Typography color={"red"} mt={".5rem"}>*{errors.location.message}</Typography>}
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

export default AddOrUpdateProjectFields;