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
import { deviceData } from './deviceData';
import DeviceTableHead from './DeviceTableHead';
import DeviceTableRow from './DeviceTableRow';
import DeviceTableToolbar from './DeviceTableToolbar';

// ----------------------------------------------------------------------

function DeviceView() {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" color="white">Devices</Typography>
        <Link to={"/admin/device/add"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#34345a",
              boxShadow: 'none',
              "&:hover": { bgcolor: "#34345a" }
            }}
            startIcon={<Iconify icon="eva:plus-fill" />}>
            New Device
          </Button>
        </Link>
      </Stack>
      <Card sx={{ bgcolor: "#181837" }}>
        <DeviceTableToolbar />
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <DeviceTableHead />
              <TableBody>
                <DeviceTableRow />
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
        {(deviceData.length > 0) && <TablePagination />}
      </Card>
    </Container>
  );
}

export default DeviceView;