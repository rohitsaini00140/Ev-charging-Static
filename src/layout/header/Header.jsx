// import { Button, Typography } from "@mui/material";
// import { menuData } from "./menuData";
// import { Stack } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Header() {

//   const [isBgcolor, setisBgcolor] = useState(false);

//   let location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       const sticky = 80;
//       setisBgcolor(window.scrollY > sticky);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Stack
//       sx={{
//         bgcolor: isBgcolor ? "black" : "transparent",
//         height: "6.5rem",
//         width: "100vw",
//         position: "fixed",
//         top: 0,
//         zIndex: 10,
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         padding: "0 5rem",
//         alignItems: "center"
//         // display: "none"
//       }}
//     >
//       <Stack width={"10%"}>
//         <Link to={"/"}><img src={"https://vnt.in/wp-content/uploads/2021/12/cropped-VNT-logo-transparent.png"} alt="error" style={{ cursor: "pointer", width: "4rem" }} /></Link>
//       </Stack>
//       <Stack
//         sx={{
//           width: "40%",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           gap: "2rem",
//           fontFamily: "serif",
//           font: "1.1rem"
//         }}
//       >
//         {
//           menuData.map((ele, i) => {
//             return <Link to={ele.path} style={{
//               textDecoration: "none",
//             }}>
//               <Typography
//                 key={i}
//                 sx={{
//                   cursor: "pointer",
//                   color: "white",
//                   "&:hover": {
//                     color: "#ff6600",
//                   }
//                 }}
//               // className={`cursor-pointer text-white hover:text-black ${location.pathname === ele.path ? "!text-black" : ''}`}
//               >{ele}</Typography>
//             </Link>
//           })
//         }
//       </Stack>
//       <Stack
//         sx={{
//           width: "10%",
//           display: 'flex',
//           alignItems: 'flex-end',
//           padding: 1,
//           border: "1px solid white"
//         }}
//       >
//         <Button
//           variant="outlined"
//           sx={{
//             borderColor: "#00ffff",
//             color: "#00ffff",
//             width: "5%",
//           }}
//         >
//           LogIn
//         </Button>
//       </Stack>
//     </Stack>
//   )
// }

// export default Header;



import { Button, Typography } from "@mui/material";
import { menuData } from "./menuData";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [isBgcolor, setIsBgcolor] = useState(false);
  const location = useLocation();

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

  return (
    <Stack
      sx={{
        bgcolor: isBgcolor ? "black" : "transparent",
        height: "6.5rem",
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
            src={"https://vnt.in/wp-content/uploads/2021/12/cropped-VNT-logo-transparent.png"}
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
          fontSize: "1.1rem"
        }}
      >
        {menuData.map((ele, i) => (
          <Link to={ele.path} key={i} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                cursor: "pointer",
                // color: "white",
                "&:hover": {
                  color: "#ff6600",
                },
                color: location.pathname === ele.path ? "#ff6600" : "white"
              }}
            >
              {ele}
            </Typography>
          </Link>
        ))}
      </Stack>
      <Stack
        sx={{
          width: "10%",
          display: 'flex',
          alignItems: 'flex-end',
          padding: 1
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderColor: "#00ffff",
            color: "#00ffff",
            width: "5%",
          }}
        >
          LogIn
        </Button>
      </Stack>
    </Stack>
  );
}

export default Header;