import React from 'react';
import { Box, TextField, Button, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const loginImg = require('../../../img/login_bg.jpg')
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
const LoginContainer = styled(Grid)(({ theme }) => ({
    minHeight: '100vh',
    background: {loginImg},
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
            <Grid item xs={12} md={6}>
            <img
              src={loginImg}
              alt="VNT EV Login Form"
              style={{ width: '100%', height: 'auto', margin: '0 auto' }} // Adjust style as needed
            /> 
            </Grid>

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
        </LoginContainer>
    );
}
export default Login;