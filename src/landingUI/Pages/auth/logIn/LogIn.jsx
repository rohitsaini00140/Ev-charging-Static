import { useState, useMemo } from 'react';
import { Button, TextField, Typography, Container, Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@mui/icons-material/Facebook";
import { inputStyles } from '../../authPagesStyle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "./logInSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from '../../../../globalState/user/userApis';
import Alertbar from '../../../../adminPanel/component/Alertbar';
import { error_position } from './loginStyle';

const companyLogo = require('../../../img/logo.png');

function Login() {
    const navigate = useNavigate()
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [loginUser] = useLoginUserMutation()

    const defaultValues = useMemo(() => ({
        email: "",
        password: ""
    }), []);

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: defaultValues
    });

    const onSubmit = async (data) => {
        try {
            const result = await loginUser(data).unwrap();

            setSnackbar({
                open: true,
                message: 'Login successfully!',
                severity: 'success'
            });

            setTimeout(() => {
                navigate("/admin");
            }, 2000);

        } catch (error) {
            setSnackbar({
                open: true,
                message: (error?.data) ? (error?.data?.error) : "error while submitting",
                severity: 'error'
            });
            if (error.data && error.data.errors) {
                Object.entries(error.data.errors).forEach(([key, message]) => {
                    setError(key, { type: "server", message: message[0] });
                });
            }
            console.error("Error during submission:", error);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar((prevState) => ({
            ...prevState,
            open: false
        }));
    };

    return (
        <Grid container sx={{ minHeight: '100vh' }}>
            <Grid item xs={false} size={{ lg: 6 }}
                sx={{
                    bgcolor: "#daf5ef",
                    display: { xs: 'none', lg: 'flex' },
                    justifyContent: 'space-around',
                    padding: '0 5rem',
                    flexDirection: 'column',
                }}
            >
                <Typography variant='h3' fontWeight={"700"}>Find EV Charging Stations and Get Ready to <Typography color="#57b33e" variant='h3' fontWeight={"700"}>Go Green</Typography></Typography>
                <Link to="/"> <img src={companyLogo} alt='error' style={{ width: "8rem" }} /> </Link>
            </Grid>
            <Grid item size={{ lg: 6, xs: 12 }}
                sx={{
                    paddingTop: 6,
                    paddingBottom: 6,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: "#155e3d",
                }}
            >
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            padding: { xs: '1rem', md: '2rem', lg: '2rem' },
                            borderRadius: 2,
                            boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
                            backdropFilter: 'blur(10px)',
                            width: '100%',
                        }}
                    >
                        <Typography component="h1" sx={{ fontWeight: '600', color: '#253745' }} variant="h5" textAlign={"center"}>
                            Login VNT! 👋
                        </Typography>
                        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{ position: "relative" }}>
                                <TextField
                                    {...register("email", { required: true })}
                                    margin="normal"
                                    fullWidth
                                    label="Email"
                                    sx={inputStyles}
                                />
                                {errors.email && <Typography sx={error_position}>*{errors.email.message}</Typography>}
                            </Box>
                            <Box sx={{ position: "relative" }}>
                                <TextField
                                    {...register("password", { required: true })}
                                    sx={inputStyles}
                                    margin="normal"
                                    label="Password"
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff sx={{ color: "#57b33e" }} /> : <Visibility sx={{ color: "#57b33e" }} />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {errors.password && <Typography sx={error_position}>*{errors.password.message}</Typography>}
                            </Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 1, textTransform: "capitalize", bgcolor: "#57b33e" }}
                            >
                                Login
                            </Button>
                            <Link to={""} style={{ textDecoration: "none", fontSize: '15px', fontWeight: '600', color: "#253745" }}>
                                Forgot Password?
                            </Link>
                            <Typography variant="body2" color="black" align="center" sx={{ mt: 2 }}>
                                {'New on Our Platform ? '}
                                <Link to={"/register"} style={{ textDecoration: "none", color: "#ff6600", fontWeight: '500' }}>
                                    Create an Account
                                </Link>
                            </Typography>
                            <Stack direction="row" alignItems="center" sx={{ mt: 2 }}>
                                <Box sx={{ flex: 1, height: '1px', bgcolor: 'grey.400' }} />
                                <Typography variant="body2" color="black" align="center" sx={{ px: 2 }}>
                                    or
                                </Typography>
                                <Box sx={{ flex: 1, height: '1px', bgcolor: 'grey.400' }} />
                            </Stack>
                            <Stack
                                sx={{
                                    mt: "1.2rem",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    gap: "1.2rem"
                                }}
                            >
                                <FcGoogle sx={{ cursor: 'pointer' }} size={"1.5rem"} />
                                <FacebookIcon sx={{ color: "#1877F2", fontSize: "1.5rem", cursor: 'pointer' }} />
                            </Stack>
                        </Box>
                    </Box>
                </Container>
            </Grid>
            <Alertbar
                open={snackbar.open}
                onClose={handleCloseSnackbar}
                severity={snackbar.severity}
                message={snackbar.message}
                position={{ vertical: 'top', horizontal: 'right' }}
                sx={{
                    mt: '4rem',
                    mr: "15.5rem"
                }}
            />
        </Grid>
    );
};
export default Login;