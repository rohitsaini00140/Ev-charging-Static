import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddOrUpdateUserFields from './AddOrUpdateUserFields';
import { useParams } from 'react-router-dom';

// ----------------------------------------------------------------------

function AddOrUpdateUser() {
    const { id } = useParams()
    return (
        <Box
            sx={{
                height: 1,
            }}
        >
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                <Card
                    sx={{
                        p: { xs: 2, sm: 3, md: 5 },
                        width: 1,
                        maxWidth: "100%",
                        height: "auto",
                        backgroundColor: "#ffff",
                    }}
                >
                    <Typography variant="h4" color="white" sx={{ mb: 3 }}>{id ? "Update Internal User" : "Add Internal User"}</Typography>
                    <AddOrUpdateUserFields />
                </Card>
            </Stack>
        </Box>
    );
}

export default AddOrUpdateUser;