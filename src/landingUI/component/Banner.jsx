import React from 'react';
import { Box, Typography } from '@mui/material';
// import BannerImg from './bannerImg.jpg';
function Banner() {
  return (
    <Box className="banner_bg" >
      <Box
        sx={{
          position: 'relative',
          inset: 0,
          background: 'linear-gradient(to top right, rgba(0,0,0,0.56), rgba(0,0,0,0.56))',
          opacity: 0.7,
        }}
      />
      <Box
        sx={{
          height: "90vh",
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            width: {
              md: "38%",
              xs: "80%"
            },
            color: "white",
            marginLeft: { xs: "0", sm: "0", md: "5rem" },
            margin: { xs: "0", sm: "0", md: "0 5rem" },
            fontWeight: "700",
            lineHeight: {xs: "42px", sm: "42px", md: "4rem"},
            fontSize:{xs: "2rem", sm: "2rem", md: "3rem"}
          }}>
          Find EV Charging Stations and Get Ready to
          <Typography
            variant="h3"
            sx={{ color: "rgb(87, 179, 62)", display: "inline", paddingLeft: "1rem", fontWeight: "700",fontSize:{xs: "2rem", sm: "2rem", md: "3rem"} }}
          >Go Green</Typography>
        </Typography>
      </Box>
    </Box>
  );
}
export default Banner;