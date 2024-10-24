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
import { useGetUsersQuery } from '../../../../globalState/user/userApis';
import { useDispatch, useSelector } from 'react-redux';
import { setUserListPageNo } from '../../../../globalState/user/userSlice';
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Alertbar from '../../../component/Alertbar';

// ----------------------------------------------------------------------


const role = JSON.parse(sessionStorage.getItem("role"))



function UserView() {



  const { logInRole } = useSelector(state => state.role)



  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.message) {
      setSnackbar({
        open: true,
        message: location.state.message,
        severity: location.state.severity
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate]);


  const dispatch = useDispatch()

  const { pageNo, userName, status } = useSelector(state => state.user)

  const { roleName } = useSelector(state => state.role)

  const { data: allUsers, isSuccess: userSuccess, isLoading } = useGetUsersQuery({ page: pageNo, name: userName, status, role_id: roleName });

  // const allUserData = userSuccess && (allUsers?.data).map(ele => ele?.name === role?.user?.name);

  const allUserData = logInRole?.user?.role?.name === "Superadmin" ? (userSuccess && (allUsers?.data)) : (userSuccess && allUsers?.data?.filter(ele => ele?.name === logInRole?.user?.name))


  const paginationData = userSuccess && allUsers;

  const { last_page } = paginationData

  const handlePageChange = (event, value) => {
    dispatch(setUserListPageNo(value));
  };


  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar((prevState) => ({
      ...prevState,
      open: false
    }));
  };


  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          m={3}
        >
          <Typography variant="h4" color="white">Users</Typography>
          <Link to={"/admin/user/add"}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#20c997",
                boxShadow: 'none',
                padding: '10px 10px',
                "&:hover": { bgcolor: "#20c997" }
              }}
              startIcon={<Iconify icon="eva:plus-fill" />}>
              New User
            </Button>
          </Link>
        </Stack>
        <Card sx={{ bgcolor: "rgb(29, 40, 44)", boxShadow: '0px 4px 12px rgba(87, 179, 62, 0.2)' }}>
          <UserTableToolbar />
          {isLoading ? (
            <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 300, padding: 4 }}>
              <Typography color="white" sx={{ mt: 2 }}>Loading...</Typography>
            </Stack>
          ) : (
            <Scrollbar>
              <TableContainer sx={{ overflow: 'unset' }}>
                <Table sx={{ minWidth: 800 }}>
                  <UserTableHead allUserData={allUserData} />
                  <TableBody>
                    {allUserData.length > 0 ?
                      <UserTableRow
                        currentpage={pageNo}
                        allUserData={allUserData}
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
          {(allUserData.length > 0) && <TablePagination
            count={last_page}
            onPageChange={handlePageChange}
            page={pageNo}
          />}
        </Card>
      </Container>
      <Alertbar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
        position={{ vertical: 'top', horizontal: 'center' }}
        sx={{ mt: "5rem" }}
      />
    </>
  );
}

export default UserView;