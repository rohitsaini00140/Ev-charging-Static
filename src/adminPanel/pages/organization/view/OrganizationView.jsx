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
import OrganizationTableHead from "./OrganizationTableHead";
import OrganizationTableToolbar from "./OrganizationTableToolbar";
import { Link } from 'react-router-dom';
import OrganizationTableRow from "./OrganizationTableRow";
import { useGetOrganizationQuery } from '../../../globalState/organization/organizationApis';
import TablePagination from '../../../component/TablePagination';
import { useDispatch, useSelector } from "react-redux";
import { setOrganizationListPageNo } from "../../../globalState/organization/organizationSlices";


// ----------------------------------------------------------------------

function OrganizationView() {

    const dispatch = useDispatch()

    const { pageNo } = useSelector(state => state.organization);

    const { data, isSuccess } = useGetOrganizationQuery({ page: pageNo });

    const allOrganizationData = isSuccess && data.data;
    const paginationData = isSuccess && data;

    const { last_page } = paginationData;

    const handlePageChange = (event, value) => {
        sessionStorage.setItem('organizationListPageNo', JSON.stringify(value));
        dispatch(setOrganizationListPageNo(value));
    };

    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" color="white">Organizations</Typography>
                <Link to={"/admin/organization/add"}>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#34345a",
                            boxShadow: 'none',
                            "&:hover": { bgcolor: "#34345a" }
                        }}
                        color="inherit"
                        startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Organization
                    </Button>
                </Link>
            </Stack>
            <Card sx={{ bgcolor: "#181837" }}>
                <OrganizationTableToolbar allOrganizationData={allOrganizationData} />
                <Scrollbar>
                    <TableContainer sx={{ overflow: 'unset' }}>
                        <Table sx={{ minWidth: 800 }}>
                            <OrganizationTableHead allOrganizationData={allOrganizationData} />
                            <TableBody>
                                <OrganizationTableRow allOrganizationData={allOrganizationData} />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Scrollbar>
                {allOrganizationData.length > 0 && <TablePagination
                    count={last_page}
                    page={pageNo}
                    onPageChange={handlePageChange}
                />}
            </Card>
        </Container>
    );
}

export default OrganizationView;