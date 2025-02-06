import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Selector from "../../../component/selector/Selector";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { deviceSchema } from "./deviceSchema";
import { Button, Typography } from "@mui/material";
import { inputStyle } from "../../../component/inputStyle";
import { useMemo } from "react";
import { useGetProjectsByClusterIdQuery } from "../../../../globalState/projects/projectsApis";
import { useGetAllClustersQuery } from "../../../../globalState/cluster/clusterApis";
import SearchableDropdown from "../../../component/searchableDropdown/SearchableDropdown";
import Alertbar from "../../../component/Alertbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddDeviceMutation,
  useGetDeviceByIDQuery,
  useUpdateDeviceMutation,
} from "../../../../globalState/devices/deviceApis";
import { setClutersid } from "../../../../globalState/devices/deviceSlices";
import LocationDropdown from "../../../component/locationDropdown/LocationDropdown";
import FastRewindIcon from "@mui/icons-material/FastRewind";

const role = JSON.parse(sessionStorage.getItem("role"));

function AddOrUpdateDeviceFields() {
  const { logInRole } = useSelector((state) => state.role);

  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  let dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  const { cluters_id } = useSelector((state) => state.device);

  const { data: projectData, isSuccess: successProject } =
    useGetProjectsByClusterIdQuery(cluters_id, {
      skip:
        cluters_id === null || cluters_id === undefined || cluters_id === "",
    });
  const { data: clustersData, isSuccess: successclusters } =
    useGetAllClustersQuery();

  const { data, isSuccess } = useGetDeviceByIDQuery(id, { skip: !id });
  const deviceForUpdate = isSuccess && data;

  const allProjects = successProject && projectData?.projects;

  const allclusters = successclusters && clustersData?.clusters;

  console.log(allclusters, "kya aa raha ha");

  const [addDevice] = useAddDeviceMutation();
  const [updateDevice] = useUpdateDeviceMutation();

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
      gunnumber: "",
      guntype: "",
    }),
    []
  );

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
        name: deviceForUpdate.name || "",
        cluster_id:
          deviceForUpdate.cluster_id !== undefined &&
          deviceForUpdate.cluster_id !== null &&
          deviceForUpdate.cluster_id,
        project_id: deviceForUpdate.project_id || null,
        type: deviceForUpdate.type || "",
        location: deviceForUpdate.location || "",
        serial_number: deviceForUpdate.serial_number || "",
        device_manufacturer: deviceForUpdate.device_manufacturer || "",
        interval: String(deviceForUpdate.interval) || "", // Convert to string
        gunnumber: deviceForUpdate.gunnumber || "",
        status: deviceForUpdate.status || "",
        guntype: deviceForUpdate.guntype || "",
      });
      dispatch(setClutersid(deviceForUpdate.cluster_id));
    } else {
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
      <form
        style={{ position: "relative" }}
        fullWidth
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={{ xs: 3, sm: 2, md: 4 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 2, md: 6 }}
          >
            {logInRole?.user?.role?.name === "Superadmin" && (
              <Stack width={"100%"}>
                <SearchableDropdown
                  options={allclusters.length > 0 ? allclusters : []}
                  placeholder="Select Cluster"
                  value={watch("cluster_id")}
                  onChange={(newValue) => {
                    setValue("cluster_id", newValue, { shouldValidate: true });
                    dispatch(setClutersid(newValue));
                    if (newValue === null || newValue === undefined) {
                      setValue("project_id", null, { shouldValidate: true });
                    }
                  }}
                />
                {errors.cluster_id && (
                  <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                    *{errors.cluster_id.message}
                  </Typography>
                )}
              </Stack>
            )}
            <Stack width={"100%"}>
              <SearchableDropdown
                options={allProjects.length > 0 ? allProjects : []}
                placeholder="Select Project"
                value={watch("project_id") || null}
                onChange={(newValue) =>
                  setValue("project_id", newValue, { shouldValidate: true })
                }
              />
              {errors.project_id && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.project_id.message}
                </Typography>
              )}
            </Stack>

            <Stack width={"100%"}>
              <TextField
                label="Device name"
                {...register("name", { required: true })}
                value={watch("name") || ""}
                sx={inputStyle}
                fullWidth
              />
              {errors.name && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.name.message}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 2, md: 6 }}
          >
            <Stack width={"100%"}>
              <Selector
                value={watch("maxguns")}
                onChange={(e) =>
                  setValue("maxguns", e.target.value, { shouldValidate: true })
                }
                placeholder="Max Gun"
                selectType="single"
                options={["1", "2", "3"]}
              />
              {errors.maxguns && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.maxguns.message}
                </Typography>
              )}
            </Stack>

            <Stack width={"100%"}>
              <Selector
                value={watch("type")}
                onChange={(e) =>
                  setValue("type", e.target.value, { shouldValidate: true })
                }
                placeholder="Select Device Type"
                selectType="single"
                options={["EV charger", "PQ meter", "Sensor"]}
              />
              {errors.type && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.type.message}
                </Typography>
              )}
            </Stack>
            <Stack sx={{ position: "relative" }} width={"100%"}>
              <TextField
                label="Device Manufacturer"
                {...register("device_manufacturer", { required: true })}
                value={watch("device_manufacturer") || ""}
                sx={inputStyle}
                fullWidth
              />
              {errors.device_manufacturer && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.device_manufacturer.message}
                </Typography>
              )}
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 2, md: 6 }}
          >
            <Stack width={"100%"}>
              <TextField
                label="Device Serial No."
                {...register("serial_number", { required: true })}
                value={watch("serial_number") || ""}
                sx={inputStyle}
                fullWidth
                InputProps={{
                  readOnly: !!id,
                }}
              />
              {errors.serial_number && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.serial_number.message}
                </Typography>
              )}
            </Stack>

            <Stack sx={{ position: "relative" }} width={"100%"}>
              <LocationDropdown
                label="Device location"
                value={watch("location")}
                onChange={(newValue) =>
                  setValue("location", newValue, { shouldValidate: true })
                }
              />
              {errors.location && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.location.message}
                </Typography>
              )}
            </Stack>

            <Stack width={"100%"}>
              <TextField
                label="Heartbeat Interval (In-Seconds) "
                {...register("interval", { required: true })}
                value={watch("interval") || ""}
                onChange={(e) =>
                  setValue("interval", String(e.target.value), {
                    shouldValidate: true,
                  })
                }
                sx={inputStyle}
                fullWidth
              />

              {errors.interval && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.interval.message}
                </Typography>
              )}
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to={"/admin/device/view"}>
              <Button
                sx={{
                  color: "white",
                  borderRadius: "5px",
                  bgcolor: "#0ab39c",
                  width: "5rem",
                  borderColor: "#0ab39c",
                  padding: "10px 15px",
                  height: "2.5rem",
                  BoxShadow: "none",
                  "&:hover": {
                    bgcolor: "#0ab39c",
                  },
                }}
              >
                <FastRewindIcon />
                Back
              </Button>
            </Link>

            <LoadingButton
              loading={loading}
              type="submit"
              sx={{
                bgcolor: "#0ab39c",
                color: "white",
                borderColor: "#0ab39c",
                padding: "10px 15px",
                "& .MuiLoadingButton-loadingIndicator": {
                  color: "white",
                },
                "&:hover": {
                  bgcolor: "#089d88",
                  color: "white",
                },
              }}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              Save
            </LoadingButton>
          </Stack>
        </Stack>
      </form>
      <Alertbar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
        position={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: "6rem" }}
      />
    </>
  );
}

export default AddOrUpdateDeviceFields;
