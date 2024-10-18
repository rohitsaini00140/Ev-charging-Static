import React from 'react';
import { useState} from 'react';
import { Container,Box, Stack, Typography,LinearProgress} from '@mui/material';
import {Grid } from "@mui/system";

function WhoareWe() {
 const mapImg = require('../../img/map.png');
const [fastCharging] = useState(91);
const [energyManagement] = useState(89);
const [energyStorage] = useState(92);
  return (
    <Stack sx={{ background: '#fafafa', padding: '10px 0', marginTop:'50px' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item size = {{xs:12,md:6}}>
          <img
         src={mapImg}
        alt="VNT EV Maps"
         style={{
        width: '100%',
        height: 'auto',
        borderRadius: '3px',
         }}
        />
         </Grid>
          <Grid item size = {{xs:12,md:6}}>
            <Box
              sx={{
                padding:{
                    xs: '20px 10px',
                    sm: '20px 40px', 
                    lg: '20px 40px', 
                    xl: '20px 40px' 
                  },
                borderRadius: '8px',
                textAlign: 'left',
              }}
            >
              <Typography variant="h6" sx={{ color: 'rgb(87, 179, 62)', fontSize:'22px',  fontWeight:'700' }}>
                Who We Are
              </Typography>
              <Typography variant="body2" sx={{ color: '#253745',margin:'6px 0px' ,fontWeight:'700',fontSize:'20px',linHeight: '28px' }}>
               Professional Electric Vechicle Charging Solution For You
              </Typography>
              <span style={{ textAlign:'justify', color:'rgba(0, 0, 0, 0.6)',fontSize:' 0.975rem',
             lineHeight: '1.43',display:'block',margin:'5px 0px',
              }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo rem architecto at error explicabo tempora Provident adipisci nemo rem architecto at error explicabo temporaProvident adipisci nemo rem architecto at error explicabo tempora</span>
            </Box>
            <Box sx={{padding: {
                    xs: '20px 10px',
                    sm: '20px 40px', 
                    lg: '20px 40px', 
                    xl: '20px 40px' 
                  },}}>
        <Typography variant="h6" sx={{color:'#253745',fontWeight:'700',fontSize:'16px'}}>Fast Charging</Typography>
        
        <LinearProgress variant="determinate" sx={{height:'8px',borderRadius:'10px',background:'#e7e8e9','& .MuiLinearProgress-bar': {
          backgroundColor: '#56a745', // Color for the progress bar
         },}} value={fastCharging} />
        
        <Typography  variant="body2" align="right">{fastCharging}%</Typography>
        <Typography variant="h6" sx={{color:'#253745',fontWeight:'700',fontSize:'16px'}} mt={2}>Energy Management Systems</Typography>
       
        <LinearProgress sx={{height:'8px',borderRadius:'10px',background:'#e7e8e9' ,'& .MuiLinearProgress-bar': {
      backgroundColor: '#253644', // Color for the progress bar
        },}} variant="determinate" value={energyManagement} color="secondary" />
        
        <Typography variant="body2" align="right">{energyManagement}%</Typography>
        
        <Typography variant="h6" sx={{color:'#253745',fontWeight:'700',fontSize:'16px'}} mt={2}>Energy Storage Systems</Typography>
        
        <LinearProgress sx={{height:'8px',borderRadius:'10px',background:'#e7e8e9','& .MuiLinearProgress-bar': {
      backgroundColor: '#56a745', // Color for the progress bar
    }, }} variant="determinate" value={energyStorage} />
        
        <Typography   variant="body2" align="right">{energyStorage}%</Typography>
      </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default WhoareWe;
