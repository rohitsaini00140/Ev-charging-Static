import React from "react";
import {Box,Typography,Container, Button,TextField,} from "@mui/material";
import {contact_haiding,contact_text,contactTextStyle,input_style,box_icon,submitButton,error_position } from "./contactdesign";
import { Grid, Stack } from "@mui/system";
import { FaLocationDot,FaPhone  } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { contactschema } from "./contactschema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
 const defaultValues = {
    name: "",
    city: "",
    email: "",
    mobile: "",
    message: "",
}

const { register, handleSubmit, reset, formState: { errors } } = useForm({
  resolver: zodResolver(contactschema),
  defaultValues: defaultValues
});

const onSubmit = async (data) => {
  try {
      console.log(data)
      reset(defaultValues)
  } catch (error) {
      console.log(error)
  }
};
  return (
    <>
      <Box className="contact_bg">
        <Box
          sx={{
            position: "relative",
            inset: 0,
            background:
              "linear-gradient(to top right, rgba(0,0,0,0.56), rgba(0,0,0,0.56))",
            opacity: 0.7,
          }}
        />
        {/* <Box
          sx={{
            height: "90vh",
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              width: {
                md: "38%",
                xs: "80%",
              },
              color: "white",
              marginLeft: { xs: "0", sm: "0", md: "5rem" },
              margin: { xs: "0", sm: "0", md: "0 5rem" },
              fontWeight: "700",
              lineHeight: { xs: "42px", sm: "42px", md: "4rem" },
              fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
            }}
          >
            Find EV Charging Stations and Get Ready to
            <Typography
              variant="h3"
              sx={{
                color: "rgb(87, 179, 62)",
                display: "inline",
                paddingLeft: "1rem",
                fontWeight: "700",
                fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
              }}
            >
              Go Green
            </Typography>
          </Typography>
        </Box> */}
      </Box>
      {/* // Form start here */}
      <Container>
        <Grid container spacing={2} sx={{ margin: "25px 0px" }}>
          <Grid item size={{ sm: 12, md: 6 }}>
            <Typography variant="h3" sx={contact_haiding}>
              Contact Us
            </Typography>
            <Typography  variant="p" sx={contact_text}>
               Get In Touch With Us
            </Typography>
            <Box variant="p" sx={contactTextStyle}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita praesentium autem culpa, maxime assumenda rerum eius similique quam ex beatae velit cum.
            </Box>
            <Stack flexDirection='row' sx={{margin:'30px 0px'}}>
            <Box sx={box_icon}>
            <FaLocationDot  style={{ color: 'white', fontSize: '16px' }} />
            </Box>
            <Box sx={{marginLeft:'15px',marginTop: '3px'}}>
            <Typography variant="h3" sx={{fontSize:'17px',fontWeight:'700',color:'#253745'}}>
              Our Location
            </Typography>
            <Typography  variant="p" sx={contactTextStyle}>
            418 | Sector-7, IMT Manesar Gurgaon Haryana-122050, India
            </Typography>
            </Box>
           </Stack>
           <Stack flexDirection='row' sx={{margin:'30px 0px'}}>
            <Box style={{background:'rgb(2, 18, 30)'}} sx={box_icon}>
            <FaPhone  style={{ color: 'white', fontSize: '16px'}} />
            </Box>
            <Box sx={{marginLeft:'15px',marginTop: '3px'}}>
            <Typography variant="h3" sx={{fontSize:'17px',fontWeight:'700',color:'#253745'}}>
              Phone Number
            </Typography>
            <Typography  variant="p" sx={contactTextStyle}>
              1800 572 7592
            </Typography>
            </Box>
           </Stack>
           <Stack flexDirection='row' sx={{margin:'30px 0px'}}>
            <Box sx={box_icon}>
            <MdOutlineEmail  style={{ color: 'white', fontSize: '20px' }} />
            </Box>
            <Box sx={{marginLeft:'15px',marginTop: '3px'}}>
            <Typography variant="h3" sx={{fontSize:'17px',fontWeight:'700',color:'#253745'}}>
              Email Address
            </Typography>
            <Typography  variant="p" sx={contactTextStyle}>
             info@vnt.in
            </Typography>
            </Box>
           </Stack>
          </Grid>
          <Grid item size={{ sm: 12, md: 6 }}>
            <Box sx={{marginTop:'15px'}} component="form" onSubmit={handleSubmit(onSubmit)}>
              <Grid container>
                <Grid container spacing={2} size={12}>
                  <Grid item size={{ xs:12, sm:12, md: 6,lg:6 }}>
                  <Box sx={{ position: "relative",margin:'3px 0px' }}>
                    <TextField margin="normal" sx={input_style} {...register("name")} fullWidth label="Your Name" />
                    {errors.name && <Typography sx={error_position}>*{errors.name.message}</Typography>}
                    </Box>
                  </Grid>
                  <Grid item size={{xs:12, sm:12, md: 6,lg:6}}>
                    <Box sx={{ position: "relative",margin:'3px 0px' }}>
                    <TextField margin="normal"  sx={input_style}{...register("city")} fullWidth label="City Name" />
                    {errors.city && <Typography sx={error_position}>*{errors.city.message}</Typography>}
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={2} size={12}>
                  <Grid item size={{ xs:12, sm:12, md: 6,lg:6}}>
                    <Box sx={{ position: "relative", margin:'3px 0px' }}>
                    <TextField sx={input_style} {...register("email")} margin="normal" fullWidth label="Email" />
                    {errors.email && <Typography sx={error_position}>*{errors.email.message}</Typography>}
                    </Box>
                  </Grid>
                  <Grid item size={{ xs:12, sm:12, md: 6,lg:6 }}>
                  <Box sx={{ position: "relative",margin:'3px 0px' }}>
                  <TextField  sx={input_style} {...register("mobile")} margin="normal" fullWidth label="Mobile No"/>                   
                   {errors.mobile && <Typography sx={error_position}>*{errors.mobile.message}</Typography>}
                   </Box>
                 </Grid>
                </Grid>
                <Grid container spacing={2} size={12}>
                  <Grid item size={{ sm: 12, md: 12,xs:12 }}>
                    <Box sx={{ position: "relative",margin:'3px 0px' }} >
                    <TextField
                      multiline
                      minRows={4}
                      placeholder="Message "
                      fullWidth
                      {...register("message")}
                      margin="normal"
                      label="Message"
                      sx={{
                        "&. MuiFormLabel-root-MuiInputLabel-root":{
                          fontSize: '0.8rem'
                        }
                      }}
                    />
                  {errors.message && <Typography sx={error_position} >*{errors.message.message}</Typography>}
                  </Box>
                 </Grid>
                </Grid>
                <Button sx={submitButton} type ="sumbit">Sumbit</Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default ContactUs;
