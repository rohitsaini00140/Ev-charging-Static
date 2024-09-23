import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { headLabel } from './organizationData';

// ----------------------------------------------------------------------

function OrganizationTableHead({ allOrganizationData }) {


    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#34345a",
            color: "#COCOEE",
            borderColor: "#34345a",
        }
    }));


    return (
        <TableHead>
            <TableRow>
                {
                    allOrganizationData.length > 0 && <StyledTableCell padding="checkbox">
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

export default OrganizationTableHead;