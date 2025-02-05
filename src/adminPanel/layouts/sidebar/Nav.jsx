import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import { usePathname } from "../../customHooks/usePathname";
import { useResponsive } from "../../customHooks/useResponsive";
import Scrollbar from "../../component/scrollbar/Scrollbar";
import { NAV, NAV1 } from "./configLayout";
import { navConfig, navConfig2 } from "./NavigationConfig";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button, Collapse, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav({ openNav, onCloseNav }) {
  const { logInRole } = useSelector((state) => state.role);

  const account = {
    designation: logInRole?.user?.role?.name,
    photoURL: "/assets/images/avatar.svg",
  };

  const pathname = usePathname();
  const upLg = useResponsive("up", "lg");

  const [drawerOpen, setDrawerOpen] = useState(openNav);

  useEffect(() => {
    setDrawerOpen(openNav);
  }, [openNav]);

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Avatar
        src={account.photoURL}
        alt="photoURL"
        sx={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" }}
      />
      <Box sx={{ ml: 2 }}>
        <Typography color="black" variant="subtitle2">
          {account.designation}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {(logInRole?.user?.role?.name === "Superadmin"
        ? navConfig
        : navConfig2
      ).map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );


  const Removeicon = (

    <Button  sx={{display:"flex",justifyContent:'right',color:"#f56b6b",fontSize:'17px',marginRight:'15px'}} onClick={onCloseNav}>X</Button>
  )
  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      
      <Link to={"/"}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          alt="Logo"
          style={{
            margin: "1.5rem 0 0 6rem",
            width: "5rem",
          }}
        />
      </Link>
      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  const renderMenu1 = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {(logInRole?.user?.role?.name === "Superadmin"
        ? navConfig
        : navConfig2
      ).map((item) => (
        <NavItem1 key={item.title} item={item} />
      ))}
    </Stack>
  );

  return (
    <Box sx={openNav ? { flexShrink: { lg: 0 }, width: { lg: NAV.WIDTH } } : { width: { lg: NAV1.WIDTH } }}>
      <Drawer
        open={openNav}
        onClose={onCloseNav}
        PaperProps={{
          sx: {
            width: NAV.WIDTH,
          },
        }}
        ModalProps={{
          keepMounted: true,
          disableScrollLock: true,
          disableEscapeKeyDown: true,
          BackdropProps: {
            sx: { backgroundColor: "transparent" },
          },
        }}
      >
        {Removeicon}
        {renderContent}
      </Drawer>
      {upLg && (  <Typography  sx={{marginTop:'100px'}}>{renderMenu1} </Typography>) }
    </Box>
  );
}

function NavItem({ item, level = 0 }) {
  const [open, setOpen] = useState(false);
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
      <Link to={item.path} style={{ textDecoration: "none" }}>
        <ListItemButton
          onClick={item.children ? handleClick : undefined}
          sx={{
            pl: paddingLeft,
            minHeight: 44,
            borderRadius: 0.75,
            typography: "body2",
            color: "text.secondary",
            textTransform: "capitalize",
            fontWeight: "fontWeightMedium",
            ...(active && {
              color: "rgba(87, 179, 62)",
              fontWeight: "fontWeightSemiBold",
              bgcolor: alpha("rgba(87, 179, 62)", 0.08),
              boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
              "&:hover": {
                bgcolor: alpha("rgba(87, 179, 62)", 0.16),
                boxShadow: "0px 6px 18px rgba(87, 179, 62, 0.3)",
              },
            }),
          }}
        >
          <Tooltip
            title={item.title}
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "#ffff",
                  color: "black",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  opacity: 0,
                },
              },
              arrow: {
                sx: {
                  color: "#ffff",
                },
              },
            }}
          >
            <Box
              component="span"
              sx={{
                width: iconSize,
                height: iconSize,
                mr: 2,
                color: "#20c997",
              }}
            >
              {item.icon}
            </Box>
          </Tooltip>
          <Box component="span" color={"black"}>
            {item.title}
          </Box>
          {item.children && (
            <Box sx={{ ml: "auto" }} component="span">
              {open ? <ExpandLess /> : <ExpandMore />}
            </Box>
          )}
        </ListItemButton>
      </Link>
      {item.children && renderChildren(item.children)}
    </Box>
  );
}

function NavItem1({ item, level = 0 }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const pathname = usePathname();
  const active = item.path === pathname;

  const iconSize = level === 0 ? 24 : 15;
  const paddingLeft = 2 + level * 1;

  const renderChildren = (children) => {
    return (
      <Collapse in={open}>
        <Box>
          {children.map((child) => (
            <NavItem1 key={child.title} item={child} level={level + 1} paddingLeft={paddingLeft + 1} />
          ))}
        </Box>
      </Collapse>
    );
  };

  return (
    <Box>
      <Link to={item.path} style={{ textDecoration: "none" }}>
        <ListItemButton
          onClick={item.children ? handleClick : undefined}
          sx={{
            pl: paddingLeft,
            minHeight: 44,
            borderRadius: 0.75,
            typography: "body2",
            color: "text.secondary",
            textTransform: "capitalize",
            fontWeight: "fontWeightMedium",
            ...(active && {
              color: "rgba(87, 179, 62)",
              fontWeight: "fontWeightSemiBold",
              bgcolor: alpha("rgba(87, 179, 62)", 0.08),
              boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
              "&:hover": {
                bgcolor: alpha("rgba(87, 179, 62)", 0.16),
                boxShadow: "0px 6px 18px rgba(87, 179, 62, 0.3)",
              },
            }),
          }}
        >
          <Tooltip
            title={item.title}
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "#ffff",
                  color: "black",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  opacity: 0,
                },
              },
              arrow: {
                sx: {
                  color: "#ffff",
                },
              },
            }}
          >
            <Box
              component="span"
              sx={{
                width: iconSize,
                height: iconSize,
                mr: 2,
                color: "#20c997",
              }}
            >
              {item.icon}
            </Box>
          </Tooltip>
          {/* {item.children && (
            <Box sx={{ ml: "auto" }} component="span">
              {open ? <ExpandLess /> : <ExpandMore />}
            </Box>
          )} */}
        </ListItemButton>
      </Link>
      {item.children && renderChildren(item.children)}
    </Box>
  );
}

export default Nav;
