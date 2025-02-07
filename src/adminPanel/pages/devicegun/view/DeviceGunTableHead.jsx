import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useSelector } from "react-redux";
import { devicegunheadLabel } from "./devicegunData";
import { StyledTableCell } from "../../../component/tableStyle";

// ----------------------------------------------------------------------

function DeviceGunTableHead({allUserData}) {
  const { logInRole } = useSelector((state) => state.role);

  return (
    <TableHead>
      <TableRow>
        {/* {
                    allUserData.length > 0 && <StyledTableCell padding="checkbox">
                        <Checkbox
                        />
                    </StyledTableCell>
                } */}

        {
          devicegunheadLabel.map((headCell) => (
            <StyledTableCell
              sx={{ width: headCell.width, minWidth: headCell.minWidth }}
              key={headCell.id}
            >
              <TableSortLabel hideSortIcon>{headCell.label}</TableSortLabel>
            </StyledTableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default DeviceGunTableHead;
