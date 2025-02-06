import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';

import { GunheadLabel } from './gunData';
import { StyledTableCell } from '../../../component/tableStyle';

// ----------------------------------------------------------------------

function GunTableHead({ allRoleData }) {

    return (
        <TableHead>
            <TableRow>
                {/* {
                    allRoleData.length > 0 && <StyledTableCell padding="checkbox">
                        <Checkbox
                        // onChange={onHandleSelectAll}
                        // checked={selectAll}
                        />
                    </StyledTableCell>
                } */}

                {GunheadLabel.map((headCell) => (
                    <StyledTableCell
                        sx={{ width: headCell.width, minWidth: headCell.minWidth }}
                    >
                        <TableSortLabel hideSortIcon>
                            {headCell.label}
                        </TableSortLabel>
                    </StyledTableCell>
                ))
                   
                }
            </TableRow>
        </TableHead>
    );
}

export default GunTableHead;