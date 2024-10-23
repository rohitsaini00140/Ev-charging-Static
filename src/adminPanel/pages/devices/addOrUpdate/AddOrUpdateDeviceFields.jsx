import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Selector from '../../../component/selector/Selector';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { deviceSchema } from './deviceSchema';
import { Typography } from '@mui/material';
import { inputStyle } from '../../../component/inputStyle';
import { useMemo } from 'react';
import { useGetAllProjectsQuery } from '../../../../globalState/projects/projectsApis';
import SearchableDropdown from '../../../component/searchableDropdown/SearchableDropdown';
import Alertbar from '../../../component/Alertbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAddDeviceMutation, useGetDeviceByIDQuery, useUpdateDeviceMutation } from '../../../../globalState/devices/deviceApis';

function AddOrUpdateDeviceFields() {

    const [loading, setLoading] = useState(false);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const { id } = useParams()
    const navigate = useNavigate()

    const { data: projectData, isSuccess: successProject } = useGetAllProjectsQuery()
    const { data, isSuccess } = useGetDeviceByIDQuery(id)

    const deviceForUpdate = isSuccess && data

    const allProjects = successProject && projectData?.projects

    const [addDevice] = useAddDeviceMutation()
    const [updateDevice] = useUpdateDeviceMutation()

    const defaultValues = useMemo(() => ({
        name: "",
        project_id: 0,
        type: "",
        location: "",
        serial_number: "",
        status: ""
    }), []);

    const { register, handleSubmit, watch, setValue, formState: { errors }, reset, setError } = useForm({
        resolver: zodResolver(deviceSchema),
        defaultValues: defaultValues
    });

    useEffect(() => {
        if (id && deviceForUpdate) {
            reset({
                name: deviceForUpdate.name || "",
                project_id: deviceForUpdate.project_id || 0,
                type: deviceForUpdate.type || "",
                location: deviceForUpdate.location || "",
                serial_number: deviceForUpdate.serial_number || "",
                status: deviceForUpdate.status || ""
            });
        } else {
            reset(defaultValues);
        }
    }, [id, deviceForUpdate, reset, defaultValues]);

    const onSubmit = async (data) => {
        setLoading(true);
        try {

            if (id) {

                await updateDevice({ id, updatedDeviceData: data }).unwrap();

                navigate("/admin/device/view", { state: { message: 'Device successfully updated!', severity: 'success' } });

            } else {

                await addDevice(data).unwrap();

                reset(defaultValues)

                navigate("/admin/device/view", { state: { message: 'Device successfully added!', severity: 'success' } });
            }

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
        } finally {
            setLoading(false);
        }
    }

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
                            <SearchableDropdown
                                options={allProjects.length > 0 ? allProjects : []}
                                placeholder="Select project"
                                value={watch("project_id") || 0}
                                onChange={(newValue) => setValue("project_id", newValue,
                                    { shouldValidate: true },
                                )}
                            />
                            {errors.project_id && <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>*{errors.project_id.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <TextField
                                label="Device name"
                                {...register("name", { required: true })}
                                value={watch("name") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.name && <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>*{errors.name.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <Selector
                                value={watch("type")}
                                onChange={(e) => setValue("type", e.target.value, { shouldValidate: true })}
                                placeholder='Select device type'
                                selectType="single"
                                options={["Type-A", "Type-B", "Type-C"]}
                            />
                            {errors.type && <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>*{errors.type.message}</Typography>}
                        </Stack>
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 6 }}
                    >
                        <Stack width={"100%"}>
                            <TextField
                                label="Device location"
                                {...register("location", { required: true })}
                                value={watch("location") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.location && <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>*{errors.location.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <TextField
                                label="Device serial No."
                                {...register("serial_number", { required: true })}
                                value={watch("serial_number") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.serial_number && <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>*{errors.serial_number.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <Selector
                                value={watch("status")}
                                onChange={(e) => setValue("status", e.target.value, { shouldValidate: true })}
                                placeholder='Select status'
                                selectType="single"
                                options={["Active", "Inactive"]}
                            />
                            {errors.status && <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>*{errors.status.message}</Typography>}
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"end"}>
                        <LoadingButton
                            loading={loading}
                            type='submit'
                            sx={{
                                bgcolor: '#0ab39c',
                                color: 'white',
                                '& .MuiLoadingButton-loadingIndicator': {
                                    color: 'white'
                                },
                                '&:hover': {
                                    bgcolor: '#089d88',
                                    color: 'white',
                                }
                            }}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="outlined"
                        >
                            Save
                        </LoadingButton>
                    </Stack>
                </Stack>
            </form>
            <Alertbar
                open={snackbar.open}
                onClose={handleCloseSnackbar}
                severity={snackbar.severity}
                message={snackbar.message}
                position={{ vertical: 'top', horizontal: 'right' }}
                sx={{ mt: "6rem" }}
            />
        </>
    )
}

export default AddOrUpdateDeviceFields;