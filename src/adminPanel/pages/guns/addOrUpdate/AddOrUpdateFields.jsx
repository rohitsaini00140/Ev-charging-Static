import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, TextareaAutosize } from "@mui/material";
import { Icon } from "@iconify/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import { useState, useMemo, useEffect } from "react";

import FastRewindIcon from "@mui/icons-material/FastRewind";

import { useParams, useNavigate, Link } from "react-router-dom";
import { gunsSchema } from "./gunSchema";
import { inputStyle } from "../../../component/inputStyle";
import { useForm } from "react-hook-form";
import Alertbar from "../../../component/Alertbar";
import Selector from "../../../component/selector/Selector";
import {
  useCreategunsMutation,
  useGetGunByIdQuery,
  useUpdateGunMutation,
} from "../../../../globalState/gunType/gunApi";

function AddOrUpdateGunFields() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess } = useGetGunByIdQuery(id, { skip: !id });


  const gunForUpdate = isSuccess && data;

  const [creategunTypes] = useCreategunsMutation();
  const [updateGun] = useUpdateGunMutation();


  const defaultValues = useMemo(
    () => ({
      name: "",
      max_power: "",
      voltage: "",
      current_type: "",
      description: "",
    }),
    []
  );

  const {
    register,
    handleSubmit,
    watch,
    setError,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(gunsSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (id && gunForUpdate) {
      reset({
        name:gunForUpdate.name || "",
        max_power:String(gunForUpdate.max_power) || "",
        voltage:String(gunForUpdate.voltage) || "",
        current_type:gunForUpdate.current_type || "",
        description:gunForUpdate.description || "",
      });
    } else {
      reset(defaultValues);
    }
  }, [id, gunForUpdate, reset, defaultValues]);

  const onSubmit = async (data) => {
    try {
      const requestData = {
        ...data,
        description: data.description?.trim() || "",
      };
  
      if (id) {
        await updateGun({ id, updatedUserData: requestData }).unwrap();
        navigate("/admin/guns/view", {
          state: { message: "Gun successfully updated!", severity: "success" },
        });
      } else {
        await creategunTypes(requestData).unwrap();
        reset(defaultValues);
        navigate("/admin/guns/view", {
          state: { message: "Gun successfully added!", severity: "success" },
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
            spacing={{ xs: 3, sm: 2, md: 6 }}
          >
            <Stack sx={{ position: "relative" }} width={"100%"}>
              <TextField
                label=" Gun Name"
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
            <Stack sx={{ position: "relative" }} width={"100%"}>
              <TextField
                label="Max. Power (In-Kilowatts)"
                {...register("max_power", { required: true })}
                value={watch("max_power") || ""}
                sx={inputStyle}
                fullWidth
              />
              {errors.max_power && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.max_power.message}
                </Typography>
              )}
            </Stack>

            <Stack sx={{ position: "relative" }} width={"100%"}>
              <TextField
                label="Voltage"
                {...register("voltage", { required: true })}
                value={watch("voltage") || ""}
                sx={inputStyle}
                fullWidth
              />
              {errors.voltage && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.voltage.message}
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
                value={watch("current_type")}
                onChange={(e) =>
                  setValue("current_type", e.target.value, {
                    shouldValidate: true,
                  })
                }
                placeholder="Current Type"
                selectType="single"
                options={["AC", "DC"]}
              />
              {errors.current_type && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.current_type.message}
                </Typography>
              )}
            </Stack>

            <Stack sx={{ position: "relative" }} width={"100%"}>
              <TextareaAutosize
                placeholder="Description"
                {...register("description", { required: true })}
                value={watch("description") || ""}
                minRows={2} // Min height reduce karne ke liye
                maxRows={3} // Max height bhi limit kar di
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "6px",
                  border: "1px solid black",
                  outline: "none",
                  resize: "none",
                  lineHeight: "20px", // Text spacing control karne ke liye
                }}
              />

              {errors.description && (
                <Typography fontSize={"13px"} color={"#ff6384"} mt={".5rem"}>
                  *{errors.description.message}
                </Typography>
              )}
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
             <Link to={"/admin/guns/view"}>
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
              type="submit"
            >
              <Icon
                icon="mdi:printer"
                style={{
                  fontSize: "1.2rem",
                  color: "white",
                  marginRight: ".3rem",
                }}
              />
              Save
            </Button>
          </Stack>
        </Stack>
      </form>
      <Alertbar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
        position={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}

export default AddOrUpdateGunFields;
