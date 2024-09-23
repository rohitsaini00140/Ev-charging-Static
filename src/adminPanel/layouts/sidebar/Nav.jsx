import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { usePathname } from '../../customHooks/usePathname';
import { useResponsive } from '../../customHooks/useResponsive';
import Scrollbar from '../../component/scrollbar/Scrollbar';
import { NAV } from './configLayout';
import navConfig from './NavigationConfig';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { Link } from 'react-router-dom';


// ----------------------------------------------------------------------

const account = {
    displayName: 'Aditya Shaw',
    email: 'aadi@gmail.com',
    photoURL: '/assets/images/avatar.svg',
};
// ----------------------------------------------------------------------

function Nav({ openNav, onCloseNav }) {
    const pathname = usePathname();

    const upLg = useResponsive('up', 'lg');

    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const renderAccount = (
        <Box
            sx={{
                my: 3,
                mx: 2.5,
                py: 2,
                px: 2.5,
                display: 'flex',
                borderRadius: 1.5,
                alignItems: 'center',
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
            }}
        >
            <Avatar
                src={account.photoURL}
                alt="photoURL"
                sx={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)' }}
            />

            <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" color='rgb(87 179 62)'>{account.displayName}</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {account.role}
                </Typography>
            </Box>
        </Box>
    );

    const renderMenu = (
        <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
            {navConfig.map((item) => (
                <NavItem key={item.title} item={item} />
            ))}
        </Stack>
    );

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': {
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            {/* <Logo sx={{ mt: 3, ml: 4 }} /> */}
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Logo" style={{
                margin: "1.5rem 0 0 6rem",
                width: "5rem"
            }} />
            {renderAccount}
            {renderMenu}
            <Box sx={{ flexGrow: 1 }} />
        </Scrollbar>
    );

    return (
        <Box
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV.WIDTH },
            }}
        >
            {upLg ? (
                <Box
                    sx={{
                        height: 1,
                        position: 'fixed',
                        width: NAV.WIDTH,
                        backgroundColor: "#181837",
                        borderRight: (theme) => `dashed 1px ${theme.palette.Boxider}`,
                    }}
                >
                    {renderContent}
                </Box>
            ) : (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}
                    PaperProps={{
                        sx: {
                            width: NAV.WIDTH,
                            backgroundColor: "#181837",
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </Box>
    );
}

// ----------------------------------------------------------------------

function NavItem({ item, level = 0 }) {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };
    const pathname = usePathname();
    const active = item.path === pathname;

    const iconSize = level === 0 ? 24 : 15;
    const paddingLeft = 2 + level * 2;

    const renderChildren = (children) => {
        return (
            <Collapse in={open}>
                <Box>
                    {children.map((child) => (
                        <NavItem key={child.title} item={child} level={level + 1} paddingLeft={paddingLeft + 1} />
                    ))}
                </Box>
            </Collapse>
        );
    };

    return (
        <Box>
            <Link to={item.path} style={{ textDecoration: 'none' }}>
                <ListItemButton
                    onClick={item.children ? handleClick : undefined}
                    sx={{
                        pl: paddingLeft,
                        minHeight: 44,
                        borderRadius: 0.75,
                        typography: 'body2',
                        color: 'text.secondary',
                        textTransform: 'capitalize',
                        fontWeight: 'fontWeightMedium',
                        ...(active && {
                            color: 'rgba(87, 179, 62)',
                            fontWeight: 'fontWeightSemiBold',
                            bgcolor: alpha('rgba(87, 179, 62)', 0.08),
                            boxShadow: '0px 4px 12px rgba(87, 179, 62, 0.2)',
                            '&:hover': {
                                bgcolor: alpha('rgba(87, 179, 62)', 0.16),
                                boxShadow: '0px 6px 18px rgba(87, 179, 62, 0.3)',
                            },
                        }),
                    }}
                >
                    <Box component="span" sx={{ width: iconSize, height: iconSize, mr: 2, color: 'rgb(87 179 62)' }}>
                        {item.icon}
                    </Box>
                    <Box component="span" color={"white"}>{item.title}</Box>
                    {item.children && (
                        <Box sx={{ ml: 'auto' }} component="span">
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </Box>
                    )}
                </ListItemButton>
            </Link>
            {item.children && renderChildren(item.children)}
        </Box>
    );
}

export default Nav;