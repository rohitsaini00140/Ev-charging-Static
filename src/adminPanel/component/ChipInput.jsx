import { MuiChipsInput } from 'mui-chips-input'

function ChipInput({ value, onChange, placeholder }) {

    return (
        <MuiChipsInput value={value} onChange={onChange} placeholder={placeholder} />
    )

}

export default ChipInput;