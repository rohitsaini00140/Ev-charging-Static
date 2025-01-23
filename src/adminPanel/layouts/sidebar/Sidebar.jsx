import Box from "@mui/material/Box";
import { useResponsive } from "../../customHooks/useResponsive";
import { NAV, HEADER } from "./configLayout";
import { alpha } from "@mui/system";
// ----------------------------------------------------------------------
const SPACING = 8;
function Sidebar({ children, sx, ...other }) {
  const lgUp = useResponsive("up", "lg");
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        bgcolor: alpha("rgba(87, 179, 62)", 0.1),
        boxShadow: "0px 6px 18px rgba(87, 179, 62, 0.3)",
        // bgcolor: "#1d282c",
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
export default Sidebar;
