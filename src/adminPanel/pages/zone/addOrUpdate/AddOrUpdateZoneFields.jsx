import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { zoneSchema } from './zoneSchema';
import { Typography } from '@mui/material';
import { useAddZoneMutation, useUpdateZoneMutation } from "../../../globalState/zone/zoneApis"
import { useGetZoneQuery } from '../../../globalState/zone/zoneApis';
import SearchableDropdown from '../../../component/SearchableDropdown';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function AddOrUpdateZoneFields() {

    let { id } = useParams()
    let navigate = useNavigate()

    const { pageNo } = useSelector(state => state.organization);
    const { data, isSuccess } = useGetZoneQuery({ page: pageNo })

    const zoneForUpdate = (isSuccess && data?.data) && data.data.data.find(ele => ele.id === Number(id))

    const [addZone] = useAddZoneMutation()

    const [updateZone] = useUpdateZoneMutation()

    const allOrganization = isSuccess && data?.filters?.organizations
        ? Object.entries(data.filters.organizations).map(([id, name]) => ({ id, name }))
        : [];

    const defaultValues = {
        organization_id: zoneForUpdate ? String(zoneForUpdate.organization_id) : "",
        name: zoneForUpdate ? zoneForUpdate.name : "",
        location: zoneForUpdate ? zoneForUpdate.location : ""
    }

    const { register, handleSubmit, watch, setError, setValue, reset, formState: { errors } } = useForm({
        resolver: zodResolver(zoneSchema),
        defaultValues: defaultValues
    });

    useEffect(() => {
        if (!id) {
            reset({
                name: "",
                email: "",
                address: ""
            });
        } else if (zoneForUpdate) {
            reset({
                name: zoneForUpdate && String(zoneForUpdate.organization_id),
                email: zoneForUpdate && zoneForUpdate.name,
                address: zoneForUpdate && zoneForUpdate.location
            });
        }
    }, [id, zoneForUpdate, reset]);

    const onSubmit = async (data) => {
        try {
            await (id ? updateZone({ id, updatedZoneData: data }).unwrap() : addZone(data).unwrap());
        } catch (error) {
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
        navigate("/admin/zone/view")
    };

    return (
        <form fullWidth onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                >
                    <Stack width={"100%"}>
                        <SearchableDropdown
                            options={allOrganization}
                            placeholder="Select Organization"
                            value={watch("organization_id")}
                            onChange={(newValue) => setValue("organization_id", newValue, { shouldValidate: true })}
                        />
                        {errors.organization_id && <Typography color={"red"} mt={".5rem"}>*{errors.organization_id.message}</Typography>}
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            label="Name"
                            {...register("name", { required: true })}
                            fullWidth
                        />
                        {errors.name && <Typography color={"red"} mt={".5rem"}>*{errors.name.message}</Typography>}
                    </Stack>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                >
                    <Stack width={"100%"}>
                        <TextField
                            label="Location"
                            {...register("location", { required: true })}
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

export default AddOrUpdateZoneFields;