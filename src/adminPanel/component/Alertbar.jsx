import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Alertbar({ open, onClose, severity, message }) {

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
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