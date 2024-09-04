import { Stack, Typography } from "@mui/material";

function Banner() {
  return (
    <Stack
      sx={{
        backgroundImage: 'url("https://src.n-ix.com/uploads/2023/11/27/42899ff8-fbbf-494d-9947-0d665ec28709.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          width: "45%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            marginLeft: "5rem",
            fontWeight: "700",
            lineHeight: "4rem"
          }}>
          Find EV Charging Stations and Get Ready to
          <Typography
            variant="h3"
            sx={{ color: "green", display: "inline", paddingLeft: "1rem", fontWeight: "700", }}
          >Go Green</Typography>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Banner;
