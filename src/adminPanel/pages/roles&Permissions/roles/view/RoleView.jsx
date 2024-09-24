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
        {(roleData.length > 0) && <TablePagination />}
      </Card>
    </Container>
  );
}

export default RoleView;