import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import { headLabel } from "./deviceLogsData";
import { StyledTableCell } from "../../../component/tableStyle";

// ----------------------------------------------------------------------

function DeviceLogsTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <StyledTableCell
            sx={{
              width: headCell?.width,
              minWidth: headCell?.minWidth,
              whiteSpace: "nowrap",
              border: "1px solid",
              color: "white",
              fontSize: "1rem",
              fontWeight: "700",
              "&:hover": {
                backgroundColor: "unset", // Ensures no hover background change
              },
            }}
          >
            <TableSortLabel
              hideSortIcon
              sx={{
                pointerEvents: "none", // Disables pointer events for hover and click
              }}
            >
              {headCell?.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default DeviceLogsTableHead;
