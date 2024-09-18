import { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";
import { inputStyles } from '../authPagesStyle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { registrationSchema } from "./registrationSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const companyLogo = require('../../../img/logo.png');

function Registration() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const defaultValues = {
        name: "",
        email: "",
        password: "",
        confirm_Password: "",
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registrationSchema),
        defaultValues: defaultValues
    });

    const onSubmit = async (data) => {
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
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
                <Typography variant='h3' fontWeight="700">
                    Find EV Charging Stations and Get Ready to <Typography color="#57b33e" variant='h3' fontWeight="700">Go Green</Typography>
                </Typography>
                <img src={companyLogo} alt='company logo' style={{ width: "8rem", marginTop: '1rem' }} />
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
                            padding: 5,
                            borderRadius: 2,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(10px)',
                            width: '100%',
                        }}
                    >
                        <Typography component="h1" variant="h5" textAlign="center">
                            Welcome to VNT! 👋
                        </Typography>
                        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                {...register("name", { required: true })}
                                margin="normal"
                                fullWidth
                                label="Name"
                                sx={inputStyles}
                            />
                            {errors.name && (
                                <Typography color="red">
                                    *{errors.name.message}
                                </Typography>
                            )}
                            <TextField
                                {...register("email", { required: true })}
                                margin="normal"
                                fullWidth
                                label="Email"
                                sx={inputStyles}
                            />
                            {errors.email && (
                                <Typography color="red">
                                    *{errors.email.message}
                                </Typography>
                            )}
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
                            {errors.password && (
                                <Typography color="red">
                                    *{errors.password.message}
                                </Typography>
                            )}
                            <TextField
                                {...register("confirm_Password", { required: true })}
                                sx={inputStyles}
                                margin="normal"
                                label="Confirm password"
                                fullWidth
                                type={showConfirmPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <VisibilityOff sx={{ color: "#57b33e" }} /> : <Visibility sx={{ color: "#57b33e" }} />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {errors.confirm_Password && (
                                <Typography color="red">
                                    *{errors.confirm_Password.message}
                                </Typography>
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, textTransform: "capitalize", bgcolor: "#57b33e" }}
                            >
                                Sign up
                            </Button>
                            <Typography variant="body2" color="black" align="center" sx={{ mt: 2 }}>
                                {'Already have an account? '}
                                <Link to={"/logIn"} style={{ textDecoration: "none", color: "blue" }}>
                                    Login
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Grid>
        </Grid >
    );
};

export default Registration;
