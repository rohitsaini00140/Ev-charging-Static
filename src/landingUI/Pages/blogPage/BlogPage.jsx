import { Box, Typography,TextField,Button  } from "@mui/material";
import { Grid, Stack, Container} from "@mui/system";
import { blogpara, recent_img, recenet_haiding ,submitButton,error_position} from "./blogsStyle";
import { useLocation} from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { input_style } from "../authPagesStyle";
import { blog_schema } from "./blogScema";
import { useState,useEffect } from "react";
import CommentsSection from "./Comment";
import blogPosts  from "../../../data.json";
// for latest 3 blogs
const blog_data = blogPosts.blogPosts 
// fot latest blog
const latest_blog  = blogPosts.blogPosts[0]

function BlogPage() {
  const { state } = useLocation();
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    if (state) {
      setStateData(state.blogToShow);
    } else {
      setStateData(latest_blog);
    }
  }, [state]);

const sortedPosts = blog_data.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
const latestThreePosts = sortedPosts.slice(0, 3);

const dealfult_value ={
    name:'',
    email:'',
    message:''
  }
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(blog_schema),
    defaultValues: dealfult_value
  });
  const onSubmit = async (data) => {
    try {
        console.log(data)
        reset(dealfult_value)
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
      <Box className="sevices_bg">
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
                sx={{fontWeight: "700", color:'#253745', fontSize: "27px", lineHeight: "35px" }}
                variant="h3"
              >
                {stateData && stateData.title}
              </Typography>
              <img
                style={{ width: "90%", margin: "20px 0" }}
                src={stateData && stateData.images}
                alt="VNT Blog"
              />
              <Typography sx={blogpara} variant="p">
              {stateData && stateData.content}
              </Typography>
              <Typography sx={{fontWeight:'700',marginTop: '15px',fontSize:'24px',color:'#253745'}} variant="h6">Comments : </Typography>
               <CommentsSection comments = {stateData && stateData.comments}/>
              <Box component="form" onSubmit ={handleSubmit(onSubmit)} sx={{margin:"15px 0px"}}>
             <Typography sx={{fontWeight:'700',fontSize:'24px',color:'#253745'}} variant="h6">Leave Your Comment</Typography>
              <Box sx={{ position: "relative"}}>
               <TextField margin="normal"  {...register("name")}    sx={input_style} fullWidth label="Your Name" />
                 {errors.name && <Typography sx={error_position}>*{errors.name.message}</Typography>}
               </Box>
              <Box sx={{ position: "relative"}}>
              <TextField margin="normal" {...register("email")} sx={input_style}  fullWidth label="Your Email" />
               {errors.email && <Typography sx={error_position}>*{errors.email.message}</Typography>}
              </Box>
              <Box sx={{ position: "relative"}}>
         <TextField margin="normal" multiline
         {...register("message")}
         minRows={4}
      sx={input_style} 
      placeholder="Please Write Comment here ?" 
      fullWidth 
      label="Message" />
  {errors.message && <Typography sx={error_position}>*{errors.message.message}</Typography>}
 </Box>
 <Button sx={submitButton} type ="sumbit">Sumbit</Button>
  </Box>
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
                    <img style={recent_img} src={post.images} alt="" />
                  </Box>
                  <Box item>
                    <Typography
                      sx={{
                        fontWeight: "700",
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
                      <b style={{ color: "#253745" }}>Posted Date </b>:{" "}
                      {post.posted_date}
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
