import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material/styles';
import { inputStyles } from '../authPagesStyle';

function LoginForm() {
    const theme = useTheme();
    // const [showPassword, setShowPassword] = useState(false);
   const [showPassword] = useState(false);
    const renderForm = (
        <>
            <Stack spacing={3}>
                <TextField
                    name="username"
                    label="Name"
                    fullWidth
                    sx={inputStyles}
                />
                <TextField
                    name="email"
                    label="Email address"
                    fullWidth
                    sx={inputStyles}
                />
                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    sx={inputStyles}
                />
                <TextField
                    name="Confirm_password"
                    label="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    sx={inputStyles}
                />
            </Stack>
            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{
                    mt: 3,
                    backgroundColor: '#00ffff',
                    color: 'black',
                    textTransform: "capitalize"
                }}
            >
                Register
            </LoadingButton>
        </>
    );

    return (
        <Stack
            sx={{
                padding: {
                    sm: "30rem 5rem",
                    xs: "30rem 1rem"
                },
                position: 'relative',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(https://solutions.covestro.com/-/media/covestro/solution-center/story/images/electric-vehicle-charging-station.jpg?rev=8dbb3b2d65fa41dfa0f1ee8f6acc9b51&hash=BD9DF68F0BCACA8488068E4D41E1D904)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box
                sx={{
                    width: {
                        sm: 500,
                        xs: "100%"
                    },
                    padding: 5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: theme.shadows[5]
                }}
            >
                <Typography variant="h4" color='#00ffff'>Sign up to EV</Typography>
                <Typography variant="body2" sx={{ mt: 2, mb: 5 }} color='white'>
                    Already have an account?
                    <Link to={"/logIn"} style={{ textDecoration: "none" }} >
                        <Typography color='#00ffff' ml={".5rem"} display={"inline"}>Get started</Typography>
                    </Link>
                </Typography>
                {renderForm}
            </Box>
        </Stack>
    );
}

export default LoginForm;