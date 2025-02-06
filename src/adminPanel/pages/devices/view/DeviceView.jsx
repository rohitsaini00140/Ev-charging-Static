import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Iconify from "../../../component/Iconify";
import Scrollbar from "../../../component/scrollbar/Scrollbar";
import { Link } from "react-router-dom";
import TablePagination from "../../../component/TablePagination";
import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
import DeviceTableHead from "./DeviceTableHead";
import DeviceTableRow from "./DeviceTableRow";
import DeviceTableToolbar from "./DeviceTableToolbar";
import { useDispatch, useSelector } from "react-redux";
import { useGetDeviceQuery } from "../../../../globalState/devices/deviceApis";
import {
  setDeviceListPageNo,
  setDeviceListPageNo1,
} from "../../../../globalState/devices/deviceSlices";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Alertbar from "../../../component/Alertbar";

function DeviceView() {
  const { logInRole } = useSelector((state) => state.role);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.message) {
      setSnackbar({
        open: true,
        message: location.state.message,
        severity: location.state.severity,
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const dispatch = useDispatch();

  const { pageNo, deviceName, deviceStatus, deviceID } = useSelector(
    (state) => state.device
  );
  const { projectName } = useSelector((state) => state.project);
  const { clusterName } = useSelector((state) => state.cluster);

  const {
    data: deviceData,
    isSuccess: deviceSuccess,
    isLoading,
  } = useGetDeviceQuery({
    page: pageNo,
    device_name: deviceName,
    cluster_name: clusterName,
    deviceID,
    project_name: projectName,
    status: deviceStatus,
  });

  // const allDeviceData = deviceSuccess && deviceData?.data

  const allDeviceData =
    logInRole?.user?.role?.name === "Superadmin"
      ? deviceSuccess && deviceData?.data
      : deviceSuccess &&
        deviceData?.data.filter(
          (ele) => ele?.cluster?.cluster_name === logInRole?.user?.name
        );

  const paginationData = deviceSuccess && deviceData;
  const { last_page } = paginationData;


  console.log(allDeviceData,"fffffffff")
  const handlePageChange = (event, value) => {
    dispatch(setDeviceListPageNo1(value));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar((prevState) => ({
      ...prevState,
      open: false,
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
          <Typography variant="h4" color="Black">
            Devices
          </Typography>
          <Link to={"/admin/device/add"}>
            <Button
              variant="contained"
              sx={{
                boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
                padding: "10px 10px",
                bgcolor: "#20c997",
                color: "white",
              }}
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Device
            </Button>
          </Link>
        </Stack>
        <Card
          sx={{
            bgcolor: "#ffff",
            // boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
          }}
        >
          <DeviceTableToolbar />
          {isLoading ? (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: 300, padding: 4 }}
            >
              <Typography color="white" sx={{ mt: 2 }}>
                Loading...
              </Typography>
            </Stack>
          ) : (
            <Scrollbar>
              <TableContainer sx={{ overflow: "unset" }}>
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
                        <StyledTableCell
                          colSpan={10}
                          align="center"
                          sx={{ border: "1px solid red", padding: "2rem" }}
                        >
                          <Typography color="black">No Data Found</Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          )}
          {allDeviceData.length > 0 && (
            <TablePagination
              count={last_page}
              page={pageNo}
              onPageChange={handlePageChange}
            />
          )}
        </Card>
      </Container>
      <Alertbar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
        position={{ vertical: "top", horizontal: "center" }}
        sx={{ mt: "5rem" }}
      />
    </>
  );
}

export default DeviceView;
