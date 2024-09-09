import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useResponsive } from '../../customHooks/useResponsive';
import { bgBlur } from "../theme/css"
import Iconify from '../../component/Iconify';
import Searchbar from './Searchbar';
import { NAV, HEADER } from '../sidebar/configLayout';
import Account from './Account';
import Language from './Language';
import Notification from './Notification';

// ----------------------------------------------------------------------

function AdminHeader({ onOpenNav }) {
    const theme = useTheme();

    const lgUp = useResponsive('up', 'lg');

    const renderContent = (
        <>
            {!lgUp && (
                <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
                    <Iconify icon="eva:menu-2-fill" />
                </IconButton>
            )}

            <Searchbar />

            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" alignItems="center" spacing={1}>
                {/* <Language /> */}
                <Notification />
                <Account />
            </Stack>
        </>
    );

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                ...bgBlur({
                    color: theme.palette.background.default,
                }),
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter,
                }),
                ...(lgUp && {
                    width: `calc(100% - ${NAV.WIDTH + 1}px)`,
                    height: HEADER.H_DESKTOP,
                }),
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: { lg: 5 },
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
}

export default AdminHeader;