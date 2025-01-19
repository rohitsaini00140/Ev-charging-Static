import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: "#3e403d0f",
        color: "white",
        fontSize: 14,
    },
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#3e403d0f",
        color: "#COCOEE",
        borderColor: "white",
    }
}));

export const StyledTableRow = styled(TableRow)(() => ({
    backgroundColor: "#3e403d0f",
    borderColor: "#9cb9b05e",
    '&:last-child td, &:last-child th': {
        borderColor: "white",
    },
}));