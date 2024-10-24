import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { headLabel } from './userData';
import { StyledTableCell } from '../../../component/tableStyle';
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------

function UserTableHead({ allUserData }) {

    const { logInRole } = useSelector(state => state.role)

    return (
        <TableHead>
            <TableRow>
                {
                    allUserData.length > 0 && <StyledTableCell padding="checkbox">
                        <Checkbox
                        // onChange={onHandleSelectAll}
                        // checked={selectAll}
                        />
                    </StyledTableCell>
                }

                {logInRole?.user?.role?.name === "Superadmin" ? headLabel.map((headCell) => (
                    <StyledTableCell
                        sx={{ width: headCell.width, minWidth: headCell.minWidth }}
                        key={headCell.id}
                    >
                        <TableSortLabel hideSortIcon>
                            {headCell.label}
                        </TableSortLabel>
                    </StyledTableCell>
                ))
                    :
                    headLabel.filter(ele => ele.label !== "Cluster Name").map((headCell) => (
                        <StyledTableCell
                            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
                            key={headCell.id}
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

export default UserTableHead;