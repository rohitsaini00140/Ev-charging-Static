export const inputStyles = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgb(87, 179, 62)',   // Default border color
            borderRadius: "5rem",     // Apply border-radius to the fieldset (input box),
            border: "none",
            height: "3rem"
        },
       
        '&:hover fieldset': {
            borderColor: 'rgb(87, 179, 62)',   // Border color on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgb(87, 179, 62)',
               // Border color on focus
        },

        // '& input': {
        //     color: 'white',  // Text inside the input field will be white
        // },
       },
       '& .MuiInputLabel-root': {
        color: 'rgb(87, 179, 62)',  // Label color will be cyan
     },
    
     '& .MuiInputLabel-root.Mui-focused': {
        color: 'rgb(87, 179, 62)',  // Label stays cyan when focused
     },
};