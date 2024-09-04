// import { Button, Stack, Typography } from "@mui/material";

// const pageName = ["Home", "About", "Services", "Contact"];

// function Header() {
//   return (
//     <Stack
//       height={"5rem"}
//       display={"flex"}
//       flexDirection={"row"}
//       justifyContent={"space-around"}
//       alignItems={"center"}
//       bgcolor={"transparent"}
//       position={"absolute"}
//       width={"100vw"}
//     >
//       <Stack width={"5rem"}>
//         <img
//           src="https://vnt.in/wp-content/uploads/2021/12/cropped-VNT-logo-transparent.png"
//           alt="error"
//           width={"full"}
//         />
//       </Stack>
//       <Stack display={"flex"} flexDirection={"row"} gap={2.5}>
//         {pageName.map((name, index) => {
//           return (
//             <Typography
//               key={index}
//               color={name === "Home" ? "#91fd0c" : "white"}
//             >
//               {name}
//             </Typography>
//           );
//         })}
//       </Stack>
//       <Stack>
//         <Button
//           variant="outlined"
//           sx={{
//             borderColor: "#00ffff",
//             color: "#00ffff",
//           }}
//         >
//           LogIn
//         </Button>
//       </Stack>
//     </Stack>
//   );
// }

// export default Header;

import { Button } from "@mui/material";
import { menuData } from "./menuData";
// import logo from "./ashwanhealthcareLogo.webp"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  let location = useLocation()
  return (
    <div className="bg-transparant h-[6.5rem] w-full absolute top-0 z-10 hidden flex-row justify-around items-center
        md:flex
        ">
      <div className="w-1/6 border
            2xl:w-[250px]
            ">
        <Link to={"/"}><img src={"https://vnt.in/wp-content/uploads/2021/12/cropped-VNT-logo-transparent.png"} alt="error" className="cursor-pointer w-[4rem]" /></Link>
      </div>
      <div className="flex flex-row gap-[2rem] font-serif text-[1.1rem] border">
        {
          menuData.map((ele, i) => {
            return <Link to={ele.path}><p key={i} className={`cursor-pointer text-white hover:text-black ${location.pathname === ele.path ? "!text-black" : ''}`}>{ele}</p></Link>
          })
        }
      </div>
      <div className="border">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#00ffff",
            color: "#00ffff",
          }}
        >
          LogIn
        </Button>
      </div>
    </div>
  )
}

export default Header;