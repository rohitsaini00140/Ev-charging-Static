import { Box, Typography } from "@mui/material";
import { Grid, Stack, Container } from "@mui/system";
import { blogpara } from "./blogsStyle";
import { useLocation } from "react-router-dom";

function BlogPage() {
  const { state } = useLocation();
  
  return (
    <>
      <Box className="vnt_bg">
        <Box
          sx={{
            position: "relative",
            inset: 0,
            background:
              "linear-gradient(to top right, rgba(0,0,0,0.56), rgba(0,0,0,0.56))",
            opacity: 0.7,
          }}
        />
      </Box>
      <Stack sx={{ margin: "20px 0px" }}>
        <Container>
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, sm: 8 }}>
              <Typography
                sx={{ fontWeight: "700", fontSize: "27px", lineHeight: "35px" }}
                variant="h3"
              >
                {state.blogToShow.title}
              </Typography>
              <img
                style={{ width: "65%", margin: "20px 0" }}
                src={state.blogToShow.image}
                alt="VNT Blog"
              />
              <Typography sx={blogpara} variant="p">
                {state.blogToShow.content}
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, sm: 4 }}>
              <Typography
                sx={{ fontWeight: "600", textAlign: "center" }}
                variant="h5"
              >
                Recent Post
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}

export default BlogPage;
