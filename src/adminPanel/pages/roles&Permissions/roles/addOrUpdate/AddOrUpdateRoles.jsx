import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddOrUpdateRoleFields from './AddOrUpdateRoleFields';
import { useParams } from 'react-router-dom';

// ----------------------------------------------------------------------

function AddOrUpdateRoles() {

    const {id} = useParams()

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
                        backgroundColor: "#ffff",
                        boxShadow:'0px 4px 12px rgba(87, 179, 62, 0.2)',
                        borderRadius: "16px"
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 3 }} color="Black">{id ? "Update Role":"Add Role"}</Typography>
                    <AddOrUpdateRoleFields />
                </Stack>
            </Stack>
        </Box>
    );
}

export default AddOrUpdateRoles;