import { useState } from 'react';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import { inputStyles } from '../authPagesStyle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import authBgImage from "../../../img/authBgImage.png";
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Registration() {

    const [showAndHide, setShowAndHide] = useState(false)
    const [showAndHideConf, setShowAndHideConf] = useState(false)

    function showAndHidePswd() {
        setShowAndHide(!showAndHide)
    }

    function showAndHideConfPswd() {
        setShowAndHideConf(!showAndHideConf)
    }

    let location = useLocation()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#F0F5F9',
                padding: { xs: "2rem 1rem", md: "10rem 5rem 5rem 5rem" }
            }}
        >
            <Stack
                sx={{
                    width: { xs: "100%", md: "480px" },
                    padding: { xs: "1rem", md: "0" },
                    marginBottom: { xs: "2rem", md: "0" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        marginBottom: "1rem",
                        justifyContent: "space-around"
                    }}
                >
                    <Link to={"/logIn"} style={{ textDecoration: "none" }}>
                        <Typography variant="h6" gutterBottom color='rgb(87, 179, 62)' sx={{
                            borderBottom: (location.pathname === "/logIn") && "2px solid rgb(87, 179, 62)",
                            px: (location.pathname === "/logIn") && "3px"
                        }}>
                            Login
                        </Typography>
                    </Link>
                    <Link to={"/register"} style={{ textDecoration: "none" }}>
                        <Typography variant="h6" gutterBottom color='rgb(87, 179, 62)' sx={{
                            borderBottom: (location.pathname === "/register") && "2px solid rgb(87, 179, 62)",
                            px: (location.pathname === "/register") && "3px"
                        }}>
                            Sign up
                        </Typography>
                    </Link>
                </Box>
                <form>
                    <Box
                        sx={{
                            borderRadius: "5rem",
                            width: "100%",
                            height: "3rem",
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                            padding: "0rem 2rem",
                            marginBottom: "2rem",
                            boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                        <AccountCircleIcon sx={{ color: 'rgb(87, 179, 62)' }} />
                        <TextField
                            label="Name"
                            variant="outlined"
                            sx={inputStyles}
                            fullWidth
                        />
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "5rem",
                            width: "100%",
                            height: "3rem",
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                            padding: "0rem 2rem",
                            marginBottom: "2rem",
                            boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                        <EmailIcon sx={{ color: 'rgb(87, 179, 62)' }} />
                        <TextField
                            label="Email"
                            variant="outlined"
                            sx={inputStyles}
                            fullWidth
                        />
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "5rem",
                            width: "100%",
                            height: "3rem",
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                            padding: "0rem 2rem",
                            marginBottom: "2rem",
                            boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                        <KeyIcon sx={{ color: 'rgb(87, 179, 62)' }} />
                        <TextField
                            label="Password"
                            type={showAndHide ? "text" : "password"}
                            variant="outlined"
                            sx={inputStyles}
                            fullWidth
                        />
                        {showAndHide ? <VisibilityIcon sx={{ color: 'rgb(87, 179, 62)', cursor: "pointer" }} onClick={showAndHidePswd} /> : <VisibilityOffIcon sx={{ color: 'rgb(87, 179, 62)', cursor: "pointer" }} onClick={showAndHidePswd} />}
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "5rem",
                            width: "100%",
                            height: "3rem",
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                            padding: "0rem 2rem",
                            marginBottom: "2rem",
                            boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)"
                        }}
                    >
                        <KeyIcon sx={{ color: 'rgb(87, 179, 62)' }} />
                        <TextField
                            label="Confirm password"
                            type={showAndHideConf ? "text" : "password"}
                            variant="outlined"
                            sx={inputStyles}
                            fullWidth
                        />
                        {showAndHideConf ? <VisibilityIcon sx={{ color: 'rgb(87, 179, 62)' }} onClick={showAndHideConfPswd} /> : <VisibilityOffIcon sx={{ color: 'rgb(87, 179, 62)' }} onClick={showAndHideConfPswd} />}
                    </Box>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            borderRadius: "5rem",
                            textTransform: "capitalize",
                            bgcolor: 'rgb(87, 179, 62)',
                            width: "100%"
                        }}
                    >
                        Sign Up
                    </Button>
                </form>
            </Stack>
            <Stack
                sx={{
                    width: { xs: "100%", md: "500px" },
                    display: { xs: "none", md: "block" } // Hide image on small screens
                }}
            >
                <img src={authBgImage} alt="Registration Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Stack>
        </Box>
    );
}

export default Registration;