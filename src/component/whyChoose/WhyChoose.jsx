import React from 'react'
import { Container,Box, Typography } from '@mui/material';

function WhyChoose() {
  return (
    <Container>
       <span style={{ color: '#ff6600', display: 'block', fontSize: '24px', fontWeight: 'bold', textAlign: 'center',marginTop:'30px' }}>Why Choose Us</span>
        <Typography variant="h6" gutterBottom color="#0c2226" style={{ textAlign: 'center', fontWeight: '600', marginBottom: '15px' }}>
          <b> VNT EV Charging is the Biggest EV Charging Station in the world  </b>
        </Typography>
         <p style={{color:'#0009',textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam repellat sapiente minus libero officia, nulla necessitatibus ab sit, suscipit corrupti inventore obcaecati tenetur. Enim.</p>
      <Box sx={{ padding: '20px 40px',marginTop:'30px'}}>
     </Box>
   </Container>
  )
}

export default WhyChoose
