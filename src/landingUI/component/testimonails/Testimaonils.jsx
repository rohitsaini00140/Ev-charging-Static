import React from 'react'
import {Card, CardContent, CardMedia } from '@mui/material';
import { Stack,Container,Grid,Typography } from "@mui/material";
import Slider from 'react-slick';
import { RiDoubleQuotesR } from "react-icons/ri";

const blogPosts = [
    {
      title: 'Rohit Saini',
      des: 'Software Enginner',
      image: 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-young-service-boy-vector-download-user-icon-vector-avatar-png-image_5257569.jpg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodiLorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi',
    },
    {
      title: 'Shivani Shah',
      des: 'Software Developer',
      image: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi',
    },
    {
      title: 'Aadrash Gupta',
      des: 'Businessman',
      image: 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-young-service-boy-vector-download-user-icon-vector-avatar-png-image_5257569.jpg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi',
    },
    {
      title: 'Notra Bolly',
      des: 'Student',
      image: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi',
    },
  
    {
      title: 'Satish Chauhan',
      des: 'Car Driver',
      image: 'https://png.pngtree.com/png-clipart/20200225/original/pngtree-young-service-boy-vector-download-user-icon-vector-avatar-png-image_5257569.jpg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi',
    },
    // Add more posts as needed
  ];
function Testimaonils() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows: false,
        autoplay: true, // Enable auto-sliding
        autoplaySpeed: 3000, // Time between slides (in milliseconds)
        responsive: [
          {
            breakpoint: 1024, // Large screens (e.g., desktops)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 768, // Medium screens (e.g., tablets)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 480, // Small screens (e.g., mobile phones)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      };


  return (
  <>
    <Stack sx={{ background: '#02121e', padding: '60px 0', marginTop:'50px' }}>
    <Container>
    <Grid container spacing={3}>
    <Grid item xs={12}  md={6} sx={{padding:{
  xs: '10px 10px',    
  sm: '10px 10px',    
  md: '10px 50px',    
  lg: '10px 50px',  
  xl: '10px 50px', 
    }
       
    }}>
    <span style={{ color: 'rgb(87, 179, 62)', textTransform:'uppercase', fontWeight: '600',fontSize:'16px' }}>Testimonials</span>
    <Typography variant="h6" sx={{fontWeight:'600', fontSize:'30px', color: '#fff' , lineHeight:'38px',marginTop:'13px'}}>
                We are Trusted Over 40+ Countries WorldWide
            </Typography>
            <Typography variant="p" sx={{ fontSize:'14px', textAlign:'justify', display:'block', color: '#fff9',marginTop:'13px'}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod enim aliquid harum beatae provident debitis, qui laudantium autem, rerum suscipit adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias laborum laboriosam deserunt ullam quos eos nihil distinctio quaerat tenetur, dolor, inventore fuga.
            </Typography>

    </Grid>
    <Grid item xs={12}  md={6}>
    <Slider {...settings} sx={{marginTop: '30px'}}>
          {blogPosts.map((post, index) => (
            <div key={index}>
              <Card sx={{ margin: '0px 10px',padding: {
                  xs: '30px 10px',    
                  sm: '30px 0px',    
                  md: '30px 30px',    
                  lg: '30px 3px',  
                  xl: '30px 30px', 
              } }}>
              <Typography sx={{fontStyle:'oblique'}} variant="body2" color="text.secondary">
                    {post.content}
                  </Typography>
                  <Grid container spacing={3}>
                  <Grid item xs={10}  md={8}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ display: 'flex',marginTop:'20px' }}>
          <CardMedia
         component="img"
         alt={post.title}
        height="50"
        width="50"
         borderRadius='50%'
        image={post.image}
        sx={{ borderRadius: '50%',width:'50px' }}
         title={post.title}
    />
    <CardContent sx={{marginTop:'20px'}}> 
      <Typography 
        variant="h5" 
        component="div" 
        sx={{
          fontWeight: '600',
          fontSize: '18px',
          cursor: 'pointer',
          zIndex: '999',
          "&:hover": {
            color: 'rgb(87, 179, 62)',
            transition: '0.20s'
          }
        }}
      >
          {post.title}
      </Typography>
      <span style={{fontSize:'14px'}}>{post.des}</span>
    </CardContent>
  </Stack>
         </Grid>
          <Grid item xs={2}  md={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <RiDoubleQuotesR style={{ fontSize: '30px',color:'rgb(87, 179, 62)' }} />
          </Grid>
          </Grid>
          </Card>
            </div>
          ))}
        </Slider>
      </Grid>
    </Grid>
    </Container>
   </Stack>
   </>
  )
}

export default Testimaonils