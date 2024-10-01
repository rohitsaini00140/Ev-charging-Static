import Iconify from "./Iconify"
import { OutlinedInput } from "@mui/material"
import { InputAdornment } from "@mui/material"

function SearchInput({ placeholder, onChange, value, sx }) {

    const inputStyle = {
        borderRadius: "8px",
        backgroundColor: "#34345a",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "& .MuiInputBase-input": {
            "&::placeholder": {
                color: "white",
                opacity: 1,
            },
        },
        ...sx
    }
    return (
        <OutlinedInput
            sx={inputStyle}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            startAdornment={
                < InputAdornment position="start" >
                    <Iconify
                        icon="eva:search-fill"
                        sx={{ color: 'white', width: 20, height: 20 }}
                    />
                </InputAdornment >
            }
        />
    )
}

export default SearchInput