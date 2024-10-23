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
import { StyledTableCell, StyledTableRow } from '../../../component/tableStyle';
import DeviceTableHead from './DeviceTableHead';
import DeviceTableRow from './DeviceTableRow';
import DeviceTableToolbar from './DeviceTableToolbar';
import { useDispatch, useSelector } from 'react-redux';
import { useGetDeviceQuery } from '../../../../globalState/devices/deviceApis';
import { setDeviceListPageNo } from '../../../../globalState/devices/deviceSlices';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Alertbar from '../../../component/Alertbar';


function DeviceView() {

  const location = useLocation();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  useEffect(() => {
    if (location.state && location.state.message) {
      setSnackbar({
        open: true,
        message: location.state.message,
        severity: location.state.severity
      });
    }
  }, [location.state]);

  const dispatch = useDispatch()

  const { pageNo, deviceName, deviceSerialNumber, deviceType, deviceStatus } = useSelector(state => state.device);

  const { data: deviceData, isSuccess: deviceSuccess, isLoading } = useGetDeviceQuery({ page: pageNo, name: deviceName, serial_number: deviceSerialNumber, type: deviceType, status: deviceStatus });

  const allDeviceData = deviceSuccess && deviceData?.data

  const paginationData = deviceSuccess && deviceData;

  const { last_page } = paginationData;

  const handlePageChange = (event, value) => {
    dispatch(setDeviceListPageNo(value));
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
          mt={"7rem"}
        >
          <Typography variant="h4" color="white">Devices</Typography>
          <Link to={"/admin/device/add"}>
            <Button
              variant="contained"
              sx={{
                boxShadow: '0px 4px 12px rgba(87, 179, 62, 0.2)',
                // border:'1px solid #20c997',
                // color:'#20c997',
                padding: '10px 10px',
                bgcolor: "#20c997", 
                color: 'white',
              }}
              startIcon={<Iconify icon="eva:plus-fill" />}>
              New Device
            </Button>
          </Link>
        </Stack>
        <Card sx={{ bgcolor: "#3e403d0f", boxShadow: '0px 4px 12px rgba(87, 179, 62, 0.2)' }}>
          <DeviceTableToolbar />
          {isLoading ? (
            <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 300, padding: 4 }}>
              <Typography color="white" sx={{ mt: 2 }}>Loading...</Typography>
            </Stack>
          ) : (<Scrollbar>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>
                <DeviceTableHead allDeviceData={allDeviceData} />
                <TableBody>
                  {allDeviceData.length > 0 ? (
                    <DeviceTableRow
                      allDeviceData={allDeviceData}
                      currentPageNo={pageNo}
                    />
                  ) : (
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
          {allDeviceData.length > 0 && <TablePagination
            count={last_page}
            page={pageNo}
            onPageChange={handlePageChange}
          />}
        </Card>
      </Container>
      <Alertbar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
        position={{ vertical: 'top', horizontal: 'right' }}
        sx={{ mt: "6rem" }}
      />
    </>
  );
}

export default DeviceView;