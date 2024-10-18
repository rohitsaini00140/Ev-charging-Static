import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: "#3e403d0f",
        color: "white",
        fontSize: 14,
        borderColor: "#34345a"
    },
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#3e403d0f",
        color: "#COCOEE",
        borderColor: "#34345a",
    }
}));

export const StyledTableRow = styled(TableRow)(() => ({
    backgroundColor: "#3e403d0f",
    borderColor: "#34345a",
    '&:last-child td, &:last-child th': {
        border: 0,
        borderColor: "#34345a",
    },
}));