import SimpleBar from "simplebar-react";

import { alpha, styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

export const StyledRootScrollbar = styled("Box")(() => ({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
}));

export const StyledScrollbar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": {
      backgroundColor: "grey",
      opacity: 1,
    },

    "&.simplebar-visible:before": {
      opacity: 1,
    },
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
}));
