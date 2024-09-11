import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Selector from '../../../component/Selector';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';

function AddUserFields() {

    return (
        <form fullWidth>
            <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 6 }}
                >
                    <Stack width={"100%"}>
                        <TextField
                            label="Name"
                            fullWidth
                        />
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            label="Email Address"
                            fullWidth
                        />
                    </Stack>
                    <Stack width={"100%"}>
                        <TextField
                            label="Mobile No."
                            fullWidth
                        />
                    </Stack>
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 12 }}
                >
                    <Stack width={"100%"}>
                        <Selector
                            placeholder='Select Role'
                            selectType="single"
                            options={["User", "Admin", "Moderator"]}
                        />
                    </Stack>
                    <Stack width={"100%"}>
                        <Selector
                            placeholder='Status'
                            selectType="single"
                            options={["Active", "Inactive"]}
                        />
                    </Stack>
                </Stack>
                <Stack direction={"row"} justifyContent={"end"}>
                    <Button
                        sx={{
                            color: "white",
                            borderRadius: "5px",
                            bgcolor: "#0ab39c",
                            width: "5rem",
                            height: "2.5rem",
                            BoxShadow: "none",
                            '&:hover': {
                                bgcolor: "#0ab39c"
                            }
                        }}
                        type='submit'
                    >
                        <Icon
                            icon="mdi:printer"
                            style={{ fontSize: "1.2rem", color: "white", marginRight: ".3rem" }}
                        />
                        Save
                    </Button>
                </Stack>
            </Stack>
        </form>
    )
}

export default AddUserFields;