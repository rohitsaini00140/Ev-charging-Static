import { Container, Box,Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import {Grid} from '@mui/system';

function Appspic() {
    const playstore = require('../../img/play.png');
    const aapstore = require('../../img/app.png');
    const aapMobile = require('../../img/mobile.png');
    return (
    <Container>
      <Box sx={{ background: '#f4faef', padding: '20px 40px'}}>
        <Grid container spacing={2}>
          <Grid item size = {{xs:12,sm:6}}>
            <Typography variant="h6" sx={{fontWeight:'700', fontSize:'30px',lineHeight:'34px',marginTop:'13px'}}>
                GET Charged up<br />
                Install Our Ev Charging APP Today
            </Typography>
            <span style ={{marginTop:'10px', display:'block',color:'rgba(0, 0, 0, 0.6)'}}>The App is designed to provide a convenient and soomloss experience for electric vehicle own.
            </span>
            <Grid container spacing={2}>
            <Grid item size = {{xs:12,sm:6}}>
            <Box sx={{width:'100%',padding:'30px 0px',display:'flex',  flexWrap: {
      xs: 'wrap',    
      sm: 'wrap',    
      md: 'wrap',    
      lg: 'nowrap',  
      xl: 'nowrap', 
    },  }} >
            <Link >
            <img
              src={playstore}
              alt="VNT Play Store"
              style={{ width: '150px', borderRadius:'5px', height: '45px', margin: '6px auto 0px 10px' }} // Adjust style as needed
            /> 
            </Link>
            <Link >
            <img
              src={aapstore}
              alt="VNT App Store"
              style={{ width: '150px', borderRadius:'5px', height: '45px', margin: '6px auto 0px 10px' }} // Adjust style as needed
            /> 
            </Link>
             </Box>
            </Grid>
            </Grid>
          </Grid>
          <Grid item size = {{xs:12,sm:6}}>
            <img
              src={aapMobile}
              alt="VNT App Store"
              style={{ width: '90%', borderRadius:'5px', height: 'auto', margin: '0 auto',marginLeft:'20px' }} // Adjust style as needed
            /> 
        </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Appspic