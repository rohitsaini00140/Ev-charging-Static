import { Autocomplete, TextField } from '@mui/material';
import { inputStyle, StyledPopper } from './searchableDropDownStyle';

function SearchableDropdown({ options, placeholder, value, onChange }) {

    return (
        <Autocomplete
            disablePortal
            options={options}
            getOptionLabel={(option) => option.name}
            value={options.find(option => option.id === value) || null}
            onChange={(event, newValue) => onChange(newValue ? newValue.id : "")}
            fullWidth
            PaperComponent={(props) => <StyledPopper {...props} />}
            renderInput={(params) => <TextField sx={inputStyle} {...params} label={placeholder} />}
        />
    );
    
}

export default SearchableDropdown;