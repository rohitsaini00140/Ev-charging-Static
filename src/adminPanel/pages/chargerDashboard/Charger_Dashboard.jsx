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
import { Box, Grid } from "@mui/system";
import React, { useState } from "react";

import { useGetChargersQuery } from "../../../globalState/charger/chargerApi";
import ChargerdashboardTableHead from "./view/ChargerdashboardTableHead";
import ChargerLogs from "./view/ChargerLogs";

function Charger_Dashboard() {
  const {
    data: chargerData1,
    isSuccess: deviceLogSuccess,
    isLoading,
  } = useGetChargersQuery();

  const allDeviceLogData1 = Array.isArray(chargerData1) ? chargerData1 : [];


  const alldata = deviceLogSuccess && chargerData1.map((itr) => itr.deviceID);



  const [selectedChargerId, setSelectedChargerId] = useState(alldata);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [actionVisibility, setActionVisibility] = useState({}); // Track visibility of each action's TextField

  const [showRadio, setShowRadio] = useState(false); // State to toggle radio button visibility
  const [resetType, setResetType] = useState("");
  const [selectedConfiguration, setSelectedConfiguration] = useState("");
  const [showHeartbeatInput, setShowHeartbeatInput] = useState(false);

  const handleResetClick = () => {
    setShowRadio(true)
  };

  const handleHeartbeatClick = () => {
    setShowHeartbeatInput((prev) => !prev); // Toggle input field visibility
  };

  const handleRadioChange = (event) => {
    // setResetType(event.target.value); // Update the reset type
    const selectedValue = event.target.value;

    if (window.confirm("Are you sure you want to select this option?")) {
      setResetType(selectedValue);
    }
  };

  const chargerData = {
    id: "CHG12345",
    project: "EV Charging Station",
    status: "Active",
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
      setSelectedStatus(null);
      setActionVisibility({}); // Reset all action visibility
    } else {
      setSelectedChargerId(chargerData.id);
      setSelectedStatus(chargerData.status);
    }
  };

  const handleActionClick = (action) => {
    setActionVisibility((prev) => ({
      ...prev,
      [action]: !prev[action],
    }));
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ m: 2 }}>
        OCPP Communication
      </Typography>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 12 }}>
          <Card sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Grid container alignItems="center">
                {/* Left side: Data */}

                {allDeviceLogData1?.map((chargerData1, index) => (
                  <Grid key={index} item xs={12} md={12} >
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
                      {chargerData1.deviceID}
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
                      {chargerData1.project}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{ display: "flex" }}
                    >
                      <Typography
                        sx={{ fontWeight: "bold", marginRight: "5px" }}
                      >
                        Status:
                      </Typography>
                      {chargerData1.status}
                    </Typography>
                  </Grid>
                ))}

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
                            label="Enter Heartbeat Interval"
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      )}

                      {showHeartbeatInput && (
                        <Box sx={{ mt: 2 }}>
                          <TextField
                            label="Enter Heartbeat Devces"
                            variant="outlined"
                            fullWidth
                          />
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
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "monospace", display: "flex" }}
                  >
                    <Typography sx={{ fontWeight: "bold", marginRight: "5px" }}>
                      Connector Status:
                    </Typography>
                    {selectedStatus}
                  </Typography>
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
                            <MenuItem value="Config2">Inoperative</MenuItem>
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
                p: 4,
                overflow: "scroll",
                maxHeight: "400px",
                scrollBehavior: "smooth",
              }}
            >
              <ChargerLogs />
            </Card>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Charger_Dashboard;
