import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import { StyledTableCell } from '../../../../component/tableStyle';
import TableSortLabel from '@mui/material/TableSortLabel';
import { permissionData, headLabel } from './permissionData';

// ----------------------------------------------------------------------

function PermissionTableHead() {

    return (
        <TableHead>
            <TableRow>
                {
                    permissionData.length > 0 && <StyledTableCell padding="checkbox">
                        <Checkbox
                        // onChange={onHandleSelectAll}
                        // checked={selectAll}
                        />
                    </StyledTableCell>
                }

                {headLabel.map((headCell) => (
                    <StyledTableCell
                        sx={{ width: headCell.width, minWidth: headCell.minWidth }}
                    >
                        <TableSortLabel hideSortIcon>
                            {headCell.label}
                        </TableSortLabel>
                    </StyledTableCell>
                ))
                    // :
                    // headLabel.slice(0, -1).map((headCell) => (
                    //     <TableCell
                    //         sx={{ width: headCell.width, minWidth: headCell.minWidth }}
                    //     >
                    //         <TableSortLabel hideSortIcon>
                    //             {headCell.label}
                    //         </TableSortLabel>
                    //     </TableCell>
                    // ))
                }
            </TableRow>
        </TableHead>
    );
}

export default PermissionTableHead;