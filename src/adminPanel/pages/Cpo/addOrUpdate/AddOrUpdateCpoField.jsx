import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import { inputStyle } from "../../../component/inputStyle";
import { useMemo, useState, useEffect } from "react";
import Alertbar from "../../../component/Alertbar";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { cpoSchema } from "./cpoSchema";
import { useCreateCpoMutation, useGetCpoByIdQuery, useUpdateCpoMutation } from "../../../../globalState/Cpos/cpoApi";

const role = JSON.parse(sessionStorage.getItem("role"));

function AddOrUpdateCpoFields() {

  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { id } = useParams();
  let navigate = useNavigate();

  const { data, isSuccess } = useGetCpoByIdQuery(id, { skip: !id });

  const cpoForUpdate = isSuccess && data;



  const [createCpo] = useCreateCpoMutation();
  const [updateCpo] = useUpdateCpoMutation();

  const defaultValues = useMemo(
    () => ({
      name: "",
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
    resolver: zodResolver(cpoSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (id && cpoForUpdate) {
      reset({
        name: cpoForUpdate.name || "",
        email: cpoForUpdate.email || "",
        phone: cpoForUpdate.phone || "",
      });
    } else {
      reset(defaultValues);
    }
  }, [id, cpoForUpdate, reset, defaultValues]);

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
        await createCpo(data).unwrap();

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
              <TextField
                label="Name"
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
            <Stack width={"100%"}>
              <TextField
                label="Email Address"
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
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 6 }}
          >
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
          <Stack direction={"row"} sx={{display:"flex",justifyContent:'space-between'}}>
            <Link to={"/admin/cpos/view"}>
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
      />
    </>
  );
}

export default AddOrUpdateCpoFields;
