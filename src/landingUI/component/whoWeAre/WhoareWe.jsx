import React, { useState, useEffect } from 'react';
import { Container, Box, Stack, Typography, LinearProgress } from '@mui/material';
import { Grid } from "@mui/system";

function WhoareWe() {
  const mapImg = require('../../img/map.png');
  const targetValues = {
    fastCharging: 95,
    energyManagement: 60,
    energyStorage: 85,
  };
  const [fastCharging, setFastCharging] = useState(0);
  const [energyManagement, setEnergyManagement] = useState(0);
  const [energyStorage, setEnergyStorage] = useState(0);

  // Increment values to target with animation
  useEffect(() => {
    const increment = 1; // Change this to control speed of progress
    const interval = 70; // ms between increments

    const incrementValue = (setter, target) => {
      const timer = setInterval(() => {
        setter(prev => {
          if (prev < target) return prev + increment;
          clearInterval(timer);
          return target;
        });
      }, interval);
      return timer;
    };

    const fastChargingTimer = incrementValue(setFastCharging, targetValues.fastCharging);
    const energyManagementTimer = incrementValue(setEnergyManagement, targetValues.energyManagement);
    const energyStorageTimer = incrementValue(setEnergyStorage, targetValues.energyStorage);
    return () => {
      clearInterval(fastChargingTimer);
      clearInterval(energyManagementTimer);
      clearInterval(energyStorageTimer);
    };
  }, []);

  return (
    <Stack sx={{ background: '#fafafa', padding: '10px 0', marginTop: '50px' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item size ={{xs:12,md:6}}>
            <img
              src={mapImg}
              alt="VNT EV Maps"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '3px',
              }}
            />
          </Grid>
          <Grid item   size ={{xs:12,md:6}}>
            <Box
              sx={{
                padding: { xs: '20px 10px', sm: '20px 40px', lg: '20px 40px', xl: '20px 40px' },
                borderRadius: '8px',
                textAlign: 'left',
              }}
            >
              <Typography variant="h6" sx={{ color: 'rgb(87, 179, 62)', fontSize: '22px', fontWeight: '700' }}>
                Who We Are
              </Typography>
              <Typography variant="body2" sx={{ color: '#253745', margin: '6px 0px', fontWeight: '700', fontSize: '20px', lineHeight: '28px' }}>
                Professional Electric Vehicle Charging Solution For You
              </Typography>
              <span style={{ textAlign: 'justify', color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.975rem', lineHeight: '1.43', display: 'block', margin: '5px 0px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci nemo rem architecto at error explicabo tempora...
              </span>
            </Box>
            <Box sx={{ padding: { xs: '20px 10px', sm: '20px 40px', lg: '20px 40px', xl: '20px 40px' } }}>
              <Typography variant="h6" sx={{ color: '#253745', fontWeight: '700', fontSize: '16px' }}>Fast Charging</Typography>
              <LinearProgress variant="determinate" value={fastCharging} sx={{
                height: '8px', borderRadius: '10px', background: '#e7e8e9',
                '& .MuiLinearProgress-bar': { backgroundColor: '#56a745' },
              }} />
              <Typography variant="body2" align="right">{fastCharging}%</Typography>

              <Typography variant="h6" sx={{ color: '#253745', fontWeight: '700', fontSize: '16px' }} mt={2}>Energy Management Systems</Typography>
              <LinearProgress variant="determinate" value={energyManagement} sx={{
                height: '8px', borderRadius: '10px', background: '#e7e8e9',
                '& .MuiLinearProgress-bar': { backgroundColor: '#253644' },
              }} />
              <Typography variant="body2" align="right">{energyManagement}%</Typography>

              <Typography variant="h6" sx={{ color: '#253745', fontWeight: '700', fontSize: '16px' }} mt={2}>Energy Storage Systems</Typography>
              <LinearProgress variant="determinate" value={energyStorage} sx={{
                height: '8px', borderRadius: '10px', background: '#e7e8e9',
                '& .MuiLinearProgress-bar': { backgroundColor: '#56a745' },
              }} />
              <Typography variant="body2" align="right">{energyStorage}%</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default WhoareWe;