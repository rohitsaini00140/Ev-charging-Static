import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { bgGradient } from '../../../layouts/theme/css';
import AddOrUpdateProductFields from './AddOrUpdateProductFields';

// ----------------------------------------------------------------------

function AddOrUpdateProducts() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                ...bgGradient({
                    color: alpha(theme.palette.background.default, 0.9),
                    imgUrl: '/assets/background/overlay_4.jpg',
                }),
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
                    <Typography variant="h4" sx={{ mb: 3 }}>Add or Update Product</Typography>
                    <AddOrUpdateProductFields />
                </Card>
            </Stack>
        </Box>
    );
}

export default AddOrUpdateProducts;