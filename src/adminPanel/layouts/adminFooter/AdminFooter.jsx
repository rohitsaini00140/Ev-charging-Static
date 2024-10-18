import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useResponsive } from '../../customHooks/useResponsive';

// ----------------------------------------------------------------------

function AdminFooter() {

    const lgUp = useResponsive('up', 'lg');

    return (
        <Box
            sx={{
                py: 2,
                marginLeft: lgUp && "17.5rem",
                textAlign: 'center',
                backgroundColor: "#141d20",
                mt: 'auto',
            }}
        >
            <Typography variant="body2" color="white">
                © 2024 VNT. All rights reserved.
            </Typography>
        </Box>
    );
}

export default AdminFooter;
