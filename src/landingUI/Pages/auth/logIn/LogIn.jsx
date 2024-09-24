import { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@mui/icons-material/Facebook";
import { inputStyles } from '../../authPagesStyle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { loginSchema } from "./logInSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const companyLogo = require('../../../img/logo.png');

function Login() {

    // password show and hide
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const defaultValues = {
        name: "",
        email: "",
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
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
                <Typography variant='h3' fontWeight={"700"}>Find EV Charging Stations and Get Ready to <Typography color="#57b33e" variant='h3' fontWeight={"700"}>Go Green</Typography></Typography>
                <img src={companyLogo} alt='error' style={{ width: "8rem" }} />
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
                        <Typography component="h1" sx={{fontWeight:'600',color:'#253745'}} variant="h5" textAlign={"center"}>
                            Login VNT! 👋
                        </Typography>
                        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                {...register("email", { required: true })}
                                margin="normal"
                                fullWidth
                                label="Email"
                                sx={inputStyles}
                            />
                            {errors.email && <Typography style={{fontSize:'.85rem'}} color={"red"}>*{errors.email.message}</Typography>}
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
                            {errors.password && <Typography style={{fontSize:'.85rem'}} color={"red"}>*{errors.password.message}</Typography>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 1, textTransform: "capitalize", bgcolor: "#57b33e" }}
                            >
                                Login
                            </Button>
                            <Link to={""} style={{ textDecoration: "none", fontSize: '15px', fontWeight:'600', color: "#253745" }}>
                                Forgot Password?
                            </Link>
                            <Typography variant="body2" color="black" align="center" sx={{ mt: 2 }}>
                                {'New on Our Platform ? '}
                                <Link to={"/register"} style={{ textDecoration: "none", color: "#ff6600",fontWeight:'500' }}>
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
                                <FcGoogle sx={{cursor:'pointer'}} size={"1.5rem"} />
                                <FacebookIcon sx={{ color: "#1877F2", fontSize: "1.5rem",cursor:'pointer' }} />
                            </Stack>
                        </Box>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );
};
export default Login;