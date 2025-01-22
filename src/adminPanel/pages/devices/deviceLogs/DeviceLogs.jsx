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
import {
  useFilterChargerLogsQuery,
  useGetDeviceLogsQuery,
} from "../../../../globalState/devices/deviceApis";
import { setcharger_display_id, setDeviceListPageNo,} from "../../../../globalState/devices/deviceSlices";
import DeviceLogsTableHead from "./DeviceLogsTableHead";
import DeviceLogsTableRow from "./DeviceLogsTableRow";
import DeviceLogsTableToolbar from "./DeviceLogsTableToolbar";
import { Button, Box } from "@mui/material";
import * as XLSX from "xlsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dayjs from "dayjs";
import { useState } from "react";
import { Grid, height } from "@mui/system";
import SearchInput from "../../../component/SearchInput";
import Selector from "../../../component/selector/Selector";
import { setCharger_status } from "../../../../globalState/devices/deviceSlices";
import { useGetPostsQuery } from "../../../../globalState/devices/deviceApis";

function DeviceLogs() {
  const [from_date, setfrom_date] = useState(null);
  const [to_date, setto_date] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const {
    deviceUniqueID,
    deviceID,
    deviceActionType,
    page,
    pageNo,
    charger_status,
    charger_display_id,
  } = useSelector((state) => state.device);

  const { data: deviceLogData, isSuccess: deviceLogSuccess } =
    useGetDeviceLogsQuery({
      page: page,
      pageNo: pageNo,
      deviceID,
      action: deviceActionType,
      uniqueId: deviceUniqueID,
      charger_status,
    });

  const allDeviceLogData = deviceLogSuccess && deviceLogData?.data?.data;
  const {
    data: postData,
    error,
    isLoading,
  } = useFilterChargerLogsQuery({
    page: page,
    from_date: from_date ? dayjs(from_date).format("YYYY-MM-DD") : undefined,
    to_date: to_date ? dayjs(to_date).format("YYYY-MM-DD") : undefined,
    charger_display_id,
  });

  const handlePageChange = (event, value) => {
    dispatch(setDeviceListPageNo(value));
  };



  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    dispatch(setcharger_display_id(value));
  };

  const downloadExcel = async () => {
    const response = await fetch(
      "http://143.110.178.49/ev-charging-backend/api/charger-logs?download=true"
    );
    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    const postData = await response.json();

    const wsData = postData?.map((data) => {
      // Parse chargerrequest and chargerresponse if they are valid JSON strings
      let parsedRequest = "No Data Found";
      let parsedResponse = "No Data Found";

      try {
        parsedRequest =
          data?.chargerrequest && typeof data.chargerrequest === "string"
            ? JSON.parse(data.chargerrequest)
            : "No Data Found";
      } catch (err) {
        console.error("Error parsing chargerrequest:", err);
      }

      try {
        parsedResponse =
          data?.chargerresponse && typeof data.chargerresponse === "string"
            ? JSON.parse(data.chargerresponse)
            : "No Data Found";
      } catch (err) {
        console.error("Error parsing chargerresponse:", err);
      }

      // Only format nested data in response
      const formatNestedData = (data) => {
        if (typeof data === "object" && data !== null) {
          if (Array.isArray(data)) {
            // If it's an array, iterate and recursively format each element
            return data
              .map((item, index) => `${index}: ${formatNestedData(item)}`)
              .join(", ");
          } else {
            // If it's an object, format key-value pairs
            return Object.entries(data)

              .map(
                ([key, value]) =>
                  `${key}: ${
                    typeof value === "object" ? formatNestedData(value) : value
                  }`
              )
              .join(", ");
          }
        }
        return data;
      };

      // For the Response: If it's an array with nested objects, we need to handle it
      const formattedResponse = Array.isArray(parsedResponse)
        ? formatNestedData(parsedResponse)
        : parsedResponse;

      return {
        Action: data?.action || "No Data Available",
        "Charger Display ID": data?.charger_id || "No Data Available",
        Request: formatNestedData(parsedRequest) || "No Data Available", // Formatting Request data
        "Request Time":
          new Date(data?.reponse_date).toLocaleString() || "No Data Available",
        Response: formattedResponse, // Nested Response data formatted
        "Response Time":
          new Date(data?.reponse_date).toLocaleString() || "No Data Available",
      };
    });

    const ws = XLSX.utils.json_to_sheet(wsData);
    const colWidth = wsData.reduce((acc, row) => {
      Object.keys(row).forEach((key) => {
        const valueLength = row[key]?.toString().length || 0;
        if (key === "Request" || key === "Response") {
          acc[key] = Math.max(acc[key] || 0, valueLength); // Adjust +20 for more space for long data
        } else {
          acc[key] = Math.max(acc[key] || 0, valueLength + 5); // Standard padding for other fields
        }
      });
      return acc;
    }, {});

    ws["!cols"] = Object.keys(colWidth).map((key) => ({
      wpx: colWidth[key] * 6,
    }));

    // Add autofilter for all headers
    ws["!autofilter"] = {
      ref: XLSX.utils.encode_range({
        s: { r: 0, c: 0 },
        e: { r: wsData.length, c: Object.keys(wsData[0]).length - 1 },
      }),
    };

    // Create workbook and add worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Device Logs");

    // Write to file
    XLSX.writeFile(wb, "device_logs.xlsx");
  };

  return (
    <>
      <Container>
        <Stack
          sx={{
            // padding: "1.2rem 0rem",
            // display:"flex",
            // justifyContent:'space-between'
            marginBottom: "15px",
          }}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
            spacing={2.3}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
              sx={{
                width: {
                  xs: "47%",
                  sm: "200px",
                  md: "200px",
                },
                maxWidth: "100%",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From Date"
                  value={from_date}
                  onChange={(date) => setfrom_date(date)}
                  format="YYYY-MM-DD"
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                    "& .MuiFormLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
              sx={{
                width: {
                  xs: "47%",
                  sm: "200px",
                  md: "200px",
                },
                maxWidth: "100%",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="To Date"
                  value={to_date}
                  onChange={(date) => setto_date(date)}
                  format="YYYY-MM-DD"
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                    "& .MuiFormLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
              sx={{
                width: {
                  xs: "50%",
                  sm: "200px",
                  md: "200px",
                },
                maxWidth: "100%",
              }}
            >
              <SearchInput
                placeholder="Charger Display ID"
                sx={{ color: "white", background: "#3e403d0f" }}
                value={searchValue}
                onChange={handleSearchChange}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={downloadExcel}
                sx={{ background: "#20c997", width: "100%", height: "100%" }}
              >
                Download Excel
              </Button>
            </Grid>
          </Grid>
        </Stack>

        <Card
          sx={{
            bgcolor: "#3e403d0f",
            // boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",
            borderRadius: "2px",
          }}
        >
          {/* <DeviceLogsTableToolbar /> */}
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
                  <DeviceLogsTableHead allDeviceLogData={allDeviceLogData} />
                  <TableBody>
                    {postData?.data?.length > 0 ? (
                      <DeviceLogsTableRow postData={postData} />
                    ) : (
                      <StyledTableRow>
                        <StyledTableCell
                          colSpan={10}
                          align="center"
                          sx={{ border: "1px solid red", padding: "2rem" }}
                        >
                          <Typography color="white">No Data Found</Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          )}
          {postData?.data?.length > 0 && (
            <TablePagination
              count={Math.floor(postData?.total / 10)}
              page={page}
              onPageChange={handlePageChange}
              rowsPerPage={10}
            />
          )}
        </Card>
      </Container>
    </>
  );
}

export default DeviceLogs;
