import { Container,Box ,Stack,Button} from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import { FaCar } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";
import { Grid } from "@mui/system";
import { Link } from "react-router-dom";

function ChargingStation() {
const imageSrc = require("../../img/car_new.png");
  return (
    <Container>
    <Grid container spacing={3} sx={{margin:'15px 0px'}}>
  <Grid item size = {{xs:12,sm:6}}>
    <Typography variant="h6" sx={{color: 'rgb(87, 179, 62)', fontWeight: '700',fontSize:'22px'}}>About VNT EV</Typography>
    <Typography
      variant="h6"
      sx={{ fontWeight: '700', margin:'7px 0px', color: '#253745',fontSize: '1.6rem',
        lineHeight: '30px',textTransform:'capitalize' }}
      >We provide  best solutions for your electric vehicle
    </Typography>
    <span style={{ textAlign:'justify', color:'rgba(0, 0, 0, 0.6)',fontSize:' 0.975rem',
    lineHeight: '1.43',display:'block',margin:'5px 0px',
    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo rem architecto at error explicabo tempora</span>
    <Stack direction="row" spacing={2} sx={{margin:'30px 0px'}}>
      <Box 
        sx={{ 
          width:{
            xs: '180px', 
            sm: '100px', 
            md: '80px', 
            lg: '80px', 
            xl: '80px'
          },
          height: '40px', 
          marginTop: '15px',
          display:'grid',
          placeItems:'center',
          borderRadius: '6px', 
          boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
          background: 'rgb(87, 179, 62)' 
        }}> <TbBulbFilled style={{ fontSize: '25px', color: 'white' }} />   </Box >
      <Stack sx={{ paddingLeft:'18px'}}>
        <Typography
          variant="h5"
          sx={{ 
            fontWeight: '700', 
            color: '#253745',
            fontSize: '1.1rem',
            lineHeight: '30px',
            textTransform: 'capitalize' 
          }}
        >
         Save More Energy
        </Typography>
        <Typography
          variant="body2"
          sx={{ 
            color: 'rgba(0, 0, 0, 0.6)',
            fontSize: '15px',
            lineHeight: '1.43',
            paddingRight:{
              xs: '16px',  // 16px padding on extra-small screens
              sm: '10px',  // 32px padding on small screens
              md: '48px',  // 48px padding on medium screens
              lg: '64px',  // 64px padding on large screens
              xl: '100px'  // 100px padding on extra-large screens
            },
            textAlign:'justify'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo rem architecto at error explicabo tempora.
        </Typography>
      </Stack>
    </Stack>
    <Stack direction="row" spacing={2} sx={{margin:'30px 0px'}}>
      <Box 
        sx={{ 
          width:{
            xs: '180px',  // 16px padding on extra-small screens
            sm: '100px',  // 32px padding on small screens
            md: '80px',  // 48px padding on medium screens
            lg: '80px',  // 64px padding on large screens
            xl: '80px'  // 100px padding on extra-large screens
          },
          height: '40px', 
          marginTop: '15px',
          display:'grid',
          placeItems:'center',
          borderRadius: '5px', 
          boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
          background: '#253745' 
        }} 
      ><FaCar style={{ fontSize: '25px', color: 'white' }} />  </Box>
      <Stack sx={{ paddingLeft:'18px'}}>
        <Typography
          variant="h6"
          sx={{ 
            fontWeight: '700', 
            color: '#253745',
            fontSize: '1.1rem',
            lineHeight: '30px',
            textTransform: 'capitalize' 
          }}
        >
          Smart Connected
        </Typography>
        <Typography
          variant="body2"
          sx={{ 
            color: 'rgba(0, 0, 0, 0.6)',
            fontSize: '15px',
            lineHeight: '1.43',
            paddingRight:{
              xs: '16px',  // 16px padding on extra-small screens
              sm: '10px',  // 32px padding on small screens
              md: '48px',  // 48px padding on medium screens
              lg: '64px',  // 64px padding on large screens
              xl: '100px'  // 100px padding on extra-large screens
            },
            textAlign:'justify'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo rem architecto at error explicabo tempora.
        </Typography>
      </Stack>
    </Stack>
   <Link to ="/about">
    <Button variant="contained" sx={{background:'rgb(87, 179, 62)',color:'white'}}>
     More About Us
    </Button>
    </Link>
  </Grid>
  <Grid item size = {{xs:12,sm:6}}>
    <img
      src={imageSrc}
      alt="VNT EV Machine"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '3px',
      }}
    />
  </Grid>
</Grid>
</Container>
  );
}
export default ChargingStation;
