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
import RoleTableToolbar from './RoleTableToolbar';
import RoleTableHead from './RoleTableHead';
import RoleTableRow from './RoleTableRow';
import { StyledTableCell, StyledTableRow } from '../../../../component/tableStyle';
import { useGetAllRolesQuery } from '../../../../../globalState/roles/rolesApi';
import { useSelector } from 'react-redux';

function RoleView() {

  const { roleStatus } = useSelector(state => state.role)

  const { data: roleData, isSuccess: roleSuccess, isLoading } = useGetAllRolesQuery({ status: roleStatus })

  const allRoleData = roleSuccess && roleData?.roles;

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" color="white">Roles</Typography>
        <Link to={"/admin/role/add"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#34345a",
              boxShadow: 'none',
              "&:hover": { bgcolor: "#34345a" }
            }}
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}>
            New Role
          </Button>
        </Link>
      </Stack>
      <Card sx={{ bgcolor: "#181837" }}>
        <RoleTableToolbar />
        {isLoading ? (
          <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 300, padding: 4 }}>
            <Typography color="white" sx={{ mt: 2 }}>Loading...</Typography>
          </Stack>
        ) :
          (<Scrollbar>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>
                <RoleTableHead allRoleData={allRoleData} />
                <TableBody>
                  {allRoleData.length > 0 ?
                    <RoleTableRow allRoleData={allRoleData} />
                    :
                    (
                      <StyledTableRow>
                        <StyledTableCell colSpan={10} align="center" sx={{ border: "1px solid red", padding: "2rem" }}>
                          <Typography color="white">No Data Found</Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    )
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
          )}
      </Card>
    </Container>
  );
}

export default RoleView;