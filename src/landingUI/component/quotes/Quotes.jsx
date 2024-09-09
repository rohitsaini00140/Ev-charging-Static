import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Typography,Box,Container } from '@mui/material';
function Quotes() {
  return (
    <div>
     <Container>
       <Box sx={{ background: '#02121e', textAlign:'center', margin:'30px 0px', padding:{
        xs: '10px 10px' ,  
       sm: '10px 10px' , 
      md: '20px 40px' , 
     lg: '20px 40px' ,  
     xl: '20px 40px'
       } ,marginTop:'0px'}}>
           <div sx={{display:'grid',placeItems:'center',margin:'0 auto'}}>
           <FormatQuoteIcon sx={{color:'rgb(87, 179, 62)',fontSize:'40px'}}/>
           </div>
         <Typography sx={{color:'#fff',textAlign:'center'}}>
         "In Order To Have Clean Air In Cities, You Have To Go Electric" <br />
           <b style={{color:'rgb(87, 179, 62)'}}>- Elon Musk</b>
         </Typography>
       </Box>
    </Container>
    </div>
  )
}
export default Quotes
