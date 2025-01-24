import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: "#ffff",
        color: "black",
        fontSize: 14,
    },
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#ffff",
        color: "black",
        borderColor: "black",
    }
}));

export const StyledTableRow = styled(TableRow)(() => ({
    backgroundColor: "#ffff",
    borderColor: "black",
    '&:last-child td, &:last-child th': {
        borderColor: "black",
    },
}));