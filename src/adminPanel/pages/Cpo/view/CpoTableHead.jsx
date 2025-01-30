import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";

import { StyledTableCell } from "../../../component/tableStyle";
import { useSelector } from "react-redux";
import { headLabel } from "./cpoData";

// ----------------------------------------------------------------------

function CpoTableHead({allUserData}) {
  const { logInRole } = useSelector((state) => state.role);

  return (
    <TableHead>
      <TableRow>
        {
                    allUserData.length > 0 && <StyledTableCell padding="checkbox">
                        <Checkbox
                        />
                    </StyledTableCell>
                }

        {
          headLabel.map((headCell) => (
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

export default CpoTableHead;
