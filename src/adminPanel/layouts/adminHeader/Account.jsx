import { useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { account } from 'src/_mock/account';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
    // {
    //     label: 'Home',
    //     icon: 'eva:home-fill',
    // },
    {
        label: 'Profile',
        icon: 'eva:person-fill',
    },
    {
        label: 'Change Password',
        icon: 'eva:settings-2-fill',
    },
];

// ----------------------------------------------------------------------

function Account() {




    const navigate = useNavigate()



    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleLogout = () => {
        setOpen(null)
        sessionStorage.removeItem("role")
        navigate("/login")
    }

    const { logInRole } = useSelector(state => state.role)

    const account = {
        displayName: logInRole?.user?.name,
        email: logInRole?.user?.email,
        photoURL: '/assets/images/avatars/avatar_25.jpg',
    };

    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    width: 40,
                    height: 40,
                    background: (theme) => alpha(theme.palette.grey[500], 0.08),
                    ...(open && {
                        background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                    }),
                }}
            >
                <Avatar
                    src={account.photoURL}
                    alt={account.displayName}
                    sx={{
                        background: '#20c997',
                        width: 36,
                        height: 36,
                        border: (theme) => `solid 2px ${theme.palette.background.default}`,
                    }}
                >
                    {account.displayName?.charAt(0).toUpperCase()}
                </Avatar>
            </IconButton>

            <Popover
                open={!!open}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 0,
                        mt: 1,
                        ml: 0.75,
                        width: 200,
                        background: '#141d20',
                        color: 'white'
                    },
                }}
            >
                <Box sx={{ my: 1.5, px: 2 }}>
                    <Typography variant="subtitle2" color={'#20c997'} noWrap>
                        {account.displayName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {account.email}
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed', borderColor: '#637381' }} />

                {MENU_OPTIONS.map((option) => (
                    <MenuItem key={option.label} onClick={handleClose}>
                        {option.label}
                    </MenuItem>
                ))}

                <Divider sx={{ borderStyle: 'dashed', borderColor: '#637381', m: 0 }} />

                <MenuItem
                    disableRipple
                    disableTouchRipple
                    onClick={handleLogout}
                    sx={{ typography: 'body2', fontWeight: '600', color: 'error.main', py: 1.5 }}
                >
                    Logout
                </MenuItem>
            </Popover>
        </>
    );
}

export default Account;