import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import SearchInput from "../../../component/SearchInput";
import { Stack } from "@mui/material";
import Selector from "../../../component/selector/Selector";
import { useSelector, useDispatch } from "react-redux";
import { setCpoListPageNo, setCpoName, setCpoStatus } from "../../../../globalState/Cpos/cpoSlice";

// ----------------------------------------------------------------------

function CpoTableToolbar() {
  const dispatch = useDispatch();

  const { Name, status } = useSelector((state) => state.cpo);

  function handleSelect(option, type) {
    switch (type) {
      case "name":
        dispatch(setCpoName(option || ""));
        break;
      case "status":
        dispatch(setCpoStatus(option || ""));
        break;
      default:
        break;
    }
    dispatch(setCpoListPageNo(1));
  }

  return (
    <Toolbar
      sx={{
        padding: "1.2rem 0rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 2, md: 4 }}
        width={"100%"}
      >
        {/* Search by Name */}
        <Stack width={"100%"}>
          <SearchInput
            placeholder="Search Name"
            width={"100%"}
            sx={{ color: "black", background: "#ffffff" }}
            onChange={(e) => handleSelect(e.target.value, "name")}
            value={Name}
          />
        </Stack>

        {/* Search by User or another search field */}
        <Stack width={"100%"}>
          <SearchInput
            placeholder="Search User"
            width={"100%"}
            sx={{ color: "black", background: "#ffffff" }}
            onChange={(e) => handleSelect(e.target.value, "user")} 
            value={""}  
          />
        </Stack>

        {/* Select Status */}
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
    </Toolbar>
  );
}

export default CpoTableToolbar;
