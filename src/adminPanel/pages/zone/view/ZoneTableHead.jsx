import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { StyledTableCell } from '../../../component/tableStyle';
import { headLabel } from './zoneData';

// ----------------------------------------------------------------------

function ZoneTableHead({ allZoneData }) {

    return (
        <TableHead>
            <TableRow>
                {
                    allZoneData.length > 0 && <StyledTableCell padding="checkbox">
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
                    //     <StyledTableCell
                    //         sx={{ width: headCell.width, minWidth: headCell.minWidth }}
                    //     >
                    //         <TableSortLabel hideSortIcon>
                    //             {headCell.label}
                    //         </TableSortLabel>
                    //     </StyledTableCell>
                    // ))
                }
            </TableRow>
        </TableHead>
    );
}

export default ZoneTableHead;