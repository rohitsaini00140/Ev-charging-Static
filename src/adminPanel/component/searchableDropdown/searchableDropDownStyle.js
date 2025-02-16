import { Paper, styled } from '@mui/material';

export const inputStyle = {
    backgroundColor: "#ffff",
    borderRadius: "8px",
    "& .MuiInputBase-input": {
        color: "black",
    },
    "& .MuiInputLabel-root": {
        color: "black",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "black",
        },
        "&:hover fieldset": {
            borderColor: "black",
        },
        "&.Mui-focused fieldset": {
            borderColor: "black",
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'black',
    },

    // Autofill styles
    "& input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #34345a inset",
        WebkitTextFillColor: "white",
        transition: "background-color 5000s ease-in-out 0s",
    },
    "& input:-webkit-autofill:hover": {
        WebkitBoxShadow: "0 0 0 1000px #34345a inset",
        WebkitTextFillColor: "white",
    },
    "& input:-webkit-autofill:focus": {
        WebkitBoxShadow: "0 0 0 1000px #34345a inset",
        WebkitTextFillColor: "white",
    },
    "& input:-webkit-autofill:active": {
        WebkitBoxShadow: "0 0 0 1000px #34345a inset",
        WebkitTextFillColor: "white",
    },
};

export const StyledPopper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fffff',
    color: 'white',
    borderRadius: '8px',
    boxShadow: `
        0px 4px 20px rgba(0, 0, 0, 0.2), 
        0px 5px 5px -3px rgba(145, 158, 171, 0.2), 
        0px 8px 10px 1px rgba(145, 158, 171, 0.14), 
        0px 3px 14px 2px rgba(145, 158, 171, 0.12)
    `,
    "& .MuiAutocomplete-option": {
        backgroundColor: '#ffff',
        color: 'black',
        '&[data-focus="true"]': {
            backgroundColor: '#ffff',
        },
        '&[aria-selected="true"]': {
            backgroundColor: '#ffff',
        },
    },
}));