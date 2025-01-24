import Iconify from "./Iconify";
import { OutlinedInput } from "@mui/material";
import { InputAdornment } from "@mui/material";

function SearchInput({ placeholder, onChange, value, sx }) {
  const inputStyle = {
    borderRadius: "8px",
    backgroundColor: "#ffff",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "& .MuiInputBase-input": {

      color:"black",
      "&::placeholder": {
        color: "Black",
        opacity: 1,
      },
    },
    ...sx,
  };
  return (
    <OutlinedInput
      fullWidth
      sx={inputStyle}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      startAdornment={
        <InputAdornment position="start">
          <Iconify
            icon="eva:search-fill"
            sx={{ color: "Black", width: 20, height: 20 }}
          />
        </InputAdornment>
      }
    />
  );
}

export default SearchInput;
