import { Box, Typography } from "@mui/material";
import { Grid, Stack, Container } from "@mui/system";
import { blogpara, recent_img, recenet_haiding } from "./blogsStyle";
import { useLocation } from "react-router-dom";
import { blogPosts, deafult_blog } from "../../component/blog/Blogdata";

// short the data according to latest dates
const sortedPosts = blogPosts.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
const latestThreePosts = sortedPosts.slice(0, 3);

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
                sx={{fontWeight: "700", fontSize: "27px", lineHeight: "35px" }}
                variant="h3"
              >
                {state ? state.blogToShow.title : deafult_blog.title}
              </Typography>
              <img
                style={{ width: "65%", margin: "20px 0" }}
                src={state ? state.blogToShow.image : deafult_blog.image}
                alt="VNT Blog"
              />
              <Typography sx={blogpara} variant="p">
                {state ? state.blogToShow.content : deafult_blog.content}
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, sm: 4 }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  marginBottom: "20px",
                  fontSize: "22px",
                  color: "#253745",
                }}
                variant="h5"
              >
                Recent Post
              </Typography>
              {latestThreePosts.map((post, index) => (
                <Stack
                  sx={{ marginBottom: "35px" }}
                  direction="row"
                  spacing={2}
                  key={index}
                >
                  <Box item>
                    <img style={recent_img} src={post.image} alt="" />
                  </Box>
                  <Box item>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        marginTop: "-4px",
                        color: "rgb(255, 102, 0)",
                        fontSize: "14px",
                        display: "block",
                      }}
                      variant="span"
                    >
                      {post.blogSubject}
                    </Typography>
                    <Typography sx={recenet_haiding} variant="h3">
                      {post.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        lineHeight: "22px",
                        fontWeight: "600",
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                      variant="p"
                    >
                      <b style={{ color: "#253745" }}>Posted Date</b>:{" "}
                      {post.date}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
export default BlogPage;
