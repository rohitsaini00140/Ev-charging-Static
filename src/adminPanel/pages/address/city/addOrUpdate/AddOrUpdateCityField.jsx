import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Selector from '../../../../component/selector/Selector';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { citySchema } from './citySchema';
import { Typography } from '@mui/material';
import { inputStyle } from "../../../../component/inputStyle"

function AddOrUpdateCityFields() {

    const defaultValues = {
        name: "",
        state_id: "",
        postal_code: "",
    }

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(citySchema),
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
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                >
                    <Stack width={"100%"}>
                        <Selector
                            value={watch("state_id")}
                            onChange={(e) => setValue("state_id", e.target.value, { shouldValidate: true })}
                            placeholder='Select State'
                            selectType="single"
                        />
                        {errors.state_id && <Typography color={"red"} mt={".5rem"}>*{errors.state_id.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            label="Postal code"
                            {...register("postal_code", { required: true })}
                            sx={inputStyle}
                            fullWidth
                        />
                        {errors.postal_code && <Typography color={"red"} mt={".5rem"}>*{errors.postal_code.message}</Typography>}
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

export default AddOrUpdateCityFields;