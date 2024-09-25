import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { clusterSchema } from './clusterSchema';
import { Typography } from '@mui/material';
import { useAddClusterMutation, useGetClustersQuery, useUpdateClusterMutation } from '../../../globalState/cluster/clusterApis';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Alertbar from '../../../component/Alertbar';
import { inputStyle } from './addOrUpdateClustersStyle';
import Selector from '../../../component/selector/Selector';

function AddOrUpdateClustersFields() {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });
    let { id } = useParams()

    let navigate = useNavigate()

    const { pageNo } = useSelector(state => state.cluster);
    const { data, isSuccess } = useGetClustersQuery({ page: pageNo })

    const clusterForUpdate = (isSuccess && data?.data) && data.data.find(ele => ele.id === Number(id))

    const [addCluster] = useAddClusterMutation()

    const [updateCluster] = useUpdateClusterMutation()

    const defaultValues = {
        name: clusterForUpdate ? clusterForUpdate.name : "",
        country_id: clusterForUpdate ? clusterForUpdate.country_id : "",
        state_id: clusterForUpdate ? clusterForUpdate.state_id : "",
        city_id: clusterForUpdate ? clusterForUpdate.city_id : "",
        location: clusterForUpdate ? clusterForUpdate.location : ""
    }

    const { register, handleSubmit, setError, setValue, reset, watch, formState: { errors } } = useForm({
        resolver: zodResolver(clusterSchema),
        defaultValues: defaultValues
    });

    useEffect(() => {
        if (!id) {
            reset({
                name: "",
                country_id: "",
                state_id: "",
                city_id: "",
                location: ""
            });
        } else if (clusterForUpdate) {
            reset({
                name: clusterForUpdate && clusterForUpdate.name,
                country_id: clusterForUpdate && clusterForUpdate.country_id,
                state_id: clusterForUpdate && clusterForUpdate.state_id,
                city_id: clusterForUpdate && clusterForUpdate.city_id,
                location: clusterForUpdate && clusterForUpdate.location
            });
        }
    }, [id, clusterForUpdate, reset]);

    const onSubmit = async (data) => {
        try {
            if (id) {

                await updateCluster({ id, updatedClusterData: data }).unwrap();

                setSnackbar({
                    open: true,
                    message: 'Cluster successfully updated!',
                    severity: 'success'
                });

                setTimeout(() => {
                    navigate("/admin/cluster/view");
                }, 3000);

            } else {

                await addCluster(data).unwrap();

                setSnackbar({
                    open: true,
                    message: 'Cluster successfully added!',
                    severity: 'success'
                });
            }
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Error while submitting.',
                severity: 'error'
            });
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
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 6 }}
                    >
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
                        <Stack width={"100%"}>
                            <TextField
                                label="Location"
                                {...register("location", { required: true })}
                                value={watch("location") || ""}
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
                                value={watch("country_id") || ""}
                                onChange={(e) => setValue("country_id", e.target.value, { shouldValidate: true })}
                                placeholder='Country'
                                selectType="single"
                            />
                            {errors.country_id && <Typography color={"red"} mt={".5rem"}>*{errors.country_id.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <Selector
                                value={watch("state_id") || ""}
                                onChange={(e) => setValue("state_id", e.target.value, { shouldValidate: true })}
                                placeholder='State'
                                selectType="single"
                            />
                            {errors.state_id && <Typography color={"red"} mt={".5rem"}>*{errors.state_id.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <Selector
                                value={watch("city_id") || ""}
                                onChange={(e) => setValue("city_id", e.target.value, { shouldValidate: true })}
                                placeholder='City'
                                selectType="single"
                            />
                            {errors.city_id && <Typography color={"red"} mt={".5rem"}>*{errors.city_id.message}</Typography>}
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
            <Alertbar
                open={snackbar.open}
                onClose={handleCloseSnackbar}
                severity={snackbar.severity}
                message={snackbar.message}
            />
        </>
    )
}

export default AddOrUpdateClustersFields