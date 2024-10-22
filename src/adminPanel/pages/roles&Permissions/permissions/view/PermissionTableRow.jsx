import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../../component/tableStyle";
import Label from "../../../../component/lable/Lable";
import Action from "../../../../component/Action";
import { permissionData } from "./permissionData";
import { Skeleton } from '@mui/material';
import { useState,useEffect } from "react";
// ----------------------------------------------------------------------

function PermissionTableRow() {
 const [loading, setLoading] = useState(true);

   
 useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
}, []);


  return (
    <>
      {permissionData.length > 0 &&
        permissionData.map((data) => (
          <StyledTableRow hover tabIndex={-1} role="checkbox" key={data.ID}>
            <StyledTableCell padding="checkbox">
              <Checkbox
                disableFocusRipple
                // onChange={(e) => onHandleChange(e.target.checked, data["ID"])}
                // checked={selectedCategoryId.includes(data["ID"])}
              />
            </StyledTableCell>
            <StyledTableCell>
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                data.Name
              )}
            </StyledTableCell>

            <StyledTableCell>
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                data.description
              )}
            </StyledTableCell>
            
            <StyledTableCell>
            {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                <Label color={data.Status === "Inactive" ? "error" : "success"}>
                {data.Status}
              </Label>
              )}
            </StyledTableCell>
            <StyledTableCell>
            {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                <Action
                data={data}
                // pathToNavigate={"/category/update"}
              />
              )}

            </StyledTableCell>
          </StyledTableRow>
        ))}
    </>
  );
}

export default PermissionTableRow;
