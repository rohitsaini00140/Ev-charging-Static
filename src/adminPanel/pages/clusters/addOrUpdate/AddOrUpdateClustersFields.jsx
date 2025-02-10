import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { clusterSchema } from "./clusterSchema";
import { Button, Typography } from "@mui/material";
import {
  useAddClusterMutation,
  useGetClusterByIdQuery,
  useUpdateClusterMutation,
} from "../../../../globalState/cluster/clusterApis";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import Alertbar from "../../../component/Alertbar";
import { inputStyle } from "../../../component/inputStyle";
import { useGetGeocodeQuery } from "../../../../globalState/googleMap/googleMapApis";
import { setAddress } from "../../../../globalState/googleMap/googleMapSlices";
import SearchableDropdown from "../../../component/searchableDropdown/SearchableDropdown";
import {
  useGetCityQuery,
  useGetCountryQuery,
  useGetStateQuery,
} from "../../../../globalState/address/addressApi";
import {
  setCountryId,
  setStateId,
} from "../../../../globalState/address/addressSlices";
// import { error_style } from '../../../component/error_style';
import LocationDropdown from "../../../component/locationDropdown/LocationDropdown";
import FastRewindIcon from '@mui/icons-material/FastRewind';


function AddOrUpdateClustersFields() {
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const { id } = useParams();

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const { data, isSuccess } = useGetClusterByIdQuery(id, { skip: !id });
  const { address } = useSelector((state) => state.googleMap);

  const { countryId, stateId } = useSelector((state) => state.address);

  const { data: geoData, isSuccess: geoIsSuccess } = useGetGeocodeQuery(
    { address },
    { skip: !address }
  );
  const { data: allCountry, isSuccess: countrySuccess } = useGetCountryQuery();
  const { data: allState, isSuccess: stateSuccess } = useGetStateQuery(
    countryId,
    { skip: !countryId }
  );
  const { data: allCity, isSuccess: citySuccess } = useGetCityQuery(stateId, {
    skip: !stateId,
  });

  console.log(countrySuccess && allCountry);

  const clusterForUpdate = isSuccess && data;

  const country = countrySuccess && allCountry?.countries;

  const states = stateSuccess && allState?.states;

  const city = citySuccess && allCity?.cities;

  const [addCluster] = useAddClusterMutation();

  const [updateCluster] = useUpdateClusterMutation();

  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      country_id: null,
      state_id: null,
      city_id: null,
      location: "",
    }),
    []
  );
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(clusterSchema),
    defaultValues: defaultValues,
  });
  useEffect(() => {
    if (id && clusterForUpdate) {
      reset({
        name: clusterForUpdate.name || "",
        email: clusterForUpdate.email || "",
        phone: clusterForUpdate.phone || "",
        country_id: clusterForUpdate.country_id || null,
        state_id: clusterForUpdate.state_id || null,
        city_id: clusterForUpdate.city_id || null,
        location: clusterForUpdate.location || "",
      });
      dispatch(setCountryId(clusterForUpdate.country_id));
      dispatch(setStateId(clusterForUpdate.state_id));
    } else {
      reset(defaultValues);
    }
  }, [id, clusterForUpdate, reset, defaultValues]);

  const onSubmit = async (data) => {
    setLoading(true);
  
    try {
         // const { lat, lng } = address;
      // data.latitude = lat;
      // data.longitude = lng;
      if (id) {
        await updateCluster({ id, updatedClusterData: data }).unwrap();
  
        navigate("/admin/cluster/view", {
          state: {
            message: "Cluster successfully updated!",
            severity: "success",
          },
        });
      } else {
        await addCluster(data).unwrap();
        reset(defaultValues);
        navigate("/admin/cluster/view", {
          state: {
            message: "Cluster successfully added!",
            severity: "success",
          },
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
        <Stack spacing={{ xs: 4, sm: 4, md: 4 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 4, md: 6 }}
          >
            <Stack width={"100%"} sx={{ position: "relative" }}>
              <TextField
                label="Cluster Name"
                {...register("name", { required: true })}
                value={watch("name") || ""}
                sx={inputStyle}
                fullWidth
              />
              {errors.name && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.name.message}
                </Typography>
              )}
            </Stack>
            <Stack sx={{ position: "relative" }} width={"100%"}>
              <TextField
                label="Cluster Email"
                {...register("email", { required: true })}
                value={watch("email") || ""}
                sx={inputStyle}
                fullWidth
              />
              {errors.email && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.email.message}
                </Typography>
              )}
            </Stack>

            <Stack width={"100%"}>
              <TextField
                label="Mobile No."
                {...register("phone", { required: true })}
                value={watch("phone") || ""}
                sx={inputStyle}
                fullWidth
              />
              {errors.phone && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.phone.message}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 4, md: 6 }}
          >
            <Stack width={"100%"} sx={{ position: "relative" }}>
              <SearchableDropdown
                options={country.length > 0 ? country : []}
                placeholder="Select Country"
                value={watch("country_id")}
                onChange={(newValue) => {
                  setValue("country_id", newValue, { shouldValidate: true });
                  dispatch(setCountryId(newValue));
                  if (!newValue) {
                    setValue("state_id", null, { shouldValidate: true });
                    dispatch(setStateId(null));
                    setValue("city_id", null, { shouldValidate: true });
                  }
                }}
              />
              {errors.country_id && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.country_id.message}
                </Typography>
              )}
            </Stack>
            <Stack width={"100%"} sx={{ position: "relative" }}>
              <SearchableDropdown
                options={states.length > 0 ? states : []}
                placeholder="Select State"
                value={watch("state_id")}
                onChange={(newValue) => {
                  setValue("state_id", newValue, { shouldValidate: true });
                  dispatch(setStateId(newValue));

                  if (!newValue) {
                    setValue("city_id", null, { shouldValidate: true });
                  }
                }}
              />
              {errors.state_id && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.state_id.message}
                </Typography>
              )}
            </Stack>
            <Stack width={"100%"} sx={{ position: "relative" }}>
              <SearchableDropdown
                options={city.length > 0 ? city : []}
                placeholder="Select City"
                value={watch("city_id")}
                onChange={(newValue) =>
                  setValue("city_id", newValue, { shouldValidate: true })
                }
              />
              {errors.city_id && (
                <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                  *{errors.city_id.message}
                </Typography>
              )}
            </Stack>
          </Stack>

          <Stack width={"100%"} sx={{ position: "relative" }}>
            <TextField
              label="Cluster location"
              value={watch("location")}
              onChange={(event) => setValue("location", event.target.value, { shouldValidate: true })}
            />
            {errors.location && (
              <Typography color={"#ff6384"} fontSize={"13px"} mt={".5rem"}>
                *{errors.location.message}
              </Typography>
            )}
          </Stack>

          <Stack direction={"row"} sx={{display:'flex',justifyContent:'space-between'}}>
            <Link to={"/admin/cluster/view"}>
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
        sx={{ mt: "4rem" }}
      />
    </>
  );
}

export default AddOrUpdateClustersFields;
