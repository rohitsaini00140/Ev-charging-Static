import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import GunTableHead from "./GunTableHead";
import Scrollbar from "../../../component/scrollbar/Scrollbar";
import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
import Alertbar from "../../../component/Alertbar";
import Iconify from "../../../component/Iconify";
import GunTableRow from "./GunTableRow";
// import { useGetAllGunQuery } from "../../../../globalState/gunType/gunApi";
import { useEffect, useState } from "react";
import { useGetGunsListQuery } from "../../../../globalState/gunType/gunApi";
import TablePagination from "../../../component/TablePagination";

function GunView() {
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

  const { data: gunData, isSuccess: deviceSuccess, isLoading } = useGetGunsListQuery();

  // Ensure data exists
  const allGunData = gunData?.data || [];
  const paginationData = deviceSuccess && gunData;

  const { last_page } = paginationData;

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
          <Typography variant="h4" color="black">
            Gun Types
          </Typography>
          <Link to={"/admin/guns/add"}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#20c997",
                boxShadow: "none",
                padding: "10px 10px",
                "&:hover": { bgcolor: "#20c997" },
              }}
              color="inherit"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Gun Types
            </Button>
          </Link>
        </Stack>
        <Card
          sx={{
            // bgcolor: "#3e403d0f",
            boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
          }}
        >
          {/* <RoleTableToolbar /> */}
          {isLoading ? (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: 300, padding: 4 }}
            >
              <Typography color="Black" sx={{ mt: 2 }}>
                Loading...
              </Typography>
            </Stack>
          ) : (
            <Scrollbar>
              <TableContainer sx={{ overflow: "unset" }}>
                <Table sx={{ minWidth: 800 }}>
                  <GunTableHead allRoleData={allGunData} />
                  <TableBody>
                    {allGunData.length > 0 ? (
                      <GunTableRow allRoleData={allGunData} />
                    ) : (
                      <StyledTableRow>
                        <StyledTableCell
                          colSpan={10}
                          align="center"
                          sx={{ border: "1px solid red", padding: "2rem" }}
                        >
                          <Typography color="Black">No Data Found</Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          )}

{allGunData.length > 0 && (
            <TablePagination
              count={last_page}
            //   onPageChange={handlePageChange}
            //   page={page}
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

export default GunView;
