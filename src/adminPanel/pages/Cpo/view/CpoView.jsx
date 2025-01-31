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
import { useDispatch, useSelector } from "react-redux";
import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Alertbar from "../../../component/Alertbar";
import CpoTableHead from "./CpoTableHead";
import CpoTableRow from "./CpoTableRow";
import { useGetCpoQuery } from "../../../../globalState/Cpos/cpoApi";
import { setCpoListPageNo } from "../../../../globalState/Cpos/cpoSlice";
import CpoTableToolbar from "./CpoTableToolbar";

function CpoView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { page, userName, status } = useSelector((state) => state.cpo);

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

  const {
    data: allUsers,
    isSuccess: CpoSuccess,
    isLoading,
  } = useGetCpoQuery({
    page: page,
    name: userName,
    status,
  });

  const allUserData = (CpoSuccess && allUsers?.data) || [];
  const paginationData = CpoSuccess && allUsers;

  const { last_page } = paginationData;

  const handlePageChange = (event, value) => {
    dispatch(setCpoListPageNo(value));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prevState) => ({ ...prevState, open: false }));
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
            CPOs
          </Typography>
          <Link to="/admin/cpos/view">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#20c997",
                boxShadow: "none",
                padding: "10px 10px",
                "&:hover": { bgcolor: "#20c997" },
              }}
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New CPOs
            </Button>
          </Link>
        </Stack>
        <Card
          sx={{
            bgcolor: "#ffff",
            boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
          }}
        >
          <CpoTableToolbar />
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
                  <CpoTableHead allUserData={allUserData} />
                  <TableBody>
                    {allUserData.length > 0 ? (
                      <CpoTableRow
                        currentpage={page}
                        allUserData={allUserData}
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
          {allUserData.length > 0 && (
            <TablePagination
              count={last_page}
              onPageChange={handlePageChange}
              page={page}
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

export default CpoView;
