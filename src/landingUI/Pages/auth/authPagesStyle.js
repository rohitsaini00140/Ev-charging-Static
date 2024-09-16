import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const inputStyles = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black', // Default border color
        },
        '&:hover fieldset': {
            borderColor: 'black', // Border color on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black', // Border color when focused
        },
    },
    '& .MuiInputLabel-root': {
        color: 'black', // Label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'black', // Label color when focused
    },
};

export const FormContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: "480px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1),
    backgroundColor: "#fff",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
        width: "90%",
        margin: "0 auto",
    },
}));
export const iconstyle = {
    fontSize: "40px",
    width: "34px",
    borderRadius: '5px',
    padding: '5px',
    height: "34px",
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
};
export const FieldContainer = styled(Grid)(({ theme }) => ({
    minHeight: "100vh",
}));
export const SocialButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    borderRadius: "50px",
    textTransform: "none",
}));