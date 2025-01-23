import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useResponsive } from "../../customHooks/useResponsive";
import { alpha } from "@mui/system";

// ----------------------------------------------------------------------

function AdminFooter() {
  const lgUp = useResponsive("up", "lg");

  return (
    <Box
      sx={{
        py: 2,
        marginLeft: lgUp && "17.5rem",
        textAlign: "center",
        bgcolor: alpha("rgba(87, 179, 62)", 0.1),
        boxShadow: "white",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="black">
        © 2024 VNT. All rights reserved.
      </Typography>
    </Box>
  );
}

export default AdminFooter;
