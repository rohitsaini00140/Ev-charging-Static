export const inputStyle = {
    backgroundColor: "#ffff",
    borderRadius: "8px",
    "& .MuiInputBase-input": {
        color: "black",
        caretColor: "black", 
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


    // autofill

    "& input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px rgb(254 255 255) inset",
        WebkitTextFillColor: "#010101",
        transition: "background-color 5000s ease-in-out 0s",
        caretColor: "white", 
    },
    "& input:-webkit-autofill:hover": {
        WebkitBoxShadow: "0 0 0 1000px rgb(254 255 255) inset",
        WebkitTextFillColor: "black",
        caretColor: "black", 
    },
    "& input:-webkit-autofill:focus": {
        WebkitBoxShadow: "0 0 0 1000px rgb(254 255 255) inset",
        WebkitTextFillColor: "black",
        caretColor: "black", 
    },
    "& input:-webkit-autofill:active": {
        WebkitBoxShadow: "0 0 0 1000px rgb(254 255 255) inset",
        WebkitTextFillColor: "black",
        caretColor: "black", 
    },
}