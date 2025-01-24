import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddOrUpdateDeviceFields from './AddOrUpdateDeviceFields';
import { useParams } from 'react-router-dom';
// ----------------------------------------------------------------------
function AddOrUpdateDevice() {
      let { id } = useParams();
    return (
        <Box
        sx={{
            height: 1,
        }}>
            <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                <Stack
                    sx={{
                        p: { xs: 2, sm: 3, md: 5 },  // responsive padding
                        width: 1,
                        maxWidth: "100%",
                        borderRadius:'16px'
                    }}
                >
                    <Typography variant="h4" color="black" sx={{ mb: 3 }}>{id ?  "Update Device" : "Add Device"}</Typography>
                    <AddOrUpdateDeviceFields />
                </Stack>
            </Stack>
        </Box>
    );
}
export default AddOrUpdateDevice;