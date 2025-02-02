import { Autocomplete, TextField } from '@mui/material';
import { inputStyle, StyledPopper } from './searchableDropDownStyle';

function SearchableDropdown({ options, placeholder, value, onChange, noOptionText, type }) {
    console.log(value)
    return (
        <Autocomplete
            disablePortal
            options={options}
            getOptionLabel={(option) => option.name}
            value={options.find(option => (type === "name" ? option.name : option.id) === value) || null}
            onChange={(event, newValue) => onChange(newValue ? (type === "name" ? newValue.name : newValue.id) : (type === "name" ? "" : null))}
            fullWidth
            PaperComponent={(props) => <StyledPopper {...props} sx={{ height: "auto" }} />}
            renderInput={(params) => <TextField sx={inputStyle} {...params} label={placeholder} />}
            noOptionsText={noOptionText && noOptionText}
        />
    );

}

export default SearchableDropdown;