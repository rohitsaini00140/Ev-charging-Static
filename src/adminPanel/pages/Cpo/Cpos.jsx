import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { inputStyle } from "../../component/inputStyle";
import { LoadingButton } from "@mui/lab";

function Cpos() {
  return (
    <>
      <form fullWidth>
        <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Stack width={"100%"}>
              <TextField label="Name" sx={inputStyle} fullWidth />
            </Stack>
            <Stack width={"100%"}>
              <TextField label="Email Address" sx={inputStyle} fullWidth />
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Stack width={"100%"}>
              <TextField label="Mobile No." sx={inputStyle} fullWidth />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <LoadingButton
              type="submit"
              sx={{
                bgcolor: "#0ab39c",
                color: "white",
                borderColor: "#0ab39c",
                padding: "10px 15px",
                "& .MuiLoadingButton-loadingIndicator": {
                  color: "white",
                },
                "&:hover": {
                  bgcolor: "#089d88",
                  color: "white",
                },
              }}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              Save
            </LoadingButton>
          </Stack>
        </Stack>
      </form>
    </>
  );
}

export default Cpos;
