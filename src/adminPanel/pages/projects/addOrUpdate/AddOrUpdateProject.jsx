import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddOrUpdateProjectFields from './AddOrUpdateProjectFields';

// ----------------------------------------------------------------------

function AddOrUpdateProject() {
    
    return (
        <Box
            sx={{
                height: 1,
            }}
        >
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                <Card
                    sx={{
                        p: 5,
                        width: 1,
                        maxWidth: "100%",
                        height: "auto",
                        backgroundColor: "#181837",
                    }}
                >
                    <Typography variant="h4" color="white" sx={{ mb: 3 }}>Add Projects</Typography>
                    <AddOrUpdateProjectFields />
                </Card>
            </Stack>
        </Box>
    );
}

export default AddOrUpdateProject;