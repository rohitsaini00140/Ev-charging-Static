import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

function TablePagination({ count, page, onPageChange }) {

    const paginationStyle = {
        "& .MuiPaginationItem-root": {
            color: 'white',
            borderColor: '#34345a'
        },
        "& .MuiPaginationItem-previousNext": {
            color: 'white',
        },
    }

    return (
        <Stack spacing={2} justifyContent={"center"} alignItems={"center"} p={2} bgcolor="#181837">
            <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={onPageChange}
                sx={paginationStyle}
            />
            <Typography color='white'>Page {page} of {count}</Typography>
        </Stack>
    )
}

export default TablePagination;