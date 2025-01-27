import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DashboardCard from "../../component/DashboardCard";
import {
  dashboardCardData,
  dashboardCardData2,
  dashboardCardData3,
  dashboardCardData4,
} from "./data";
// import LineChart from '../../component/charts/LineChart';
import TargetProgressBar from "../../component/targetProgressBar/TargetProgressBar";
import BarChart from "../../component/charts/BarChart";
import { useGetAllProjectsQuery } from "../../../globalState/projects/projectsApis";
import { useGetAllUserQuery } from "../../../globalState/user/userApis";
import { useGetAllClustersQuery } from "../../../globalState/cluster/clusterApis";
import { useGetAllDeviceQuery } from "../../../globalState/devices/deviceApis";
import { useSelector } from "react-redux";
import PieChart from "../../component/piechart/PieChart";
import PieChart2 from "../../component/piechart/PieChart2";
import Globalmap from "../../component/globalMap/Globalmap";
// const role = JSON.parse(sessionStorage.getItem("role"))
function Dashboard() {
  const { logInRole } = useSelector((state) => state.role);
  const { data: usersData, isSuccess: usersSuccess } = useGetAllUserQuery();
  const { data: projectsData, isSuccess: projectsSuccess } =
    useGetAllProjectsQuery();
  const { data: clusters, isSuccess: clustersSuccess } =
    useGetAllClustersQuery();
  const { data: devices, isSuccess: devicesSuccess } = useGetAllDeviceQuery();

  const allUsersData = usersSuccess ? usersData?.users : [];
  const allProjectsData = projectsSuccess ? projectsData?.projects : [];
  const allClusters = clustersSuccess ? clusters?.clusters : [];
  const allDevices = devicesSuccess ? devices?.devices : [];

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ m: 2 }}>
        {`Welcome ${logInRole?.user?.name} 👋`}
      </Typography>
      <Grid container spacing={1}>
        {/* <Grid container > */}
        <Grid
          size={{
            xs: 12,
            md: logInRole?.user?.role?.name === "Superadmin" ? 3 : 4,
            color: "black",
          }}
        >
          <DashboardCard
            counter={allUsersData.length}
            data={dashboardCardData}
          />
        </Grid>
        {logInRole?.user?.role?.name === "Superadmin" && (
          <Grid size={{ xs: 12, md: 3 }}>
            <DashboardCard
              counter={allClusters.length - 1}
              data={dashboardCardData3}
            />
          </Grid>
        )}

        <Grid
          size={{
            xs: 12,
            md: logInRole?.user?.role?.name === "Superadmin" ? 3 : 4,
          }}
        >
          <DashboardCard
            counter={allProjectsData.length}
            data={dashboardCardData2}
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: logInRole?.user?.role?.name === "Superadmin" ? 3 : 4,
          }}
        >
          <DashboardCard
            counter={allDevices.length}
            data={dashboardCardData4}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={"2.5rem"}>
        <Grid size={{ md: 6, xs: 12 }}>
          {/* <TargetProgressBar /> */}
          <PieChart />
        </Grid>

        <Grid size={{ md: 6, xs: 12 }}>
          {/* <TargetProgressBar /> */}
          <PieChart2 />
        </Grid>

        <Grid size={{ xs: 12, md: 12 }} sx={{ borderRadius: "1rem" }}>
          <Card sx={{ p: "2rem", bgcolor: "#ffff",  boxShadow: "0px 4px 12px rgba(87, 179, 62, 0.2)",}}>
            <BarChart />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }} sx={{ borderRadius: "1rem" }}>
        <Globalmap/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
