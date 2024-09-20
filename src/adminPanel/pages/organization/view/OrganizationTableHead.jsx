import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { headLabel } from './organizationData';

// ----------------------------------------------------------------------

function OrganizationTableHead({ allOrganizationData }) {

    return (
        <TableHead>
            <TableRow>
                {
                    allOrganizationData.length > 0 && <TableCell padding="checkbox">
                        <Checkbox
                        // onChange={onHandleSelectAll}
                        // checked={selectAll}
                        />
                    </TableCell>
                }

                {headLabel.map((headCell) => (
                    <TableCell
                        sx={{ width: headCell.width, minWidth: headCell.minWidth }}
                    >
                        <TableSortLabel hideSortIcon>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
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

export default OrganizationTableHead;