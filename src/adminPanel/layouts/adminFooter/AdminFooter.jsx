import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useResponsive } from '../../customHooks/useResponsive';

// ----------------------------------------------------------------------

function AdminFooter() {
    const theme = useTheme();

    const lgUp = useResponsive('up', 'lg');

    return (
        <Box
            sx={{
                py: 2,
                marginLeft: lgUp && "17.5rem",
                textAlign: 'center',
                backgroundColor: "#222245",
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
