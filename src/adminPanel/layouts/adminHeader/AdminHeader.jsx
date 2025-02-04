import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { alpha, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useResponsive } from '../../customHooks/useResponsive';
// import { bgBlur } from "../theme/css"
import Iconify from '../../component/Iconify';
// import Searchbar from './Searchbar';
import { NAV, HEADER } from '../sidebar/configLayout';
import Account from './Account';
import Notification from './Notification';
// ----------------------------------------------------------------------
function AdminHeader({ onOpenNav }) {
    const theme = useTheme();
    const lgUp = useResponsive('up', 'lg');
    const renderContent = (
        <>
                <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
                    <Iconify sx={{color:'#20c997',fontSize:'30px'}} icon="eva:menu-2-fill" />
                </IconButton>
          
            {/* <Searchbar /> */}
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" alignItems="center" spacing={1}>
                <Notification />
                <Account />
            </Stack>
        </>
    );

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                bgcolor: "white",
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                // ...bgBlur({
                //     color: theme.palette.background.default,
                // }),
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter,
                }),
                // ...(lgUp && {
                //     width: `calc(100% - ${NAV.WIDTH + .4}px)`,
                //     height: HEADER.H_DESKTOP,
                // }),
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    pr: { lg: 5 },
                    pl:{lg:"20px",},
                //       bgcolor: alpha("rgba(87, 179, 62)", 0.1),
                bgcolor:"#ffff",
                 boxShadow: "0px 6px 18px rgba(180, 250, 160, 0.3)",
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
}

export default AdminHeader;