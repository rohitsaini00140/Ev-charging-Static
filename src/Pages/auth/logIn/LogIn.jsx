import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import { inputStyles } from '../authPagesStyle';

function Login() {
    const theme = useTheme();

    const [showPassword, setShowPassword] = useState(false);

    const renderForm = (
        <>
            <Stack spacing={3}>
                <TextField
                    name="email"
                    label="Email address"
                    sx={inputStyles}
                />
                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    sx={inputStyles}
                />
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
                <Link variant="subtitle2" style={{ textDecoration: "none" }}>
                    <Typography color='#00ffff'>Forgot password?</Typography>
                </Link>
            </Stack>

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{
                    backgroundColor: '#00ffff',
                    color: 'black',
                    textTransform: "capitalize"
                }}
            >
                LogIn
            </LoadingButton>
        </>
    );

    return (
        <Stack
            sx={{
                padding: {
                    sm: "30rem 5rem 25rem 5rem",
                    xs: "30rem 1rem 25rem 1rem"
                },
                position: 'relative',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(https://solutions.covestro.com/-/media/covestro/solution-center/story/images/electric-vehicle-charging-station.jpg?rev=8dbb3b2d65fa41dfa0f1ee8f6acc9b51&hash=BD9DF68F0BCACA8488068E4D41E1D904)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
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
                <Typography variant="h4" color='#00ffff'>Sign in to EV</Typography>
                <Typography variant="body2" sx={{ mt: 2, mb: 5, color: "white" }}>
                    Don’t have an account?
                    <Link to={"/register"} variant="subtitle2" style={{ textDecoration: "none" }}>
                        <Typography color='#00ffff' display={"inline"} ml={"0.5rem"}>Get started</Typography>
                    </Link>
                </Typography>

                <Stack direction="row" spacing={2}>
                    <Button
                        fullWidth
                        size="large"
                        color="inherit"
                        variant="outlined"
                        sx={{ borderColor: "#00ffff" }}
                    >
                        <FcGoogle size={30} />
                    </Button>

                    <Button
                        fullWidth
                        size="large"
                        color="inherit"
                        variant="outlined"
                        sx={{ borderColor: "#00ffff" }}
                    >
                        <BsFacebook color="#1877F2" size={30} />
                    </Button>
                </Stack>
                <Divider
                    sx={{
                        my: 3,
                        "&::before, &::after": {
                            borderColor: "white",
                        },
                        color: "#ff6600",
                    }}
                >
                    <Typography variant="body2" sx={{ color: 'white' }}>
                        OR
                    </Typography>
                </Divider>
                {renderForm}
            </Box>
        </Stack>
    );
}

export default Login;