import { useState } from 'react';

import Box from '@mui/material/Box';

import Nav from './Nav';
import Sidebar from './Sidebar';
import AdminHeader from '../adminHeader/AdminHeader';

// ----------------------------------------------------------------------

function Drawer({ children }) {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <AdminHeader onOpenNav={() => setOpenNav(true)} />

            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                }}
            >
                <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

                <Sidebar>{children}</Sidebar>
            </Box>
        </>
    );
}

export default Drawer;