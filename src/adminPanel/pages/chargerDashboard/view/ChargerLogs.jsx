import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Scrollbar from "../../../component/scrollbar/Scrollbar";
import TablePagination from "../../../component/TablePagination";
import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
import { useDispatch, useSelector } from "react-redux";

import ChargerdashboardTableHead from "./ChargerdashboardTableHead";
import ChargerTableRow from "./ChargerTableRow";
import { Grid } from "@mui/system";
import { useGetChargersQuery } from "../../../../globalState/charger/chargerApi";
import { setChargerListPageNo } from "../../../../globalState/charger/ChargerSlice";

function ChargerLogs() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.charger);

  const {
    data: chargerData,
    isSuccess: deviceLogSuccess,
    isLoading,
  } = useGetChargersQuery();

  const allDeviceLogData1 = deviceLogSuccess && chargerData;

  // console.log(allDeviceLogData1,"dddddddddddd")

  const paginationData = deviceLogSuccess && chargerData;
  const { last_page } = paginationData;

  const handlePageChange = (event, value) => {
    dispatch(setChargerListPageNo(value));
  };

  return (
    <>
      <Container>
        <Stack>
          <Grid
            container
            sx={{
              margin: "20px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h4" color="black">
                Charger Activity Logs
              </Typography>
            </Grid>
          </Grid>
        </Stack>

        <Card
          sx={{
            bgcolor: "#ffff",
            borderRadius: "2px",
          }}
        >
          <Scrollbar>
            <TableContainer sx={{ overflow: "unset" }}>
              <Table sx={{ minWidth: 800 }}>
                <ChargerdashboardTableHead />
                <TableBody>
                  {allDeviceLogData1?.length > 0 ? (
                    <ChargerTableRow postData={allDeviceLogData1} />
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
          {/* ) } */}
          {allDeviceLogData1.length > 0 && (
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

export default ChargerLogs;
