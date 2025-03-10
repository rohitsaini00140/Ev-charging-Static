import React, { useState } from 'react';
import { Container,Typography, Link, CardContent, TextField, Button, Box } from '@mui/material';
import {Grid} from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  const imageSrc = require('../img/logo.png');
  const [email, setEmail] = useState('');
  const handleSubscribe = (event) => {
    event.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };
  return (
    <footer style={{ padding: '10px 0', backgroundColor: '#02121e'}}>
      <Container>
        {/* Top footer section start here */}
        <Typography variant="h6" gutterBottom color="#fff" sx={{ textAlign: 'center', padding: '30px 0px' }}>
          Get More For us ? <br />
          <CardContent sx={{ padding: '0px' }}>
            <p style={{ marginBottom: '20px', color: '#ffffffd1', lineHeight: '18px', textAlign: 'center', fontSize: '14px' }}>Stay updated with our latest news and offers</p>
          </CardContent>
          <Box component="form" onSubmit={handleSubscribe} sx={{
            display: 'flex', justifyContent: 'right', margin: '10px auto', width: {
              xs: '100%',  // For extra-small screens
              sm: '75%',   // For small screens
              md: '50%',   // For medium screens
              lg: '50%',   // For large screens
              xl: '50%'    // For extra-large screens
            }
          }}>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="small"
              sx={{ flex: 1, backgroundColor: '#fff', borderRadius: '3px', }}
            />
            <Button
              type="submit"
              variant="contained"
              color="#99ff00"
              sx={{ height: '100%', padding:'7px 16px', lineHeight:'1.90', background: ' #434e51', color: '#99ff00', borderRadius: '3px' }}
            >
              Subscribe
            </Button>
          </Box>
        </Typography>
        {/* Top footer section start here */}
        <Box
          sx={{
            borderBottom: '1px solid #434e51',
            width: '100%',
            margin: '15px 0'
          }}
        />
        <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '25px' }}>
          <Grid item size={{xs:12, sm:3}} >
            <img
              src={imageSrc}
              alt="VNT Logo"
              style={{ width: '100px', height: 'auto', margin: '0 auto' }} // Adjust style as needed
            />   <br />
            <b style={{ color: '#ffffffd1', margin: '15px 0px', display: 'block' }} >Greener. Connected.  Protected.</b>
            <CardContent sx={{ padding: '0px' }}>
              <p style={{ margin: '0px 0px', color: '#ffffffd1', lineHeight: '18px', textAlign: 'justify', fontSize: '14px' }}>At Vrinda Nano Technologies, our holistic approach is to address critical priorities, innovate extensive strategies, and engineer them for a greater purpose.</p>
            </CardContent>
            <Typography variant="body2" color="#ffffffd1" sx={{ display: 'flex', marginTop: '15px' }}>
              <Link color="#fff" sx={{ textDecoration: 'none', marginLeft: '0px', background: '#434e51', width: '25px', height: '25px', borderRadius: '5px', display: 'grid', placeItems: 'center' }} href="https://www.linkedin.com/company/vrinda-nano-technologies/?originalSubdomain=in" target="_blank" > <LinkedInIcon sx={{
                fontSize: '18px', "&:hover": {
                  color: '#61e93d',
                  transition: '0.20s'
                }
              }} /></Link>
              <Link color="#fff" sx={{ textDecoration: 'none', marginLeft: '15px', background: '#434e51', width: '25px', height: '25px', borderRadius: '5px', display: 'grid', placeItems: 'center' }} href="#" target="_blank" > <InstagramIcon sx={{
                fontSize: '18px', "&:hover": {
                  color: '#61e93d',
                  transition: '0.20s'
                }
              }} /></Link>
              <Link color="#fff" sx={{ textDecoration: 'none', marginLeft: '15px', background: '#434e51', width: '25px', height: '25px', borderRadius: '5px', display: 'grid', placeItems: 'center' }} target="_blank" href="https://www.facebook.com/vrindananotechnologiesvnt"> <FacebookIcon sx={{
                fontSize: '18px', "&:hover": {
                  color: '#61e93d',
                  transition: '0.20s'
                }
              }} /></Link>
              <Link color="#fff" sx={{ textDecoration: 'none', marginLeft: '15px', background: '#434e51', width: '25px', height: '25px', borderRadius: '5px', display: 'grid', placeItems: 'center' }} target="_blank" href="#"> <TwitterIcon sx={{
                fontSize: '18px', "&:hover": {
                  color: '#61e93d',
                  transition: '0.20s'
                }
              }} /></Link>
            </Typography>
          </Grid>
          <Grid container item size={{xs:12, sm:1}}>
          </Grid>
          <Grid container item size={{xs:12,sm:8}}>
            <Grid item size={{xs:6,md:4,lg:4,sm:6}}>
              <Typography variant="h6" gutterBottom color="#61e93d">
                Quick Links
              </Typography>
              <Typography variant="body2" sx={{ margin: '15px 0px' }}>
                <Link sx={{
                  textDecoration: 'none', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }} href="/about" color="#ffffffd1">
                  About Us
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ margin: '15px 0px' }}>
                <Link sx={{
                  textDecoration: 'none', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }} href="#" color="#ffffffd1">
                  EV Charging
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ margin: '15px 0px' }}>
                <Link sx={{
                  textDecoration: 'none', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }} href="#" color="#ffffffd1">
                  Charging Points
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ margin: '15px 0px' }}>
                <Link sx={{
                  textDecoration: 'none', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }} href="/contactus" color="#ffffffd1">
                  Contact Us
                </Link>
              </Typography>
            </Grid>
            <Grid item  size={{xs:12,sm:6,md:4,lg:4}}>
              <Typography variant="h6" gutterBottom color="#61e93d">
                Useful Links
              </Typography>
              <Typography variant="body2" sx={{ margin: '15px 0px' }}>
                <Link href="#" color="#ffffffd1" sx={{
                  textDecoration: 'none', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }}>
                  Privacy Policy
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ margin: '15px 0px' }}>
                <Link sx={{
                  textDecoration: 'none', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }} href="#" color="#ffffffd1">
                  Term and Conditions
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ margin: '15px 0px' }} >
                <Link sx={{
                  textDecoration: 'none', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }} href="#" color="#ffffffd1">
                  Support
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ margin: '15px 0px' }}>
                <Link sx={{
                  textDecoration: 'none', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }} href="#" color="#ffffffd1">
                  FAQ
                </Link>
              </Typography>
            </Grid>
            <Grid item size={{xs:12, sm:12,md:4,lg:4}}>
              <Typography variant="h6" gutterBottom color="#61e93d">
                Contact Us
              </Typography>
              <Typography variant="body2" color="#ffffffd1" sx={{ margin: '8px 0px' }}>
                <b>Indian Address -:</b> <Link color="#ffffffd1" sx={{ textDecoration: 'none' }} href="#">418 | Sector-7, IMT Manesar, Gurgaon, Haryana-122050, India</Link>
              </Typography>
              <Typography variant="body2" color="#ffffffd1" sx={{ margin: '8px 0px' }}>
                <b>UAE Address -:</b>  <Link color="#ffffffd1" sx={{ textDecoration: 'none' }} href="#">Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates</Link>
              </Typography>
              <Typography variant="body2" color="#ffffffd1" sx={{ margin: '8px 0px' }} >
                <b>International Address -:</b> <Link color="#ffffffd1" sx={{ textDecoration: 'none' }} href="#">- 3901, 7 Marbelle Avenue Toronto, M9A0C9, Canada</Link>
              </Typography>
              <Typography variant="body2" color="#ffffffd1" sx={{ display: 'flex', margin: '12px 0px' }}>
                <MailOutlineIcon sx={{ fontSize: '20px', color: '#61e93d' }} /> <Link color="#ffffffd1" sx={{
                  textDecoration: 'none', marginLeft: '10px', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }} href="mailto:info@vnt.in">info@vnt.in</Link>
              </Typography>
              <Typography variant="body2" color="#ffffffd1" sx={{ display: 'flex' }}>
                <PhoneIcon sx={{ fontSize: '20px', color: '#61e93d' }} /><Link color="#ffffffd1" sx={{
                  textDecoration: 'none', marginLeft: '5px', "&:hover": {
                    color: '#61e93d',
                    transition: '0.20s'
                  }
                }} href="tel:+1800 572 7592">1800 572 7592</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderBottom: '1px solid #434e51',
            width: '100%',
            margin: '15px 0'
          }}
        />
        <Typography variant="body2" align="center" color="#ffffffd1" style={{ marginTop: '15px' }}>
          © {new Date().getFullYear()} EV VNT India. All rights Reserved.
        </Typography>
      </Container>
    </footer>
  )
}
export default Footer
