import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddOrUpdateClustersFields from "./AddOrUpdateClustersFields";
import { useParams } from "react-router-dom";
// ----------------------------------------------------------------------
function AddOrUpdateClusters() {
  let { id } = useParams();
  return (
    <Box
      sx={{
        height: 1,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p:{ sm: 4,xs:2 },
            width: 1,
            maxWidth: "100%",
            height: "auto",
            backgroundColor: "rgb(29, 40, 44)",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, color: "white" }}>
            {id ? "Update Cluster" : "Add Cluster"}
          </Typography>
          <AddOrUpdateClustersFields />
        </Card>
      </Stack>
    </Box>
  );
}
export default AddOrUpdateClusters;
