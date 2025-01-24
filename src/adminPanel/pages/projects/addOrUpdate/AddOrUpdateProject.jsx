import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddOrUpdateProjectFields from './AddOrUpdateProjectFields';
import { useParams } from 'react-router-dom';
// ----------------------------------------------------------------------
function AddOrUpdateProject() {
    const { id } = useParams()
    return (
        <Box
            sx={{
                height: 1
            }}
        >
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                <Stack
                    sx={{
                        p: { sm: 4, xs: 2 },
                        width: 1,
                        maxWidth: "100%",
                        height: "auto",
                        backgroundColor: "#ffff",
                        borderRadius: "16px"
                    }}
                >
                    <Typography variant="h4" color="black" sx={{ mb: 3 }}>{id ? "Update Project" : "Add Project"}</Typography>
                    <AddOrUpdateProjectFields />
                </Stack>
            </Stack>
        </Box>
    );
}

export default AddOrUpdateProject;