import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { projectSchema } from './projectSchema';
import { Typography } from '@mui/material';

import { inputStyle } from '../../../component/inputStyle';
import SearchableDropdown from '../../../component/searchableDropdown/SearchableDropdown';
import { useGetAllClustersQuery } from '../../../../globalState/cluster/clusterApis';
import { useState } from 'react';
import Alertbar from '../../../component/Alertbar';
import { useAddProjectsMutation } from '../../../../globalState/projects/projectsApis';
function AddOrUpdateProjectFields() {

const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
});


const [addProjects] = useAddProjectsMutation()


 const { data: clusters, isSuccess: clustersSuccess } = useGetAllClustersQuery()
 const allcluters = clustersSuccess && clusters.clusters

    const defaultValues = {
        name: "",
        cluster_id: "",
        user_id: "",
        location: ""
    }
    const { register, handleSubmit, watch,reset, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(projectSchema),
        defaultValues: defaultValues
    });
    
    const onSubmit = async (data) => {
        try {
            console.log(data)
            await addProjects(data).unwrap();
            reset(defaultValues);
            setSnackbar({
                open: true,
                message: 'Projects successfully added!',
                severity: 'success'
            });
        } catch (error) {
            console.log(error)
            setSnackbar({
                open: true,
                message: 'Error while submitting.',
                severity: 'error'
            });
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
                    <SearchableDropdown
                                options={Array.isArray(allcluters) && allcluters.length > 0 ? allcluters : []}
                                placeholder="Select Cluters "
                                value={watch("cluster_id") || ""}
                                onChange={(newValue) => setValue("cluster_id", newValue,
                                    { shouldValidate: true },
                                    
                            )}
                    />
                {errors.cluster_id && <Typography color={"red"} mt={".5rem"}>*{errors.cluster_id.message}</Typography>}
                  </Stack>
                    <Stack width={"100%"}>
                    <TextField
                            label="User Name"
                            {...register("user_id", { required: true })}
                            sx={inputStyle}
                            fullWidth
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
         <Alertbar
                open={snackbar.open}
                onClose={handleCloseSnackbar}
                severity={snackbar.severity}
                message={snackbar.message}
            />
    </>
    )
}
export default AddOrUpdateProjectFields;