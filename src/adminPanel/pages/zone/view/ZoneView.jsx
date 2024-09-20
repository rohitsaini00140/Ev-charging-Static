import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Iconify from '../../../component/Iconify';
import Scrollbar from '../../../component/scrollbar/Scrollbar';
import { Link } from 'react-router-dom';
import TablePagination from '../../../component/TablePagination';
import ZoneTableToolbar from './ZoneTableToolbar';
import ZoneTableRow from './ZoneTableRow';
import ZoneTableHead from './ZoneTableHead';
import { useGetZoneQuery } from '../../../globalState/zone/zoneApis';
import { useDispatch, useSelector } from "react-redux";
import { setZoneListPageNo } from '../../../globalState/zone/zoneSlices';

// ----------------------------------------------------------------------

function ZoneView() {

    const dispatch = useDispatch()

    const { pageNo } = useSelector(state => state.zone);

    const { data, isSuccess } = useGetZoneQuery({ page: pageNo });

    const allOrganization = isSuccess && data?.filters?.organizations
        ? Object.entries(data.filters.organizations).map(([id, name]) => ({ id, name }))
        : [];

    const allZoneData = isSuccess && data.data.data;
    const paginationData = isSuccess && data.data;

    const { last_page } = paginationData;

    const handlePageChange = (event, value) => {
        sessionStorage.setItem('zoneListPageNo', JSON.stringify(value));
        dispatch(setZoneListPageNo(value));
    };

    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4">Zones</Typography>
                <Link to={"/admin/zone/add"}>
                    <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Zone
                    </Button>
                </Link>
            </Stack>
            <Card>
                <ZoneTableToolbar allZoneData={allZoneData} />
                <Scrollbar>
                    <TableContainer sx={{ overflow: 'unset' }}>
                        <Table sx={{ minWidth: 800 }}>
                            <ZoneTableHead allZoneData={allZoneData} />
                            <TableBody>
                                <ZoneTableRow allZoneData={allZoneData} />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Scrollbar>
                <TablePagination
                    count={last_page}
                    page={pageNo}
                    onPageChange={handlePageChange}
                />
            </Card>
        </Container>
    );
}

export default ZoneView;