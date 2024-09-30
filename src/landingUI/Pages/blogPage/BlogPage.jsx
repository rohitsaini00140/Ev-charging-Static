import React from 'react'
import {Box, Typography} from "@mui/material";
import { Grid, Stack,Container } from "@mui/system";
import { blogpara } from './blogsStyle';

var blog_img = require('../../img/blog1.jpg')


function BlogPage() {
  return (
    <>
    <Box className="vnt_bg">
    <Box sx={{position: "relative",inset: 0,background:"linear-gradient(to top right, rgba(0,0,0,0.56), rgba(0,0,0,0.56))",opacity: 0.7,}}/>
  </Box>
<Stack sx={{margin:'20px 0px'}}>
<Container>
   <Grid container spacing={1}>
   <Grid item  size={{xs:12,sm:8}}>
   <Typography sx={{fontWeight:'700',fontSize: '27px'}} variant='h3'>
   Strategic Solar Integration: Boosting Manufacturing Efficiency With Our Tailored Solution
    
   </Typography>
   <img style={{ width: '65%', margin: '15px 0' }} src={blog_img} alt="VNT Blog" />

   <Typography sx={blogpara} variant='p'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dicta adipisci asperiores vel, similique voluptates expedita magnam, quidem modi <br /> <br /> minima libero, quos ipsum et? Eaque ipsa alias, minima doloremque sunt laudantium, praesentium nihil unde, consequatur voluptates obcaecati quae ipsam at quod provident? Dolorem, neque! Asperiores quibusdam maxime cum ipsa nisi ut quo aliquid, facilis eos placeat et, laborum id inventore quas tempore autem soluta?  <br /> <br /> Nostrum consequatur error ad quis obcaecati necessitatibus asperiores aspernatur aliquid nemo voluptate? Provident impedit quo eius, est excepturi ad, nam fugit facilis consequuntur maxime quibusdam. Eum omnis quia assumenda asperiores eaque adipisci voluptates ipsa corporis magni.
   </Typography>
   </Grid>
   <Grid item size={{xs:12,sm:4}} >
     <Typography sx={{fontWeight:'600',textAlign:'center'}} variant='h5'>
      Recent Post
     </Typography>
   </Grid>
 </Grid>
</Container>
 </Stack>
</>)}

export default BlogPage
