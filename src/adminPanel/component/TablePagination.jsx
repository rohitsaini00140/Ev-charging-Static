import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

function TablePagination({ count, page, onPageChange }) {
    return (
        <Stack spacing={2} justifyContent={"center"} alignItems={"center"} p={2}>
            <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={onPageChange}
            />
            <Typography>Page {page} of {count}</Typography>
        </Stack>
    )
}

export default TablePagination;