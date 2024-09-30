import React from 'react'
import Slider from 'react-slick';
import {Card, CardContent, Typography, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './blog.css';
import { Link } from 'react-router-dom';
import { Container} from '@mui/system';
import { blogPosts } from './Blogdata';
// Sample blog posts

function Blog() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Time between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024, // Large screens (e.g., desktops)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Medium screens (e.g., tablets)
        settings: {
          slidesToShow: 2,
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
      <div>
        <span style={{marginTop: '20px', color: '#57b33e', display: 'block', fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>Our Blog</span>
        <Typography variant="h6" gutterBottom color="#0c2226" style={{ textAlign: 'center', fontWeight: '600', marginBottom: '15px' }}>
          <b>EV Charging Article</b>
        </Typography>
        <Container>
        <Slider {...settings} sx={{marginTop: '30px'}}>
          {blogPosts.map((post, index) => (
            <div key={index}>
              <Card sx={{ margin: '0px 10px' }}>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="250"
                  borderRadius='5px'
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div" sx={{
                    margin: '3px 0px',
                    fontWeight: '600',
                    fontSize: '18px',
                    cursor: 'pointer',
                    zIndex: '999',
                    "&:hover": {
                      color: 'rgb(255, 102, 0)',
                      transition: '0.20s'
                    }
                  }}>
                    <Link href='#' style={{
                      textDecoration: 'none', transition: '0.20s', color: 'rgb(12, 34, 38)', "&:hover": {
                        color: '#434e51',
                        transition: '0.20s'
                      }
                    }}>{post.title}</Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.content}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
        </Container>
      </div>
    </>
  )
}
export default Blog