import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

function TablePagination({ count, page, onPageChange }) {
    const paginationStyle = {
        "& .MuiPaginationItem-root": {
            color: 'white',
            borderColor: '#3e403d0f'
        },
        "& .MuiPaginationItem-previousNext": {
            color: 'white',
        },
        ".css-ax0zxn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
            background: '#20c997',
        }
    }
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