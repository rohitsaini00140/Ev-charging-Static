import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

function TablePagination({ count, page, onPageChange }) {

    const paginationStyle = {
        "& .MuiPaginationItem-root": {
            color: 'white !important', // Ensure this gets applied
            borderColor: '#3e403d0f !important', // Add importance for specificity
        },
        "& .MuiPaginationItem-previousNext": {
            color: 'white !important',
        },
        "& .Mui-selected": {
            backgroundColor: '#20c997 !important', // Properly scoped and marked important
        }
    };
    return (
        <Stack spacing={2} justifyContent={"center"} alignItems={"center"} p={2} bgcolor="#3e403d0f">
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