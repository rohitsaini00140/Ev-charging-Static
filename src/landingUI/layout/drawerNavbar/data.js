import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LoginIcon from '@mui/icons-material/Login';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export const menuList = [
    {
        name: "Home",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        name: "About",
        icon: <InfoIcon />,
        path: "/about"
    },
    {
        name: "Services",
        icon: <MiscellaneousServicesIcon />,
        path: "/services",


    },

    {
        name: "Blog",
        icon: <BookIcon />,
        path: "/blogs",
    },
    {
        name: "Contact",
        icon: <AddIcCallIcon />,
        path: "/contactUs",
    },

    {
        name: "Login",
        path: "/login",
        icon: <LoginIcon />

    }

]