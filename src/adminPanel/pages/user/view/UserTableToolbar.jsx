import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Iconify from "../../../component/Iconify";
import MenuList from "../../../component/MenuList";
import SearchInput from "../../../component/SearchInput";
import ExcelExport from "../../../component/ExcelExport";
import PdfExport from "../../../component/PdfExport";
// import { fieldsToDownload, fieldMapping, filter } from './headLabel';
import { Stack } from "@mui/material";
import Selector from "../../../component/selector/Selector";
import SearchableDropdown from "../../../component/searchableDropdown/SearchableDropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserListPageNo,
  setUserName,
  setUserStatus,
} from "../../../../globalState/user/userSlice";
import {
  useGetAllRolesQuery,
  useGetRolesQuery,
} from "../../../../globalState/roles/rolesApi";
import { setRole } from "../../../../globalState/roles/rolesSlices";
import { useGetAllClustersQuery } from "../../../../globalState/cluster/clusterApis";
import { setClusterName } from "../../../../globalState/cluster/clusterSlices";

// ----------------------------------------------------------------------

function UserTableToolbar() {
  const { logInRole } = useSelector((state) => state.role);

  const dispatch = useDispatch();

  const { userName, status } = useSelector((state) => state.user);

  const { role } = useSelector((state) => state.role);

  const { clusterName } = useSelector((state) => state.cluster);

  const { data: rolesData, isSuccess: rolesSuccess } = useGetRolesQuery();

  const { data: clusterData, isSuccess: clusterSuccess } =
    useGetAllClustersQuery();

  const allCluster = clusterSuccess && clusterData?.clusters;

  const allRoleData = rolesSuccess && rolesData?.roles;

  function handleSelect(option, type) {
    switch (type) {
      case "user":
        if (option) {
          dispatch(setUserName(option));
        } else {
          dispatch(setUserName(""));
        }
        break;
      case "role":
        if (option) {
          dispatch(setRole(option));
        } else {
          dispatch(setRole(""));
        }
        break;
      case "cluster":
        if (option) {
          dispatch(setClusterName(option));
        } else {
          dispatch(setClusterName(""));
        }
        break;
      case "status":
        if (option) {
          console.log(option);
          dispatch(setUserStatus(option));
        } else {
          dispatch(setUserStatus(""));
        }
        break;
      default:
        break;
    }
    dispatch(setUserListPageNo(1));
  }

  return (
    <Toolbar
      sx={{
        // height: 96,
        padding: "1.2rem 0rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
       
      }}
    >
      {
      
        <>
          {/* // ) */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 2, md: 4 }}
            width={"100%"}
          >
            <Stack width={"100%"}>
              <SearchInput
                placeholder="Search User"
                width={"100%"}
                sx={{ color: "white", background: "#fffff" }}
                onChange={(e) => handleSelect(e.target.value, "user")}
                value={userName}
              />
            </Stack>
          
            <Stack width={"100%"}>
              <SearchableDropdown
                options={allRoleData.length > 0 ? allRoleData : []}
                placeholder="Select Role"
                value={role}
                onChange={(value) => handleSelect(value, "role")}
              />
            </Stack>
            <Stack width={"100%"}>
              <Selector
                value={status}
                onChange={(e) => handleSelect(e.target.value, "status")}
                placeholder="Select Status"
                selectType="single"
                options={["Active", "Inactive"]}
              />
            </Stack>
          </Stack>
        </>
      }
      {
        // selectedCategoryId.length > 0 ? (
        //     <Tooltip title="Delete">
        //         <IconButton onClick={() => handleOnClick(selectedCategoryId)}>
        //             <Iconify icon="eva:trash-2-fill" />
        //         </IconButton>
        //     </Tooltip>
        // ) : (
        // <Stack direction={'row'} alignItems={"center"} spacing={2} width={"100%"}>
        //     <PdfExport
        //     // data={allCategories.length > 0 && allCategories}
        //     // fileName="Categories.pdf"
        //     // fields={fieldsToDownload}
        //     // fieldMapping={fieldMapping}
        //     />
        //     <ExcelExport
        //     // data={allCategories.length > 0 && allCategories}
        //     // fileName="Categories"
        //     // fields={fieldsToDownload}
        //     // fieldMapping={fieldMapping}
        //     />
        //     {/* <MenuList heading={<Iconify icon="ic:round-filter-list" />}
        //     // values={filter}
        //     // onChange={handleOrderChange}
        //     /> */}
        // </Stack>
        // )
      }
    </Toolbar>
  );
}

export default UserTableToolbar;
