import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from 'react';

function DashboardCard({ data,counter }) {
  
  const [count, setCount] = useState(0); // Initial state is 0
  const totalCount = Number(data.totalCount); // Ensure totalCount is a valid number
  useEffect(() => {
    if (isNaN(totalCount) || totalCount < 0) {
      return;
    }

    let start = 0;
    const end = totalCount;
    const duration = 2000; // Animation duration in ms
    const stepTime = 50; // Time interval between updates (ms)
    
    const increment = () => {
      const range = end - start;
      const steps = duration / stepTime;
      const incrementValue = range / steps;

      const interval = setInterval(() => {
        start += incrementValue;

        // Check if we have reached or exceeded the end value
        if (start >= end) {
          clearInterval(interval); // Clear interval when done
          setCount(end); // Set count to final value
        } else {
          setCount(Math.floor(start)); // Update state with the current value
        }
      }, stepTime);

      return interval; // Return interval ID for potential clearing outside
    };
    const interval = increment();
    // Clean up the interval when the component unmounts or totalCount changes
    return () => clearInterval(interval);
  }, [totalCount]); // Re-run effect if totalCount changes
  return (
    <Card
      sx={{
        padding: "1.2rem 2rem",
        borderRadius: "1rem",
        boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
        bgcolor: "#3e403d0f",
      }}
    >
      <Stack sx={{ display: "grid", placeItems: "center" }}>
        <Stack
          sx={{
            width: "45px",
            height: "45px",
            borderRadius: "10px",
            p: ".5rem",
            display: "grid",
            placeItems: "center",
            bgcolor: data.bgColor,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          {data.typeIcon}
        </Stack>
      </Stack>
      <Stack color={"text.secondary"}>
        <Typography
          variant="h4"
          mb=".4rem"
          color="white"
          marginTop="10px"
          textAlign="center"
        >
          {isNaN(counter) ? "0" : counter} {/* Show 0 if count is NaN */}
        </Typography>
        <Typography mb="1rem" color="#ffffffd1" textAlign="center">
          {data.type}
        </Typography>
        {/* <Typography sx={{ fontSize: ".8rem", color: "white",textAlign:'center' }}>
          <Typography
            sx={{
              fontSize: ".8rem",
              color: data.incOrDec === "inc" ? "rgb(32, 201, 151)" : "rgb(255, 77, 79)",
              display: "inline",
              mr: ".6rem",
            }}
          >
            {data.arrowIcon} {data.Percentage}
          </Typography>
          {data.duration}
        </Typography> */}
      </Stack>
    </Card>
  );
}

export default DashboardCard;
