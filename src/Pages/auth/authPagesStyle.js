// inputStyles.js
export const inputStyles = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#00ffff',   // Default border color
        },
        '&:hover fieldset': {
            borderColor: '#00ffff',   // Border color on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: '#00ffff',   // Border color on focus
        },
        '& input': {
            color: 'white',  // Text inside the input field will be white
        },
    },
    '& .MuiInputLabel-root': {
        color: '#00ffff',  // Label color will be white
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#00ffff',  // Label stays white when focused
    },
};
