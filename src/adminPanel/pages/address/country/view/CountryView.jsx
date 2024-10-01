import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Iconify from '../../../../component/Iconify';
import Scrollbar from '../../../../component/scrollbar/Scrollbar';
import { Link } from 'react-router-dom';
import TablePagination from '../../../../component/TablePagination';
import CountryTableToolbar from './CountryTableToolbar';
import CountryTableHead from './CountryTableHead';
import CountryTableRow from './CountryTableRow';

// ----------------------------------------------------------------------

function CountryView() {

    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" color='white'>Countries</Typography>
                <Link to={"/admin/country/add"}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#34345a",
                            boxShadow: 'none',
                            "&:hover": { bgcolor: "#34345a" }
                        }}
                        startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Country
                    </Button>
                </Link>
            </Stack>
            <Card sx={{ bgcolor: "#181837" }}>
                <CountryTableToolbar />
                <Scrollbar>
                    <TableContainer sx={{ overflow: 'unset' }}>
                        <Table sx={{ minWidth: 800 }}>
                            <CountryTableHead />
                            <TableBody>
                                <CountryTableRow />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Scrollbar>
                <TablePagination
                // count={last_page}
                // page={pageNo}
                // onPageChange={handlePageChange}
                />
            </Card>
        </Container>
    );
}

export default CountryView;