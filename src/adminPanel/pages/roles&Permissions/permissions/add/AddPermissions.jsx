import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddPermissionFields from './AddPermissionFields';

// ----------------------------------------------------------------------

function AddPermissions() {

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
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 3 }}>Add Permissions</Typography>
                    <AddPermissionFields />
                </Card>
            </Stack>
        </Box>
    );
}

export default AddPermissions;