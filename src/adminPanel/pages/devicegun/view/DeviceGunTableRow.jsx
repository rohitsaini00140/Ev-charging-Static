import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
import Label from "../../../component/lable/Lable";
import Action from "../../../component/Action";
import { useRestoreDeletedDeviceGunMutation, useSoftDeleteDeviceGunMutation } from "../../../../globalState/devicegun/devicegunApi";

function DeviceGunTableRow({ allUserData, currentpage }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const [softDeleteCpo] = useSoftDeleteDeviceGunMutation();
  const [restoreDeletedUser] = useRestoreDeletedDeviceGunMutation();

  function onSoftDelete(data) {
    let dataId = data.id;
    softDeleteCpo({ id: dataId, softDeletedDeviceGunData: data });
  }

  function onRestoreData(id) {
    restoreDeletedUser(id);
  }

  return (
    <>
      {allUserData.length > 0 &&
        allUserData.map((data, i) => (
          <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.id}>
            <StyledTableCell color={"#222245"}>
              {" "}
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                currentpage - 1 + (i + 1)
              )}
            </StyledTableCell>
            <StyledTableCell color={"#222245"}>
              {" "}
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                data.device_name
              )}
            </StyledTableCell>
            <StyledTableCell color={"#222245"}>
              {" "}
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                data.gun_name
              )}
            </StyledTableCell>
            <StyledTableCell color={"#222245"}>
              {" "}
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                data.gun_slot
              )}
            </StyledTableCell>

            <StyledTableCell color={"#222245"}>
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : data.status ? (
                data.status
              ) : (
                "Unknown"
              )}
            </StyledTableCell>

            {/* <StyledTableCell>
              <Label color={data.deleted_at === null ? "success" : "error"}>
                {loading ? (
                  <Skeleton
                    sx={{
                      bgcolor: data.deleted_at === null ? "success" : "error",
                    }}
                    animation="pulse"
                  />
                ) : data.deleted_at === null ? (
                  "Active"
                ) : (
                  "Inactive"
                )}
              </Label>
            </StyledTableCell> */}
            <StyledTableCell>
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                <Action
                  data={data}
                  activeOrInactive={data.deleted_at}
                  pathToNavigate={"/admin/devicegun/add"}
                  onSoftDelete={onSoftDelete}
                  onRestoreData={onRestoreData}
                />
              )}
            </StyledTableCell>
          </StyledTableRow>
        ))}
    </>
  );
}

export default DeviceGunTableRow;
