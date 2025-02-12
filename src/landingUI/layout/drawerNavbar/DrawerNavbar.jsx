import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { menuList } from './data';
import { Stack } from '@mui/system';
import { Button, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux";



function DrawerNavbar() {
    const { logInRole } = useSelector(state => state.role)
    const [isBgcolor, setIsBgcolor] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const sticky = 80;
            setIsBgcolor(window.scrollY > sticky);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [drop, setDrop] = useState(Array(menuList.length).fill(false));
    const handleClick = (index) => {
        const openChild = [...drop];
        openChild[index] = !openChild[index];
        setDrop(openChild);
    }
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
            sx={{ bgcolor: "#232a2b", height: "100%" }}
        >
            <List>
                {menuList.map((ele, index) => (
                    <>
                        <Link
                            style={{ textDecoration: "none", color: "#fff" }}
                            to={ele.path}
                            onClick={!ele.arr && toggleDrawer(anchor, false)}
                        >
                            <ListItem key={index} disablePadding
                                onClick={() => ele.arr && handleClick(index)}
                            >
                                <ListItemButton sx={{ width: "280px" }}>
                                    {
                                        ele.arr
                                            ?
                                            <>

                                                <ListItemIcon sx={{ color: "#56a745", minWidth: "35px" }}  >{ele.icon}</ListItemIcon>
                                                <ListItemText primary={ele.name}
                                                    sx={{ font: "#fff" }} />
                                                {drop[index] ? <ExpandMore sx={{ font: "#fff" }} /> : <ExpandLess sx={{ font: "#fff" }} />}
                                            </>
                                            :
                                            <>
                                                <ListItemIcon sx={{ color: "#56a745", minWidth: "35px" }} >{ele.icon}</ListItemIcon>
                                                <ListItemText primary={ele.name} sx={{ font: "#fff" }} />
                                            </>
                                    }
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        {
                            ele.arr &&
                            <Collapse in={drop[index]} timeout="auto" unmountOnExit>
                                <List component="Stack" disablePadding>
                                    {
                                        ele.arr && Array.isArray(ele.arr) ? ele.arr.map((ele, i) => (
                                            <Link to={ele.path}
                                                onClick={toggleDrawer(anchor, false)}
                                            >
                                                <ListItemButton key={i}>
                                                    <ListItemIcon sx={{ color: "#56a745", minWidth: "35px" }} >{ele.icon}</ListItemIcon>

                                                    <ListItemText
                                                        primary={ele.name}
                                                        sx={{ paddingLeft: "2rem", color: "#fff" }}
                                                    />
                                                </ListItemButton>
                                            </Link>
                                        ))
                                            :
                                            null
                                    }
                                </List>
                            </Collapse>
                        }
                    </>
                ))}
            </List>
        </Box>
    )

    return (
        <Stack
            sx={{
                bgcolor: isBgcolor ? "#232a2b" : "transparent",
                height: "5.5rem",
                width: "100%",
                position: "fixed",
                top: 0,
                zIndex: 10,
                display: { xs: "flex", md: "none" },
                flexDirection: "row",
                justifyContent: "space-between",
                padding: { xs: "0 1rem", sm: "0 2rem" },
                alignItems: "center"
            }}
        >
            <Stack sx={{ width: "150px" }}>
                <img
                    src={"https://vnt.in/wp-content/uploads/2021/12/cropped-VNT-logo-transparent.png"}
                    alt="Logo"
                    style={{ cursor: "pointer", width: "4rem" }}
                />
            </Stack>
            <Stack>
                {['right'].map((anchor) => (
                    <Stack key={anchor} >
                        <MenuIcon onClick={toggleDrawer(anchor, true)} sx={{ fontSize: "2rem", color: "#fff" }} />
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                            {/* <Link sx={{textDecoration:'none'}} to={!(logInRole?.token) ? "/login" : `/${logInRole?.user?.role?.name === "Superadmin" ? "admin" : "clusterAdmin"}`}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#61e93d",
              background:'#61e93d',
              color: "white",
              width: "auto",
              display:'block',margin:'10px auto',
              padding:'10px 20px',
              textTransform: "capitalize"
            }}
          >
            {!(logInRole?.token) ? "LogIn" : `${logInRole?.user?.role?.name === "Superadmin" ? "admin" : "clusterAdmin"}`}
          </Button>
        </Link> */}
                        </Drawer>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
}

export default DrawerNavbar;