import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Container, Card, CardContent, Button } from "@mui/material";
import { Box, Grid, Stack } from "@mui/system";
import { useEffect, useMemo, useState } from "react";

import {
  useGetChargersQuery,
  useGetChargersWithFilterQuery,
  useGetChargersWithPaginationQuery,
} from "../../../globalState/charger/chargerApi";
import ChargerLogs from "./view/ChargerLogs";
import ConnectorStatus from "./view/ConnectorStatus";
import TablePagination from "../../component/TablePagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setChargerDashboardPageNo,
  setDeviceID,
} from "../../../globalState/charger/chargerSlice";
import { inputStyle } from "../../component/inputStyle";
import { useUpdateDeviceOccpMutation } from "../../../globalState/devices/deviceApis";

function Charger_Dashboard() {
  const dispatch = useDispatch();
  const { page, deviceID,log_page} = useSelector((state) => state.charger);

  const { data: chargerData1, isSuccess } = useGetChargersWithPaginationQuery({
    page,
    log_page,
  });


  const { data: filteredChargers, isSuccess: filteredSuccess } =
    useGetChargersWithFilterQuery({ deviceID,log_page });

  const allDeviceLogData = deviceID ? filteredChargers : chargerData1;
  const successStatus = deviceID ? filteredSuccess : isSuccess;

  const ActionId = allDeviceLogData?.data?.map((itr) => itr.id);
  const Interval = allDeviceLogData?.data?.map((itr) => itr.interval);

 

  const handlePageChange = (event, value) => {
  
    dispatch(setChargerDashboardPageNo(value));
    
  };

  const handleSearchChange = (event) => {
    dispatch(setDeviceID(event.target.value));
  };

  const [selectedChargerId, setSelectedChargerId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [actionVisibility, setActionVisibility] = useState({});

  const [showRadio, setShowRadio] = useState(false);
  const [resetType, setResetType] = useState("");
  const [selectedConfiguration, setSelectedConfiguration] = useState("");
  const [showHeartbeatInput, setShowHeartbeatInput] = useState(false);

  const [updateinterval, setUpdateinterval] = useState('');


  useEffect(() => {
    if (allDeviceLogData?.data?.length > 0) {
      setUpdateinterval(allDeviceLogData?.data[0]?.interval || '');
    }
  }, [allDeviceLogData, page]);

  useEffect(() => {
  // Reset selectedChargerId and actionVisibility when page changes
  setSelectedChargerId(null);
  setActionVisibility({});
}, [page]);

  

  const handleResetClick = () => {
    setShowRadio(true);
  };

  const handleHeartbeatClick = () => {
    setShowHeartbeatInput((prev) => !prev);
  };

  const handleRadioChange = (event) => {
    // setResetType(event.target.value); // Update the reset type
    const selectedValue = event.target.value;

    if (window.confirm("Are you sure you want to select this option?")) {
      setResetType(selectedValue);
    }
  };

  const actions = [
    "Change Availability",
    "Get Configurations",
    "Change Configurations",
    "Remote Start",
    "Remote Stop",
  ];

  const handleButtonClick = () => {
    if (selectedChargerId) {
      setSelectedChargerId(null);
      setActionVisibility({}); // Reset all action visibility
    } else {
      setSelectedChargerId(ActionId);
    }
  };

  const handleActionClick = (action) => {
    setActionVisibility((prev) => ({
      ...prev,
      [action]: !prev[action],
    }));
  };

  const [updateDeviceOccp] = useUpdateDeviceOccpMutation();

  function Updatetoclick() {
    const deviceIdString = ActionId[0]?.toString();
    console.log(updateinterval, "Updating interval...");
  
    updateDeviceOccp({ updatedDeviceData: { interval: updateinterval, device_id: deviceIdString } })
      .unwrap()
      .then((res) => {
        alert(`Success: ${res.message || "Interval updated successfully!"}`);
        
        window.location.reload();
      })
      .catch((err) => {
        alert(`Error: ${err.data?.message || "Failed to update interval!"}`);
      });
  }
  
  return (
    <Container maxWidth="xl">
      <Stack>
        <Grid
          Container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ m: 2 }}>
              OCPP Communication
            </Typography>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <TextField
              label="Search by Device ID"
              variant="outlined"
              fullWidth
              value={deviceID}
              onChange={handleSearchChange}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </Stack>

      {successStatus && allDeviceLogData?.data?.length > 0 ? (
        allDeviceLogData?.data?.map((val) => {
          return (
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, md: 12 }}>
                <Card
                  elevation={10}
                  sx={{
                    p: 4,
                    boxShadow: 3,
                    borderRadius: 2,
                    marginBottom: "20px",
                  }}
                >
                  <CardContent>
                    <Grid container alignItems="center">
                      {/* Left side: Data */}
                      <Grid item size={{ xs: 12, md: 6 }}>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          sx={{ display: "flex" }}
                        >
                          <Typography
                            sx={{ fontWeight: "bold", marginRight: "5px" }}
                          >
                            Charger Display ID:
                          </Typography>
                          {val.deviceID}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          sx={{ display: "flex" }}
                        >
                          <Typography
                            sx={{ fontWeight: "bold", marginRight: "5px" }}
                          >
                            Project Name:
                          </Typography>
                          {val.project_name}
                        </Typography>

                        <Typography
                          variant="body1"
                          color="textSecondary"
                          sx={{ display: "flex" }}
                        >
                          <Typography
                            sx={{ fontWeight: "bold", marginRight: "5px" }}
                          >
                            Interval :
                          </Typography>
                          {val.interval} Second
                        </Typography>

                        <Typography
                          variant="body1"
                          color="textSecondary"
                          sx={{ display: "flex" }}
                        >
                          <Typography
                            sx={{ fontWeight: "bold", marginRight: "5px" }}
                          >
                            Status :
                          </Typography>
                          NA
                        </Typography>
                      </Grid>
                      {/* Right side: Button */}
                      <Grid
                        item
                        size={{ xs: 12, md: 6 }}
                        sx={{
                          display: "inline-grid",
                          justifyContent: "end",
                          gap: "10px",
                        }}
                      >
                        <Button
                          onClick={handleButtonClick}
                          variant="contained"
                          sx={{ mt: 0, bgcolor: "#20c997", width: "100px" }}
                        >
                          Actions
                        </Button>

                        {selectedChargerId && (
                          <>
                            <Box sx={{ display: "flex", gap: "10px" }}>
                              <Button
                                variant="contained"
                                sx={{ mt: 0, bgcolor: "#20c997" }}
                                onClick={handleHeartbeatClick}
                              >
                                Heartbeat
                              </Button>

                              <Button
                                variant="contained"
                                sx={{ mt: 0, bgcolor: "#20c997" }}
                                onClick={handleResetClick}
                              >
                                Reset
                              </Button>
                            </Box>

                            {showHeartbeatInput && (
                              <Box sx={{ mt: 2 }}>
                                <TextField
                                  label="Heartbeat Interval (In-Seconds)"
                                  sx={inputStyle}
                                  fullWidth
                                  // value={updateinterval}
                                  onChange={(e) =>
                                    setUpdateinterval(e.target.value)
                                  }
                                  defaultValue={Interval}
                                />

                                <Grid item size={{ xs: 12, md: 4 }}>
                                  <Button
                                    sx={{
                                      bgcolor: "#20c997",
                                      marginTop: "10px",
                                    }}
                                    onClick={Updatetoclick}
                                    variant="contained"
                                  >
                                    Enter
                                  </Button>
                                </Grid>
                              </Box>
                            )}

                            {showRadio && (
                              <Box sx={{ mt: 2 }}>
                                <RadioGroup
                                  value={resetType}
                                  onChange={handleRadioChange}
                                  sx={{ display: "inline" }}
                                >
                                  <FormControlLabel
                                    value="soft-reset"
                                    control={
                                      <Radio
                                        sx={{
                                          color: "green",
                                          "&.Mui-checked": { color: "green" },
                                        }}
                                      />
                                    }
                                    label="Soft Reset"
                                  />
                                  <FormControlLabel
                                    value="hard-reset"
                                    control={
                                      <Radio
                                        sx={{
                                          color: "green",
                                          "&.Mui-checked": { color: "green" },
                                        }}
                                      />
                                    }
                                    label="Hard Reset"
                                  />
                                </RadioGroup>
                              </Box>
                            )}
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>

                  <>
                    <Card
                      sx={{
                        mt: 4,
                        boxShadow: 1,
                        borderRadius: 1,
                        bgcolor: "grey.100",
                      }}
                    >
                      <CardContent>
                        <ConnectorStatus
                          connector={val?.connector_status.flat()}
                        />
                      </CardContent>
                    </Card>
                  </>

                  <Card
                    sx={{
                      mt: 4,
                      boxShadow: 5,
                      borderRadius: 1,
                      p: 4,
                      overflow: "scroll",
                      maxHeight: "400px",
                      scrollBehavior: "smooth",
                    }}
                  >
                    <CardContent>
                      {actions.map((action) => (
                        <Grid
                          container
                          alignItems="center"
                          key={action}
                          sx={{ mt: 1 }}
                        >
                          <Grid item size={{ xs: 12, md: 6 }}>
                            {action === "Change Availability" &&
                            actionVisibility[action] ? (
                              <FormControl fullWidth>
                                <InputLabel>Choose Configuration</InputLabel>
                                <Select
                                  label="Change Availability"
                                  value={selectedConfiguration}
                                  onChange={(e) =>
                                    setSelectedConfiguration(e.target.value)
                                  }
                                >
                                  {/* Example dropdown options */}
                                  <MenuItem value="Config1">Operative</MenuItem>
                                  <MenuItem value="Config2">
                                    Inoperative
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            ) : (
                              actionVisibility[action] && (
                                <TextField
                                  label={`${action}`}
                                  variant="outlined"
                                  fullWidth
                                />
                              )
                            )}
                          </Grid>

                          <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography
                              variant="body1"
                              sx={{
                                fontFamily: "monospace",
                                cursor: "pointer",
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "end",
                              }}
                              onClick={() => handleActionClick(action)}
                            >
                              {action}
                            </Typography>
                          </Grid>
                        </Grid>
                      ))}
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      mt: 4,
                      boxShadow: 5,
                      borderRadius: 1,
                      p: 1,
                      overflow: "scroll",
                      maxHeight: "400px",
                      scrollBehavior: "smooth",
                    }}
                  >
                    <ChargerLogs dataLogs={val?.charger_logs} />
                  </Card>
                </Card>
              </Grid>
            </Grid>
          );
        })
      ) : (
        <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
          <Typography
            sx={{ display: "flex", justifyContent: "center", padding: "10px" }}
          >
            {" "}
            No data available{" "}
          </Typography>
        </Typography>
      )}

      {allDeviceLogData?.last_page && (
        <TablePagination
          count={allDeviceLogData.last_page}
          onPageChange={handlePageChange}
          page={page}
        />
      )}
    </Container>
  );
}

export default Charger_Dashboard;
