import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { devicegunSchema } from "./devicegunSchema";
import SearchableDropdown from "../../../component/searchableDropdown/SearchableDropdown";
import { useGetDeviceByIDQuery } from "../../../../globalState/devices/deviceApis";
import { useDispatch } from "react-redux";
import DeviceGunView from "../view/DeviceGunView";
import { useGetAllGuntypeQuery } from "../../../../globalState/gunType/gunApi";
import {
  useCreatedevicegunsMutation,
  useGetAllDeviceGunQuery,
  useGetAllDeviceWithmaxgunQuery,
  useGetDeviceGunByIDQuery,
  useUpdateDeviceGunMutation,
} from "../../../../globalState/devicegun/devicegunApi";
import Selector from "../../../component/selector/Selector";

function AddOrUpdateDeviceGunFields() {
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { id } = useParams();
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const { data, isSuccess } = useGetDeviceGunByIDQuery(id, { skip: !id });

  const cpoForUpdate = isSuccess && data;

  const [createdevicegun] = useCreatedevicegunsMutation();
  const [updateCpo] = useUpdateDeviceGunMutation();

  const defaultValues = useMemo(
    () => ({
      device_id: null,
      gun_type_id: "",
      gun_slot: "",
    }),
    []
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(devicegunSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (id && cpoForUpdate) {
      reset({
        device_id: cpoForUpdate.device_id || "",
        gun_type_id: cpoForUpdate.gun_type_id || "",
        gun_slot: cpoForUpdate.gun_slot|| "",
      });
    } else {
      reset(defaultValues);
    }
  }, [id, cpoForUpdate, reset, defaultValues]);

  const { data: DevicesData, isSuccess: successdevice } =
    useGetAllDeviceWithmaxgunQuery();

  const allclusters = successdevice && DevicesData.devices;

  const { data: guntypesData, isSuccess: successguntypes } =
    useGetAllGuntypeQuery();

  const gunTypesData = successguntypes && guntypesData.devices;

  const { data: devicegunData, isSuccess: successdevicegundata } =
    useGetAllDeviceGunQuery();

  const devicegun = successdevicegundata && devicegunData.devices;

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (id) {
        await updateCpo({ id, updatedCpoData: data }).unwrap();

        navigate("/admin/devicegun/view", {
          state: { message: "User successfully updated!", severity: "success" },
        });
      } else {
        await createdevicegun(data).unwrap();

        reset(defaultValues);

        navigate("/admin/devicegun/view", {
          state: { message: "User successfully added!", severity: "success" },
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
      <form fullWidth onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Stack width={"100%"}>
              <SearchableDropdown
                options={allclusters.length > 0 ? allclusters : []}
                placeholder="Select Device"
                value={watch("device_id")}
                onChange={(newValue) => {
                  setValue("device_id", newValue, { shouldValidate: true });
                }}
              />
              {errors.name && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.name.message}
                </Typography>
              )}
            </Stack>
            <Stack width={"100%"}>
              <SearchableDropdown
                options={gunTypesData.length > 0 ? gunTypesData : []}
                placeholder="Select Gun Name"
                value={watch("gun_type_id")}
                onChange={(newValue) => {
                  setValue("gun_type_id", newValue, { shouldValidate: true });
                }}
              />
              {errors.gun_type_id && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.gun_type_id.message}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Stack width={"100%"}>
              <Autocomplete
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                options={
                  Array.isArray(devicegun)
                    ? devicegun
                        .filter(
                          (device) =>
                            Number(device.id) === Number(watch("device_id"))
                        )
                        .flatMap((device) =>
                          Array.isArray(device.gun_array)
                            ? device.gun_array.map((gun) => ({
                                label: `Gun ${gun}`,
                                value: Number(gun), // 🔥 Convert to string
                              }))
                            : []
                        )
                    : []
                }
                getOptionLabel={(option) => (option ? option.label : "")}
                value={
                  Array.isArray(devicegun)
                    ? devicegun
                        .filter(
                          (device) =>
                            Number(device.id) === Number(watch("device_id"))
                        )
                        .flatMap((device) =>
                          Array.isArray(device.gun_array)
                            ? device.gun_array.map((gun) => ({
                                label: `Gun ${gun}`,
                                value: Number(gun), // 🔥 Convert to string
                              }))
                            : []
                        )
                        .find(
                          (option) => option.value === Number(watch("gun_slot"))
                        ) || null
                    : null
                }
                onChange={(event, newValue) => {
                  setValue("gun_slot", newValue ? Number(newValue.value) : "", {
                    shouldValidate: true,
                  });
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select Gun Number" />
                )}
              />

              {errors.gun_slot && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.gun_slot.message}
                </Typography>
              )}
            </Stack>

            <Stack width={"100%"}></Stack>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ display: "flex", justifyContent: "end" }}
          >
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
          <DeviceGunView />
        </Stack>
      </form>
    </>
  );
}

export default AddOrUpdateDeviceGunFields;
