import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { Stack} from "@mui/system";
import { FcGoogle } from "react-icons/fc";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { inputStyles } from "../authPagesStyle";

import { FormContainer,iconstyle ,LoginContainer, SocialButton } from "./Login_style";
const logo_img = require("../../../img/logo.png")

function Login() {
  return (
    <LoginContainer container>
      <Grid sx={{ /* fallback for old browsers */
    //    background: '-webkit-linear-gradient(to right, #ffff1c, #00c3ff)', /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to right, #ffff1c, #00c3ff);' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }} item size={{ xs: 12, md: 6 }}>
        {/* <img
        //   src={loginImg}
          alt="VNT EV Login Form"
          style={{ width: "100%", height: "auto", margin: "0 auto" }} // Adjust style as needed
        /> */}
      </Grid>
      <Grid
        item
        size={{xs:12, md:6}}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FormContainer>
        <img
          src={logo_img}
          alt="VNT Login Img"
          style={{ width: "100px", height: "auto", margin: "0 auto" }} // Adjust style as needed
        />
          <Typography variant="h4" sx={{color:'#253745'}} fontWeight="bold">
            Welcome Back
          </Typography>
          <Typography variant="span" sx={{color:'rgba(0, 0, 0, 0.6)',fontSize: '13px'}}>
            Please Login Your Account
          </Typography>
         
         <TextField  sx={{mt:3, ...inputStyles }} fullWidth id="user_name" label="Email and Username" variant="standard" />
         <TextField sx={{mt:3,fontSize:'11px'}}  fullWidth id="password" label="Password" variant="standard" />


          <Box display="flex" justifyContent="space-between" width="100%">
            <Link href="#" sx={{marginTop:'10px',fontWeight:'600',color:'#253745'}} underline="none" variant="body2">
              Forgot Password?
            </Link>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              color: "white",
              fontWeight: "600",
              mt: 2,
              padding:'12px 16px' ,
              backgroundColor: "rgb(87, 179, 62)",
            }}
          >
            SIGN IN
          </Button>
          <Typography variant="body2"  sx={{color:'#253745',fontWeight:'600'}} mt={2} mb={1}>
            Or Sign In with
          </Typography>
          <Stack direction="row">
            <SocialButton startIcon={<FcGoogle style={iconstyle}/>}
            ></SocialButton>
            <SocialButton
              startIcon={<FacebookIcon sx={{ ...iconstyle  , color: "#1877F2" }} />}
            ></SocialButton>
            <SocialButton
              startIcon={<LinkedInIcon  sx={{ ...iconstyle, color: "#0274b3" }}
              />}
              color="inherit"
            ></SocialButton>
          </Stack>
          <Typography sx={{color:'#253745'}} variant="body2" mt={1}>
            Not a Member?{" "}
            <Link sx={{color:'#253745',fontWeight:'600'}} href="#" underline="none">
              Sign Up
            </Link>
          </Typography>
        </FormContainer>
      </Grid>
    </LoginContainer>
  );
}
export default Login;
