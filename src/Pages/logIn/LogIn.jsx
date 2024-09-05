import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

function Login() {
    const theme = useTheme();

    const [showPassword, setShowPassword] = useState(false);

    const renderForm = (
        <>
            <Stack spacing={3}>
                <TextField name="email" label="Email address" />
                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
                <Link variant="subtitle2" underline="hover" sx={{ cursor: "pointer" }}>
                    Forgot password?
                </Link>
            </Stack>

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="inherit"
            >
                Login
            </LoadingButton>
        </>
    );

    return (
        <Stack
            sx={{
                padding: "10rem 5rem",
                // background: 'linear-gradient(to right bottom, #b7e670, #3eadad)',
                backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20230618/pngtree-visual-representation-of-an-electric-vehicle-being-charged-in-3d-image_3630808.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%"
            }}
        >
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        borderTopLeftRadius: '2rem',
                        borderBottomLeftRadius: '2rem',
                        height: "35rem",
                        width: "30rem",
                    }}
                >
                    <img
                        src='https://static.vecteezy.com/system/resources/previews/027/128/052/non_2x/electric-car-ev-car-woman-charging-battery-at-electric-charging-station-with-solar-panel-and-wind-turbines-sustainable-green-energy-for-ecology-environment-vector.jpg'
                        height={"100%"}
                        alt='error'
                        style={{
                            borderTopLeftRadius: '2rem',
                            borderBottomLeftRadius: '2rem',
                        }}
                    />
                </Box>
                <Box width="30rem" >
                    <Stack alignItems="center" justifyContent="center">
                        <Card
                            sx={{
                                p: 5,
                                borderRadius: 5,
                                width: "100%"
                            }}
                        >
                            <Typography variant="h4">Sign in to EV</Typography>
                            <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
                                Don’t have an account?
                                <Link variant="subtitle2" sx={{ ml: 0.5, cursor: "pointer" }}>
                                    Get started
                                </Link>
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                <Button
                                    fullWidth
                                    size="large"
                                    color="inherit"
                                    variant="outlined"
                                    sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
                                >
                                    <FcGoogle size={30} />
                                </Button>

                                <Button
                                    fullWidth
                                    size="large"
                                    color="inherit"
                                    variant="outlined"
                                    sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
                                >
                                    <BsFacebook color="#1877F2" size={30} />
                                </Button>
                            </Stack>
                            <Divider sx={{ my: 3 }}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    OR
                                </Typography>
                            </Divider>
                            {renderForm}
                        </Card>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    );
}

export default Login;