import { Autocomplete, TextField } from '@mui/material';
import { inputStyle, StyledPopper } from './searchableDropDownStyle';

function SearchableDropdown({ options, placeholder, value, onChange, noOptionText, filter }) {

    return (
        <Autocomplete
            disablePortal
            options={options}
            getOptionLabel={(option) => option.name}
            value={options.find(option => (filter ? option.name : option.id) === value) || null}
            onChange={(event, newValue) => onChange(newValue ? (filter ? newValue.name : newValue.id) : (filter ? "" : 0))}
            fullWidth
            PaperComponent={(props) => <StyledPopper {...props} sx={{ height: "auto" }} />}
            renderInput={(params) => <TextField sx={inputStyle} {...params} label={placeholder} />}
            noOptionsText={noOptionText && noOptionText}
        />
    );

}

export default SearchableDropdown;