import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddOrUpdateRoleFields from './AddOrUpdateRoleFields';

// ----------------------------------------------------------------------

function AddOrUpdateRoles() {

    return (
        <Box
            sx={{
                height: 1,
            }}
        >
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                <Stack
                    sx={{
                        p: { sm: 4, xs: 2 },
                        width: 1,
                        maxWidth: "100%",
                        height: "auto",
                        backgroundColor: "#3e403d0f",
                        boxShadow:'0px 4px 12px rgba(87, 179, 62, 0.2)',
                        borderRadius: "16px"
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 3 }} color="white">Add Roles</Typography>
                    <AddOrUpdateRoleFields />
                </Stack>
            </Stack>
        </Box>
    );
}

export default AddOrUpdateRoles;