import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function SearchableDropdown({ options, placeholder, value, onChange }) {
    return (
        <Autocomplete
            disablePortal
            options={options}
            getOptionLabel={(option) => option.name} 
            value={options.find(option => option.id === value) || null}
            onChange={(event, newValue) => onChange(newValue ? newValue.id : "")}
            fullWidth
            renderInput={(params) => <TextField {...params} label={placeholder} />}
        />
    );
}

export default SearchableDropdown;