import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  useGetCpoByIdQuery,
  useUpdateCpoMutation,
} from "../../../../globalState/Cpos/cpoApi";
import { devicegunSchema } from "./devicegunSchema";
import SearchableDropdown from "../../../component/searchableDropdown/SearchableDropdown";
import { useGetAllDeviceQuery, useGetDeviceByIDQuery } from "../../../../globalState/devices/deviceApis";
import { useDispatch } from "react-redux";
import DeviceGunView from "../view/DeviceGunView";
import { useGetAllGuntypeQuery } from "../../../../globalState/gunType/gunApi";
import { useCreatedevicegunsMutation, useGetAllDeviceGunQuery } from "../../../../globalState/devicegun/devicegunApi";

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

  const { data, isSuccess } = useGetDeviceByIDQuery(id, { skip: !id });

  const cpoForUpdate = isSuccess && data;

  const [createdevicegun] = useCreatedevicegunsMutation();
  const [updateCpo] = useUpdateCpoMutation();

  const defaultValues = useMemo(
    () => ({
      device_id: null,
      email: "",
      phone: "",
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
        email: cpoForUpdate.email || "",
        phone: cpoForUpdate.phone || "",
      });
    } else {
      reset(defaultValues);
    }
  }, [id, cpoForUpdate, reset, defaultValues]);

  const { data: DevicesData, isSuccess: successdevice } =
    useGetAllDeviceQuery();

  const allclusters = successdevice && DevicesData.devices;

  const { data: guntypesData, isSuccess: successguntypes } =
  useGetAllGuntypeQuery();
  
  const  gunTypesData = successguntypes && guntypesData.devices

  const {data: devicegunData, isSuccess: successdevicegundata}= useGetAllDeviceGunQuery();

  const devicegun = successdevicegundata && devicegunData.devices;

  console.log(devicegun,"dddddddddddd")

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      if (id) {
        await updateCpo({ id, updatedCpoData: data }).unwrap();

        navigate("/admin/cpos/view", {
          state: { message: "User successfully updated!", severity: "success" },
        });
      } else {
        await createdevicegun(data).unwrap();

        reset(defaultValues);

        navigate("/admin/cpos/view", {
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
                value={watch("name") || null}
                onChange={(newValue) =>
                  setValue("project_id", newValue, { shouldValidate: true })
                }
              />
              {errors.email && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.email.message}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Stack width={"100%"}>
              <SearchableDropdown
                options={devicegun.length > 0 ? devicegun : []}
                placeholder="Select Gun Number"
                value={watch("cluster_id")}
                  onChange={(newValue) => {
                    setValue("cluster_id", newValue, { shouldValidate: true });
                  }}
              />
              {errors.phone && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.phone.message}
                </Typography>
              )}
            </Stack>

            <Stack width={"100%"}>
            
            </Stack>
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
