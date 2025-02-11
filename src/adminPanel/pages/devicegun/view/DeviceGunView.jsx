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
import { Link, useParams } from "react-router-dom";
import TablePagination from "../../../component/TablePagination";
import { useDispatch, useSelector } from "react-redux";
import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetCpoQuery } from "../../../../globalState/Cpos/cpoApi";
import { setCpoListPageNo } from "../../../../globalState/Cpos/cpoSlice";
import DeviceGunTableHead from "./DeviceGunTableHead";
import DeviceGunTableRow from "./DeviceGunTableRow";
import { useGetDeviceGunsListQuery } from "../../../../globalState/devicegun/devicegunApi";
import { setDeviceGunListPageNo } from "../../../../globalState/devicegun/devicegunSlice";

function DeviceGunView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { page } = useSelector((state) => state.deviceguns);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    if (location.state?.message) {
      setSnackbar({
        open: true,
        message: location.state.message,
        severity: location.state.severity,
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const { data: alldevicegun,  isSuccess: devicegunSuccess, isLoading, isError, error } = useGetDeviceGunsListQuery({ page});

  
console.log(alldevicegun,"kya  aaaa raha ha")


const paginationData = devicegunSuccess && alldevicegun;


  console.log(paginationData,"fffffffffffff")

  const { last_page } = paginationData;

  const handlePageChange = (event, value) => {
    dispatch(setDeviceGunListPageNo(value));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prevState) => ({ ...prevState, open: false }));
  };

  return (
    <>
      <Container>
        <Card
          sx={{
            bgcolor: "#ffff",
            boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
          }}
        >
          {/* <CpoTableToolbar /> */}
          {isLoading ? (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: 300, padding: 4 }}
            >
              <Typography color="black">Loading...</Typography>
            </Stack>
          ) : (
            <Scrollbar>
              <TableContainer sx={{ overflow: "unset" }}>
                <Table sx={{ minWidth: 800 }}>
                  <DeviceGunTableHead/>
                  <TableBody>
                    {alldevicegun?.data.length > 0 ? (
                      <DeviceGunTableRow
                        currentpage={page}
                        allUserData={alldevicegun}
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
          {alldevicegun?.data.length > 0 && (
            <TablePagination
              count={last_page}
              onPageChange={handlePageChange}
              page={page}
            />
          )}
        </Card>
      </Container>

    </>
  );
}

export default DeviceGunView;
