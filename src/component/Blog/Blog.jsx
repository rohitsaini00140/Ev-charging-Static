import React from 'react'
import Slider from 'react-slick';
import {Card, CardContent, Typography, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './blog.css';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
// Sample blog posts
const blogPosts = [
  {
    title: 'Maximizing Solar Yield: A Deep Dive into the Functionalities of String Monitoring Boxes',
    image: 'https://vnt.in/wp-content/uploads/2022/08/OnPaste.20220817-180020-1-e1660740878914.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi...',
  },
  {
    title: 'Maximizing Solar Yield: A Deep Dive into the Functionalities of String Monitoring Boxes',
    image: 'https://vnt.in/wp-content/uploads/2022/01/03-VNT-Logo-Mockup-1-scaled.jpg',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi...',
  },
  {
    title: 'Strategic Solar Integration: Boosting Manufacturing Efficiency With Our Tailored Solution',
    image: 'https://vnt.in/wp-content/uploads/2022/07/VNT-SMB-Handbook-blog-banner-1.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi...',
  },
  {
    title: 'Fire Break-out at a Private Pipe Company: A Comprehensive Case Study',
    image: 'https://vnt.in/wp-content/uploads/2022/04/mika-baumeister-TtsRECywMmc-unsplash-scaled.jpg',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi...',
  },

  {
    title: 'What are Fire Suppression Systems and How Do They Work?',
    image: 'https://vnt.in/wp-content/uploads/2022/01/shutterstock_1303768399.jpg',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem soluta laudantium, error expedita commodi...',
  },
  // Add more posts as needed
];
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
      <div sx={{ margin: '30px 0px' }}>
        <span style={{ color: '#ff6600', display: 'block', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>Our Blog</span>
        <Typography variant="h6" gutterBottom color="#0c2226" style={{ textAlign: 'center', fontWeight: '600', marginBottom: '15px' }}>
          <b>EV Charging Article</b>
        </Typography>
        <Container>
        <Slider {...settings}>
          {blogPosts.map((post, index) => (
            <div key={index}>
              <Card sx={{ margin: '0px 10px' }}>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="250"
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