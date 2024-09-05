// import { Stack, Typography } from "@mui/material";

// function Banner() {
//   return (
//     <Stack
//       sx={{
//         backgroundImage: 'url("https://src.n-ix.com/uploads/2023/11/27/42899ff8-fbbf-494d-9947-0d665ec28709.webp")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '90vh',
//         width: '100%',
//         display: 'flex',
//         justifyContent: "center",
//       }}
//     >
//       <Stack
//         sx={{
//           width: "45%",
//         }}
//       >
//         <Typography
//           variant="h3"
//           sx={{
//             color: "white",
//             marginLeft: "5rem",
//             fontWeight: "700",
//             lineHeight: "4rem"
//           }}>
//           Find EV Charging Stations and Get Ready to
//           <Typography
//             variant="h3"
//             sx={{ color: "green", display: "inline", paddingLeft: "1rem", fontWeight: "700", }}
//           >Go Green</Typography>
//         </Typography>
//       </Stack>
//     </Stack>
//   );
// }

// export default Banner;



import React from 'react';
import { Box, Typography } from '@mui/material';
// import BannerImg from './bannerImg.jpg';

function Banner() {
  return (
    <Box sx={{ height: '90vh', width: '100%' }}>
      <Box
        sx={{
          position: 'relative',
          inset: 0,
          background: 'linear-gradient(to top right, rgba(0,0,0,0.56), rgba(0,0,0,0.56))',
          opacity: 0.7,
        }}
      />
      <img
        src={"https://src.n-ix.com/uploads/2023/11/27/42899ff8-fbbf-494d-9947-0d665ec28709.webp"}
        alt="Banner"
        style={{
          width: '100%',
          height: '90vh',
          objectFit: 'cover',
          filter: 'brightness(50%)'
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
            marginLeft: "5rem",
            margin: { xs: "0 1rem", sm: "0 2rem", md: "0 5rem" },
            fontWeight: "700",
            lineHeight: "4rem"
          }}>
          Find EV Charging Stations and Get Ready to
          <Typography
            variant="h3"
            sx={{ color: "green", display: "inline", paddingLeft: "1rem", fontWeight: "700", }}
          >Go Green</Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;