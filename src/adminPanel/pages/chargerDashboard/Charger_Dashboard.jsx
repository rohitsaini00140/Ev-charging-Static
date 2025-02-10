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
import React, { useEffect, useMemo, useState } from "react";

import {
  useGetChargersQuery,
  useGetChargersWithFilterQuery,
  useGetChargersWithPaginationQuery,
} from "../../../globalState/charger/chargerApi";
import ChargerdashboardTableHead from "./view/ChargerdashboardTableHead";
import ChargerLogs from "./view/ChargerLogs";
import ConnectorStatus from "./view/ConnectorStatus";
import TablePagination from "../../component/TablePagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setChargerDashboardPageNo,
  setDeviceID,
} from "../../../globalState/charger/ChargerSlice";
import { inputStyle } from "../../component/inputStyle";
import { useAddDeviceMutation, useGetDeviceByIDQuery, useUpdateDeviceOccpMutation } from "../../../globalState/devices/deviceApis";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { deviceSchema } from "../devices/addOrUpdate/deviceSchema";

function Charger_Dashboard() {
  const dispatch = useDispatch();
  const { page, deviceID } = useSelector((state) => state.charger);

  const { data: chargerData1, isSuccess } = useGetChargersWithPaginationQuery({
    page,
  });

  console.log("API Data:", chargerData1);

  const { data: filteredChargers, isSuccess: filteredSuccess } =
    useGetChargersWithFilterQuery({ deviceID });

  const allDeviceLogData = deviceID ? filteredChargers : chargerData1;
  const successStatus = deviceID ? filteredSuccess : isSuccess;

  const handlePageChange = (event, value) => {
    console.log("Changing Page to:", value);
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







  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });



  const { id } = useParams();
   const navigate = useNavigate();
 
 const [addDevice] = useAddDeviceMutation();
 const [updateDevice] = useUpdateDeviceOccpMutation();

  const defaultValues = useMemo(
    () => ({
      name: "",
      project_id: null,
      cluster_id: null,
      type: "",
      location: "",
      serial_number: "",
      device_manufacturer: "",
      interval: "60",
      status: "",
      max_guns: "",
      max_power: "",
    }),
    []
  );



  const { data, isSuccess:success } = useGetDeviceByIDQuery(id, { skip: !id });
    const deviceForUpdate = success && data;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(deviceSchema),
    defaultValues: defaultValues,
  });
  useEffect(() => {
    if (id && deviceForUpdate) {
      reset({
        interval: String(deviceForUpdate.interval) || "", // Convert to string
  
      });
    //   dispatch(setClutersid(deviceForUpdate.cluster_id));
    // } else {
      reset(defaultValues);
    }
  }, [id, deviceForUpdate, reset, defaultValues]);


  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formattedData = {
        ...data,
        interval: String(data.interval), // Ensure it's a string
      };

      if (id) {
        await updateDevice({ id, updatedDeviceData: formattedData }).unwrap();
        navigate("/admin/device/view", {
          state: {
            message: "Device successfully updated!",
            severity: "success",
          },
        });
      } else {
        await addDevice(formattedData).unwrap();
        reset(defaultValues);
        navigate("/admin/device/view", {
          state: { message: "Device successfully added!", severity: "success" },
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error while submitting.",
        severity: "error",
      });
      if (error.data && error.data.errors) {
        Object.entries(error.data.errors).forEach(([key, message]) => {
          setError(key, { type: "server", message: message[0] });
        });
      }
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  };

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
                        {/* <Typography
                          variant="body1"
                          color="textSecondary"
                          sx={{ display: "flex" }}
                        >
                          <Typography
                            sx={{ fontWeight: "bold", marginRight: "5px" }}
                          >
                            Interval :
                          </Typography>
                          {val.interval}
                        </Typography> */}

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
                          Online
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
                                  label="Heartbeat Interval (In-Seconds) "
                                  {...register("interval", { required: true })}
                                  value={watch("interval") || ""}
                                  onChange={(e) =>
                                    setValue(
                                      "interval",
                                      String(e.target.value),
                                      {
                                        shouldValidate: true,
                                      }
                                    )
                                  }
                                  sx={inputStyle}
                                  fullWidth
                                />

                                {errors.interval && (
                                  <Typography
                                    fontSize={"13px"}
                                    color={"#ff6384"}
                                    mt={".5rem"}
                                  >
                                    *{errors.interval.message}
                                  </Typography>
                                )}
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
                      p: 4,
                      overflow: "scroll",
                      maxHeight: "400px",
                      scrollBehavior: "smooth",
                    }}
                  >
                    <ChargerLogs dataLogs={val?.charger_logs?.data?.flat()} />
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
