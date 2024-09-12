import { TablePagination } from "@mui/material";

function Pagination({ pageChange, totalCount, pageNo, rowNo }) {

    return (
        <TablePagination
            page={pageNo - 1}
            component="div"
            count={totalCount}
            rowsPerPage={rowNo}
            // onPageChange={pageChange}
            rowsPerPageOptions={[10, 25, 50, 100]}
            // onRowsPerPageChange={(e) => rowChange(e.target.value)}
        />
    )
}

export default Pagination;