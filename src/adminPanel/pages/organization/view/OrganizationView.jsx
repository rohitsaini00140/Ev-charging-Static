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
import Pagination from '../../../component/Pagination';
import { organizationData } from "./organizationData";

// ----------------------------------------------------------------------

function OrganizationView() {

    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4">Organizations</Typography>
                <Link to={"/admin/organization/add"}>
                    <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Organization
                    </Button>
                </Link>
            </Stack>
            <Card>
                <OrganizationTableToolbar />
                <Scrollbar>
                    <TableContainer sx={{ overflow: 'unset' }}>
                        <Table sx={{ minWidth: 800 }}>
                            <OrganizationTableHead />
                            <TableBody>
                                <OrganizationTableRow />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Scrollbar>
                {(organizationData.length > 0) && <Pagination
                    // pageChange={handleChangePage}
                    // rowChange={handleChangeRowsPerPage}
                    totalCount={organizationData.length}
                    pageNo={1}
                    rowNo={10}
                />}
            </Card>
        </Container>
    );
}

export default OrganizationView;