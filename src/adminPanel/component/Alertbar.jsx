import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Alertbar({ open, onClose, severity, message, position, sx }) {

    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={onClose}
            anchorOrigin={position}
            sx={sx}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Alertbar;