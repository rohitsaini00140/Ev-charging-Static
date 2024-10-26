import { Button, Typography } from "@mui/material";
import { menuData } from "./menuData";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const logo = require("../../img/logo.png");

function Header() {

  const { logInRole } = useSelector(state => state.role)

  const [isBgcolor, setIsBgcolor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sticky = 80;
      setIsBgcolor(window.scrollY > sticky);
    };
    if (location.pathname === '/') {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);
  return (
    <Stack
      sx={{
        bgcolor: location.pathname === '/'
          ? (isBgcolor ? "#02121e" : "transparent")
          : "#02121e",
        height: "5.5rem",
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 10,
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        justifyContent: "space-between",
        padding: { md: "0 5rem" },
        alignItems: "center",
      }}
    >
      <Stack width={"10%"}>
        <Link to={"/"}>
          <img
            src={logo}
            alt="Logo"
            style={{ cursor: "pointer", width: "4rem" }}
          />
        </Link>
      </Stack>
      <Stack
        sx={{
          width: "40%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
          fontFamily: "serif",
          fontSize: "1.1rem",
        }}
      >
        {menuData.map((ele, i) => (
          <Link to={ele.path} key={i} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                cursor: "pointer",
                transition: "0.5s",

                "&:hover": {
                  color: "#61e93d",
                  transition: "0.5s",
                },
                color: location.pathname === ele.path ? "#ff6600" : "white",
              }}
            >
              {ele.name}
            </Typography>
          </Link>
        ))}
      </Stack>
      <Stack
        sx={{
          width: "10%",
          display: "flex",
          alignItems: "flex-end",
          padding: 1,
        }}
      >
        <Link to={!(logInRole?.token) ? "/login" : `/${logInRole?.user?.role?.name === "Superadmin" ? "admin" : "clusterAdmin"}`}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#61e93d",
              color: "#61e93d",
              width: "auto",
              textTransform: "capitalize"
            }}
          >
            {!(logInRole?.token) ? "LogIn" : `${logInRole?.user?.role?.name === "Superadmin" ? "admin" : "clusterAdmin"}`}
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default Header;
