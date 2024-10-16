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
import TablePagination from '../../../component/TablePagination';
import { useGetAdminQuery } from '../../../../globalState/adminAuth/adminApis';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminPageNo } from '../../../../globalState/adminAuth/adminSlice';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';

// ----------------------------------------------------------------------

function UserView() {

  const dispatch = useDispatch()

  const { pageNo } = useSelector(state => state.admin)

  const { data: allAdmins, isSuccess: adminSuccess, isLoading } = useGetAdminQuery({ page: pageNo });

  const allAdminData = adminSuccess && allAdmins?.data;

  const paginationData = adminSuccess && allAdmins;

  const { last_page } = paginationData

  const handlePageChange = (event, value) => {
    dispatch(setAdminPageNo(value));
  };



  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" color="white">Users</Typography>
        <Link to={"/admin/user/add"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#34345a",
              boxShadow: 'none',
              "&:hover": { bgcolor: "#34345a" }
            }}
            startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        </Link>
      </Stack>
      <Card sx={{ bgcolor: "#181837" }}>
        <UserTableToolbar />
        {isLoading ? (
          <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 300, padding: 4 }}>
            <Typography color="white" sx={{ mt: 2 }}>Loading...</Typography>
          </Stack>
        ) : (
          <Scrollbar>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>
                <UserTableHead allAdminData={allAdminData} />
                <TableBody>
                  {allAdminData.length > 0 ?
                    <UserTableRow
                      currentpage={pageNo}
                      allAdminData={allAdminData}
                    />
                    :
                    (
                      <StyledTableRow>
                        <StyledTableCell colSpan={10} align="center" sx={{ border: "1px solid red", padding: "2rem" }}>
                          <Typography color="white">No Data Found</Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    )}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        )}
        {(allAdminData.length > 0) && <TablePagination
          count={last_page}
          onPageChange={handlePageChange}
          page={pageNo}
        />}
      </Card>
    </Container>
  );
}

export default UserView;