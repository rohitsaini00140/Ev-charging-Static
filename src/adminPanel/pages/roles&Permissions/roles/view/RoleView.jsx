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
import Pagination from '../../../../component/Pagination';
import RoleTableToolbar from './RoleTableToolbar';
import RoleTableHead from './RoleTableHead';
import RoleTableRow from './RoleTableRow';
import { roleData } from './roleData';

// ----------------------------------------------------------------------

function RoleView() {

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Roles</Typography>
        <Link to={"/admin/role/add"}>
          <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Role
          </Button>
        </Link>
      </Stack>
      <Card>
        <RoleTableToolbar />
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <RoleTableHead />
              <TableBody>
                <RoleTableRow />
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
        {(roleData.length > 0) && <Pagination
          // pageChange={handleChangePage}
          // rowChange={handleChangeRowsPerPage}
          totalCount={roleData.length}
          pageNo={1}
          rowNo={10}
        />}
      </Card>
    </Container>
  );
}

export default RoleView;