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
import UserTableHead from './UserTableHead';
import UserTableToolbar from './UserTableToolbar';
import { Link } from 'react-router-dom';
import UserTableRow from './UserTableRow';
import Pagination from '../../../component/Pagination';
import { userData } from './userData';

// ----------------------------------------------------------------------

function UserView() {

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Users</Typography>
        <Link to={"/admin/user/add"}>
          <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        </Link>
      </Stack>
      <Card>
        <UserTableToolbar />
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead />
              <TableBody>
                <UserTableRow />
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
        {(userData.length > 0) && <Pagination
          // pageChange={handleChangePage}
          // rowChange={handleChangeRowsPerPage}
          totalCount={userData.length}
          pageNo={1}
          rowNo={10}
        />}
      </Card>
    </Container>
  );
}

export default UserView;