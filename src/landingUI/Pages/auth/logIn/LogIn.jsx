// import { useState } from 'react';
// import { Box, Button, TextField, Typography, Stack } from '@mui/material';
// import { inputStyles } from '../authPagesStyle';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import KeyIcon from '@mui/icons-material/Key';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import authBgImage from "../../../img/authBgImage.png";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebookSquare } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { useLocation } from "react-router-dom";

// function LogIn() {

//     const [showAndHide, setShowAndHide] = useState(false)

//     function showAndHidePswd() {
//         setShowAndHide(!showAndHide)
//     }

//     let location = useLocation()

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: { xs: 'column', md: 'row' },
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 minHeight: '100vh',
//                 background: "rgb(240,245,249)",
//                 background: "radial-gradient(circle, rgba(240,245,249,1) 0%, rgba(197,239,235,1) 100%)",
//                 padding: { xs: "2rem 1rem", md: "0rem 5rem" }
//             }}
//         >
//             <Stack
//                 sx={{
//                     width: { xs: "100%", md: "480px" },
//                     // border: { xs: "none", md: "1px solid" },
//                     padding: { xs: '1rem', md: '0' },
//                     marginBottom: { xs: '2rem', md: '0' },
//                 }}
//             >
//                 <Box
//                     sx={{
//                         display: "flex",
//                         marginBottom: "1rem",
//                         justifyContent: "space-around"
//                     }}
//                 >
//                     <Link to={"/logIn"} style={{ textDecoration: "none" }}>
//                         <Typography variant="h6" gutterBottom color='rgb(87, 179, 62)' sx={{
//                             borderBottom: (location.pathname === "/logIn") && "2px solid rgb(87, 179, 62)",
//                             px: (location.pathname === "/logIn") && "3px"
//                         }}>
//                             Login
//                         </Typography>
//                     </Link>
//                     <Link to={"/register"} style={{ textDecoration: "none" }}>
//                         <Typography variant="h6" gutterBottom color='rgb(87, 179, 62)' sx={{
//                             borderBottom: (location.pathname === "/register") && "2px solid rgb(87, 179, 62)",
//                             px: (location.pathname === "/register") && "3px"
//                         }}>
//                             Sign up
//                         </Typography>
//                     </Link>
//                 </Box>
//                 <Box
//                     sx={{ display: "flex", gap: "1rem", margin: "0rem 2rem 2rem 2rem" }}
//                 >
//                     <Box
//                         sx={{
//                             border: ".1px solid rgb(87, 179, 62)",
//                             padding: ".5rem 0rem",
//                             width: "50%",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center"
//                         }}
//                     ><FcGoogle size={"1.5rem"} /></Box>
//                     <Box
//                         sx={{
//                             border: ".1px solid rgb(87, 179, 62)",
//                             padding: ".5rem 0rem",
//                             width: "50%",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center"
//                         }}
//                     ><FaFacebookSquare color='blue' size={"1.5rem"} /></Box>
//                 </Box>
//                 <form>
//                     <Box
//                         sx={{
//                             borderRadius: "5rem",
//                             width: "100%",
//                             height: "3rem",
//                             display: "flex",
//                             alignItems: "center",
//                             gap: ".5rem",
//                             padding: "0rem 2rem",
//                             marginBottom: "2rem",
//                             boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)"
//                         }}
//                     >
//                         <AccountCircleIcon sx={{ color: 'rgb(87, 179, 62)' }} />
//                         <TextField
//                             label="Email"
//                             variant="outlined"
//                             sx={inputStyles}
//                             fullWidth
//                         />
//                     </Box>
//                     <Box
//                         sx={{
//                             borderRadius: "5rem",
//                             width: "100%",
//                             height: "3rem",
//                             display: "flex",
//                             alignItems: "center",
//                             gap: ".5rem",
//                             padding: "0rem 2rem",
//                             marginBottom: "2rem",
//                             boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)"
//                         }}
//                     >
//                         <KeyIcon sx={{ color: 'rgb(87, 179, 62)' }} />
//                         <TextField
//                             label="Password"
//                             type={showAndHide ? "text" : "password"}
//                             variant="outlined"
//                             sx={inputStyles}
//                             fullWidth
//                         />
//                         {showAndHide ? <VisibilityIcon sx={{ color: 'rgb(87, 179, 62)', cursor: "pointer" }} onClick={showAndHidePswd} /> : <VisibilityOffIcon sx={{ color: 'rgb(87, 179, 62)', cursor: "pointer" }} onClick={showAndHidePswd} />}
//                     </Box>
//                     <Box
//                         sx={{
//                             display: "flex",
//                             flexDirection: "row",
//                             justifyContent: "space-between"
//                         }}
//                     >
//                         <Typography variant="body2" sx={{ marginTop: 1 }}>
//                             Forgot your password?
//                         </Typography>
//                         <Button
//                             variant="contained"
//                             type="submit"
//                             sx={{
//                                 borderRadius: "5rem",
//                                 textTransform: "capitalize",
//                                 bgcolor: 'rgb(87, 179, 62)'
//                             }}
//                         >
//                             Login
//                         </Button>
//                     </Box>
//                 </form>
//             </Stack>
//             <Stack
//                 sx={{
//                     width: { xs: "100%", md: "500px" },
//                     // border: { xs: "none", md: "1px solid" },
//                     display: { xs: 'none', md: 'block' }, // Hide image on small screens
//                 }}
//             >
//                 <img src={authBgImage} alt="Login Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//             </Stack>
//         </Box>
//     );
// }

// export default LogIn;


import React from 'react';
import { Box, TextField, Button, Checkbox, FormControlLabel, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styled Components
const FormContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '480px',
    border: "1px solid black",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('md')]: {
        width: '90%',
        margin: '0 auto',
    },
}));

const RightSide = styled(Box)(({ theme }) => ({
    background: 'url(https://i.pinimg.com/736x/4a/90/33/4a903338c0e478248153bd8f3f6f6745.jpg) center/cover no-repeat',
    width: '100%',
    maxWidth: '480px',
    border: "1px solid black",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: "100%",
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const LoginContainer = styled(Grid)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: "8rem 0rem 5rem 0rem"
}));

const SocialButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    borderRadius: '50px',
    textTransform: 'none',
}));

function Login() {
    return (
        <LoginContainer container>
            {/* Left Side - Form */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                <FormContainer>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        SIGN IN
                    </Typography>
                    <TextField fullWidth label="Username or Email" margin="normal" variant="outlined" />
                    <TextField fullWidth label="Password" margin="normal" type="password" variant="outlined" />
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Link href="#" underline="none" variant="body2">
                            Forgot Password?
                        </Link>
                    </Box>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        SIGN IN
                    </Button>

                    <Typography variant="body2" color="textSecondary" mt={3} mb={1}>
                        Or Sign In with
                    </Typography>

                    <SocialButton fullWidth variant="outlined" startIcon={<GoogleIcon />} color="inherit">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton fullWidth variant="outlined" startIcon={<FacebookIcon />} color="inherit">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton fullWidth variant="outlined" startIcon={<LinkedInIcon />} color="inherit">
                        Sign in with LinkedIn
                    </SocialButton>

                    <Typography variant="body2" mt={3}>
                        Not a member? <Link href="#" underline="none">Sign Up</Link>
                    </Typography>
                </FormContainer>
            </Grid>

            {/* Right Side - Background Image */}
            <Grid item xs={false} md={6}>
                <RightSide />
            </Grid>
        </LoginContainer>
    );
}

export default Login;