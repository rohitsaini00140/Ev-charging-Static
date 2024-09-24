import React from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import { contact_haiding } from "./contactdesign";
import { Grid } from "@mui/system";

const ContactUs = () => {
  return (
    <>
      <Box className="contact_bg">
        <Box
          sx={{
            position: "relative",
            inset: 0,
            background:
              "linear-gradient(to top right, rgba(0,0,0,0.56), rgba(0,0,0,0.56))",
            opacity: 0.7,
          }}
        />
        <Box
          sx={{
            height: "90vh",
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              width: {
                md: "38%",
                xs: "80%",
              },
              color: "white",
              marginLeft: { xs: "0", sm: "0", md: "5rem" },
              margin: { xs: "0", sm: "0", md: "0 5rem" },
              fontWeight: "700",
              lineHeight: { xs: "42px", sm: "42px", md: "4rem" },
              fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
            }}
          >
            Find EV Charging Stations and Get Ready to
            <Typography
              variant="h3"
              sx={{
                color: "rgb(87, 179, 62)",
                display: "inline",
                paddingLeft: "1rem",
                fontWeight: "700",
                fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
              }}
            >
              Go Green
            </Typography>
          </Typography>
        </Box>
      </Box>
      {/* // Form start here */}
      <Container>
        <Grid container spacing={2} sx={{ margin: "25px 0px" }}>
          <Grid item size={{ sm: 12, md: 5 }}>
            <Typography variant="h3" sx={contact_haiding}>
              Get a Quote
            </Typography>
            <Typography variant="p">
              Fill up the form and our Team Will get back to you within 24
              hours.
            </Typography>
          </Grid>
          <Grid item  size={{ sm: 12, md: 7 }}>
            <Box component="form">
              <Grid container>
                <Grid container spacing={2} size={12}>
                  <Grid item size={{ xs:12, sm:12, md: 6,lg:6 }}>
                    <TextField margin="normal" fullWidth label="First Name" />
                  </Grid>
                  <Grid item size={{xs:12, sm:12, md: 6,lg:6}}>
                    <TextField margin="normal" fullWidth label="Last Name" />
                  </Grid>
                </Grid>
                <Grid container spacing={2} size={12}>
                  <Grid item size={{ xs:12, sm:12, md: 6,lg:6}}>
                    <TextField margin="normal" fullWidth label="Email" />
                  </Grid>
                  <Grid item size={{ xs:12, sm:12, md: 6,lg:6 }}>
                    <TextField margin="normal" fullWidth label="Mobile No" />
                  </Grid>
                </Grid>
                <Grid container spacing={2} size={12}>
                  <Grid item size={{ sm: 12, md: 12 }}>
                    <TextField
                      multiline
                      minRows={4}
                      placeholder="Message "
                      fullWidth
                      margin="normal"
                      label="Message"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactUs;
