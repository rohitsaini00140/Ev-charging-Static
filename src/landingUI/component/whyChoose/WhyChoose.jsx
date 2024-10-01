import React from 'react'
import { Container,Box, Typography} from '@mui/material';
import { Grid,Stack } from "@mui/system";

function WhyChoose() {
 const imageSrc = require('../../img/machine.png');
 const icon1 = require('../../img/icon1.png');
 const icon2 = require('../../img/icon2.png');
 const icon3 = require('../../img/icon3.png');
 const icon4 = require('../../img/icon4.png');
  return (
        <>
         <Container>
           <Stack sx={{textAlign:'center'}}>
         <Typography variant="h6" sx={{ color: 'rgb(87, 179, 62)', fontSize:'25px',  fontWeight:'700' }}>
              Why Choose Us
              </Typography>
              <Typography variant="body2" sx={{ color: '#253745' ,fontWeight:'700',fontSize:'24px',linHeight: '28px' }}>
              VNT EV Charging is the Biggest EV Charging Station in the World
              </Typography>
              </Stack>
      <Box sx={{ padding: {
      xs: '10px 10px',       
      sm: '10px 10px',       
      md: '10px 40px',      
    }}}>
      <Grid container spacing={3}>
      <Grid item size = {{xs:12, sm:6 ,md:4}}>
      <Box sx={{ margin: '20px 0px'}}>
      <img
              src={icon1}
              alt="VNT EV Machine"
              style={{ width: '60px', height: '60px', margin: '0 auto' }} // Adjust style as needed
            /> 
        <Typography variant='h6' sx={{fontWeight:'700',color:'rgb(12, 34, 38)'}}>
          Fast Charging
        </Typography>
        <span style={{ textAlign:'justify', color:'rgba(0, 0, 0, 0.6)',fontSize:' 0.94rem',
       lineHeight: '1.43',display:'block',margin:'5px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo, rem architecto at error explicabo tempora molestias consequatur recusandae ratione</span>
       </Box>
       <Box sx={{ margin: '20px 0px'}}>
      <img
              src={icon2}
              alt="VNT EV Machine"
              style={{ width: '60px', height: '60px', margin: '0 auto' }} // Adjust style as needed
            /> 
        <Typography variant='h6' sx={{fontWeight:'700',color:'rgb(12, 34, 38)'}}>
          Mangement System
        </Typography>
        <span style={{ textAlign:'justify', color:'rgba(0, 0, 0, 0.6)',fontSize:' 0.94rem',
        lineHeight: '1.43',display:'block',margin:'5px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo, rem architecto at error explicabo tempora molestias consequatur recusandae ratione</span>
       </Box>
      </Grid>
      <Grid item size = {{xs:12, sm:6 ,md:4}} >
      <img
              src={imageSrc}
              alt="VNT EV Machine"
              style={{ width: '100%',paddingTop: '60px', height: 'auto', margin: '0 auto' }} // Adjust style as needed
            /> 
      </Grid>
      <Grid item size = {{xs:12, sm:6 ,md:4}} >
      <Box sx={{ margin: '20px 0px'}}>
      <img
              src={icon3}
              alt="VNT EV Machine"
              style={{ width: '60px', height: '60px', margin: '0 auto' }} // Adjust style as needed
            /> 
             <Typography variant='h6' sx={{fontWeight:'700',color:'rgb(12, 34, 38)'}}>
          Renewable Energy
        </Typography>
        <span style={{ textAlign:'justify', color:'rgba(0, 0, 0, 0.6)',fontSize:' 0.94rem',
    lineHeight: '1.43',display:'block',margin:'5px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo, rem architecto at error explicabo tempora molestias consequatur recusandae ratione</span>
       </Box>
       <Box sx={{ margin: '20px 0px'}}>
      <img
              src={icon4}
              alt="VNT EV Machine"
              style={{ width: '60px', height: '40px', margin: '0 auto' }} // Adjust style as needed
            /> 
 <Typography variant='h6' sx={{fontWeight:'700',color:'rgb(12, 34, 38)'}}>
         Hight Quality Charger
        </Typography>
        <span style={{ textAlign:'justify', color:'rgba(0, 0, 0, 0.6)',fontSize:' 0.94rem',
    lineHeight: '1.43',display:'block',margin:'5px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo, rem architecto at error explicabo tempora molestias consequatur recusandae ratione</span>

       </Box>
      </Grid>
       </Grid>
     </Box>
   </Container>
   </>
  )
}
export default WhyChoose
