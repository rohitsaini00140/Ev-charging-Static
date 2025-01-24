import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

function TablePagination({ count, page, onPageChange }) {

    const paginationStyle = {
        "& .MuiPaginationItem-root": {
            color: 'black !important', // Ensure this gets applied
            borderColor: 'black !important', // Add importance for specificity
        },
        "& .MuiPaginationItem-previousNext": {
            color: 'black !important',
        },
        "& .Mui-selected": {
            backgroundColor: '#20c997 !important', // Properly scoped and marked important
            color: '#ffff !important', // Ensure this gets applied
        }
    };
    return (
        <Stack spacing={2} justifyContent={"center"} alignItems={"center"} p={2} bgcolor="#ffff">
            <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={onPageChange}
                sx={paginationStyle}
            />
            <Typography color='black'>Page {page} of {count}</Typography>
        </Stack>
    )
}

export default TablePagination;