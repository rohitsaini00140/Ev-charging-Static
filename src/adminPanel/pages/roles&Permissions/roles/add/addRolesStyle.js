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


    // autofill

    "& input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #34345a inset",
        WebkitTextFillColor: "white",
        transition: "background-color 5000s ease-in-out 0s",
    },
    "& input:-webkit-autofill:hover": {
        WebkitBoxShadow: "0 0 0 1000px #34345a inset",
    },
    "& input:-webkit-autofill:focus": {
        WebkitBoxShadow: "0 0 0 1000px #34345a inset",
    },
    "& input:-webkit-autofill:active": {
        WebkitBoxShadow: "0 0 0 1000px #34345a inset",
    },
}