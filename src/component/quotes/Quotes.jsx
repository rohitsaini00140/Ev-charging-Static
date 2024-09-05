import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Typography,Box,Container } from '@mui/material';
function Quotes() {
  return (
    <div>
     <Container>
       <Box sx={{ background: '#232a2b', textAlign:'center', padding: '20px 40px',marginTop:'30px'}}>
           <div sx={{display:'grid',placeItems:'center',margin:'0 auto'}}>
           <FormatQuoteIcon sx={{color:'#99ff00',fontSize:'40px'}}/>
           </div>
         <Typography sx={{color:'#fff',textAlign:'center'}}>
         "In Order To Have Clean Air In Cities, You Have To Go Electric" <br />
           <b style={{color:'#99ff00'}}>- Elon Musk</b>
         </Typography>
       </Box>
    </Container>
    </div>
  )
}
export default Quotes
