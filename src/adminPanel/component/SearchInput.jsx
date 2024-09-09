import Iconify from "./Iconify"
import { OutlinedInput } from "@mui/material"
import { InputAdornment } from "@mui/material"

function SearchInput({ placeholder, onChange, value }) {
    return (
        <OutlinedInput
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            startAdornment={
                <InputAdornment position="start">
                    <Iconify
                        icon="eva:search-fill"
                        sx={{ color: 'text.disabled', width: 20, height: 20 }}
                    />
                </InputAdornment>
            }
        />
    )
}

export default SearchInput