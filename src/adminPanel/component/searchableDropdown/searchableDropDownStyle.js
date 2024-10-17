import { Paper, styled } from '@mui/material';

export const inputStyle = {
    backgroundColor: "#34345a",
    borderRadius: "8px",
    "& .MuiInputBase-input": {
        color: "white",
    },
    "& .MuiInputLabel-root": {
        color: "white",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white",
        },
        "&:hover fieldset": {
            borderColor: "white",
        },
        "&.Mui-focused fieldset": {
            borderColor: "white",
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'white',
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
    backgroundColor: '#34345a',
    color: 'white',
    borderRadius: '8px',
    boxShadow: `
        0px 4px 20px rgba(0, 0, 0, 0.2), 
        0px 5px 5px -3px rgba(145, 158, 171, 0.2), 
        0px 8px 10px 1px rgba(145, 158, 171, 0.14), 
        0px 3px 14px 2px rgba(145, 158, 171, 0.12)
    `,
    "& .MuiAutocomplete-option": {
        backgroundColor: '#34345a',
        color: 'white',
        '&[data-focus="true"]': {
            backgroundColor: '#5e5d8f',
        },
        '&[aria-selected="true"]': {
            backgroundColor: '#34345a',
        },
    },
}));