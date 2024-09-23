import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Box } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            backgroundColor: "#34345a",
            // boxShadow: 'none',
        },
    },
};

function getStyles(option, value, theme) {
    return {
        fontWeight:
            Array.isArray(value) && value.indexOf(option) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        color: "white"
    };
}

function Selector({ placeholder, selectType, value, onChange, options }) {
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%' }}>
            <FormControl fullWidth>
                <Select
                    fullWidth
                    multiple={selectType === "multiple"}
                    displayEmpty
                    value={value || []}
                    onChange={onChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em style={{ color: '#6f6f82' }}>{placeholder}</em>;
                        }

                        return Array.isArray(selected) ? selected.join(', ') : selected;
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em style={{ color: 'white' }}>{placeholder}</em>
                    </MenuItem>
                    {Array.isArray(options) && options.map((option) => (
                        <MenuItem
                            key={option}
                            value={option}
                            style={getStyles(option, value, theme)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Selector;