import { Stack } from "@mui/material";
function Banner() {
  return (
    <Stack
      sx={{
        backgroundImage: 'url("	https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2019/10/ev.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        width: '100%',
      }}
    >
      {/* <img src="https://img.saurenergy.com/2022/02/evs.jpg" alt="Banner" /> */}
    </Stack>
  );
}

export default Banner;
