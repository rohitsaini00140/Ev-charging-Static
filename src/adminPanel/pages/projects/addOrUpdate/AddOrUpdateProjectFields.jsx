import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { projectSchema } from './projectSchema';
import { Typography } from '@mui/material';
import { inputStyle } from '../../../component/inputStyle';
import SearchableDropdown from '../../../component/searchableDropdown/SearchableDropdown';
import { useGetAllClustersQuery } from '../../../../globalState/cluster/clusterApis';
import { useState } from 'react';
import Alertbar from '../../../component/Alertbar';
import { useAddProjectsMutation, useGetProjectByIdQuery, useUpdateProjectsMutation } from '../../../../globalState/projects/projectsApis';
import { useGetAllUserQuery } from '../../../../globalState/user/userApis';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

function AddOrUpdateProjectFields() {

    const [loading, setLoading] = useState(false);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const { id } = useParams()
    let navigate = useNavigate()

    const { data, isSuccess } = useGetProjectByIdQuery(id)

    const projectForUpdate = (isSuccess && data)

    const { data: clusters, isSuccess: clustersSuccess } = useGetAllClustersQuery()

    const { data: usersData, isSuccess: usersSuccess } = useGetAllUserQuery()

    const allcluters = clustersSuccess && clusters.clusters

    const allUsersData = usersSuccess && usersData?.users

    const [updateProjects] = useUpdateProjectsMutation()

    const [addProjects] = useAddProjectsMutation()

    const defaultValues = useMemo(() => ({
        name: "",
        cluster_id: 0,
        // user_id: 0,
        location: ""
    }), []);

    const { register, handleSubmit, watch, reset, setError, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(projectSchema),
        defaultValues: defaultValues
    });
    useEffect(() => {
        if (id && projectForUpdate) {
            reset({
                name: projectForUpdate.name || "",
                cluster_id: projectForUpdate.cluster_id || 0,
                // user_id: projectForUpdate.user_id || 0,
                location: projectForUpdate.location || ""
            });
        } else {
            reset(defaultValues);
        }
    }, [id, projectForUpdate, reset, defaultValues]);


    const onSubmit = async (data) => {
        setLoading(true);
        try {

            if (id) {

                await updateProjects({ id, updatedProjectData: data }).unwrap();

                navigate("/admin/project/view", { state: { message: 'Project successfully updated!', severity: 'success' } });

            } else {
                await addProjects(data).unwrap();
                reset(defaultValues)
                navigate("/admin/project/view", { state: { message: 'Project successfully added!', severity: 'success' } });
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
            <Stack spacing={{ xs: 4, sm: 4, md: 4 }}>
                       <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 4, sm: 4, md: 6 }}
                        >
                        <Stack width={"100%"}>
                            <SearchableDropdown
                                options={allcluters.length > 0 ? allcluters : []}
                                placeholder="Select Cluster"
                                value={watch("cluster_id") || ""}
                                onChange={(newValue) => setValue("cluster_id", newValue,
                                    { shouldValidate: true },
                                )}
                            />
                            {errors.cluster_id && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.cluster_id.message}</Typography>}
                        </Stack>
                        {/* <Stack width={"100%"}>
                            <SearchableDropdown
                                options={allUsersData.length > 0 ? allUsersData : []}
                                placeholder="Select User "
                                value={watch("user_id") || ""}
                                onChange={(newValue) => setValue("user_id", newValue,
                                    { shouldValidate: true },
                                )}
                            />
                            {errors.user_id && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.user_id.message}</Typography>}
                        </Stack> */}
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 4, sm: 4, md: 6 }}
                        >
                        <Stack width={"100%"}>
                            <TextField
                                label="Project Name"
                                {...register("name", { required: true })}
                                value={watch("name") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.name && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.name.message}</Typography>}
                        </Stack>
                        <Stack width={"100%"}>
                            <TextField
                                label="Project location"
                                {...register("location", { required: true })}
                                value={watch("location") || ""}
                                sx={inputStyle}
                                fullWidth
                            />
                            {errors.location && <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>*{errors.location.message}</Typography>}
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"end"}>
                        <LoadingButton
                            loading={loading}
                            type='submit'
                            sx={{
                                bgcolor: '#0ab39c',
                                color: 'white',
                                borderColor:'#0ab39c',
                                padding:"10px 15px",
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
export default AddOrUpdateProjectFields;