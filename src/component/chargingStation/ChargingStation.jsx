import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
function ChargingStation() {
  const imageSrc = require("../../img/car_new.png");

  return (
    <Container>
    <Grid container spacing={3} sx={{margin:'10px 0px'}}>
  <Grid item xs={12} sm={6}>
    <span style={{ color: 'rgb(87, 179, 62)', fontWeight: '600',fontSize:'20px' }}>About Us</span>
    <Typography
      variant="h6"
      sx={{ fontWeight: '700', color: 'rgb(12, 34, 38)',fontSize: '2rem',
        lineHeight: '40px',textTransform:'capitalize' }}
    >
      We provide the best solutions for your electric vehicle
    </Typography>
  </Grid>
  <Grid item xs={12} sm={6}>
    <img
      src={imageSrc}
      alt="VNT EV Machine"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '3px',
      }}
    />
  </Grid>
</Grid>
    </Container>
  );
}
export default ChargingStation;
