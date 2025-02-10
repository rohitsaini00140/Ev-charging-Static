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
import * as XLSX from "xlsx";

import ChargerdashboardTableHead from "./ChargerdashboardTableHead";
import ChargerTableRow from "./ChargerTableRow";
import { Grid } from "@mui/system";
import { useGetChargersQuery } from "../../../../globalState/charger/chargerApi";
import { setChargerDashboardPageNo } from "../../../../globalState/charger/ChargerSlice";
import { Button } from "@mui/material";

function ChargerLogs({ dataLogs }) {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.charger);

  const {
    data: chargerData,
    isSuccess: deviceLogSuccess,
    isLoading,
  } = useGetChargersQuery();

  const allDeviceLogData1 = dataLogs;

  // console.log(allDeviceLogData1,"dddddddddddd")

  const paginationData = deviceLogSuccess && chargerData;
  const { last_page } = paginationData;

  const handlePageChange = (event, value) => {
    dispatch(setChargerDashboardPageNo(value));
  };



  // const downloadExcel = () => {
  //   if (!allDeviceLogData1 || allDeviceLogData1.length === 0) {
  //     alert("No data available to download.");
  //     return;
  //   }
  
  //   // Extract only the required headers
  //   const wsData = allDeviceLogData1.map((data) => ({
  //     Action: data?.action || "No Data Available",
  //     Request: data?.chargerrequest || "No Data Available",
  //     Response: data?.chargerresponse || "No Data Available",
  //     "Request Time": data?.request_date
  //       ? new Date(data.request_date).toLocaleString()
  //       : "No Data Available",
  //     "Response Time": data?.reponse_date
  //       ? new Date(data.reponse_date).toLocaleString()
  //       : "No Data Available",
  //   }));
  
  //   // Create worksheet
  //   const worksheet = XLSX.utils.json_to_sheet(wsData, {
  //     header: ["Action", "Request", "Response", "Request Time", "Response Time"],
  //   });
  
  //   // Function to calculate column width based on the longest content in each column
  //   const autoFitColumns = (ws, data) => {
  //     const columnWidths = Object.keys(data[0]).map((key, colIndex) => ({
  //       wch: Math.max(
  //         key.length, // Header length
  //         ...data.map((row) => (row[key] ? row[key].toString().length : 0)) // Max cell length
  //       ) + 2 // Add some padding
  //     }));
      
  //     ws["!cols"] = columnWidths;
  //   };
  
  //   // Adjust column widths dynamically
  //   autoFitColumns(worksheet, wsData);
  
  //   // Create workbook and append the worksheet
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Charger Logs");
  
  //   // Download the file
  //   XLSX.writeFile(workbook, "Charger_Logs.xlsx");
  // };
  
  


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
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h4" color="black">
                Charger Activity Logs
              </Typography>
            </Grid>

            {/* <Grid item xs={12} sm={6} md={6} lg={6}>
              {" "}
              <Button onClick={downloadExcel} variant="contained" color="primary">Download Excel</Button>
            </Grid> */}
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
