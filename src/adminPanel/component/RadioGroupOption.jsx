import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioGroupOption({ type, options }) {

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">{type}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        {
          options.map((opt, i) => (
            <FormControlLabel key={i} value={opt} control={<Radio />} label={opt} />
          ))
        }
      </RadioGroup>
    </FormControl>
  );
}

export default RadioGroupOption;