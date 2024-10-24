import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DashboardCard from '../../component/DashboardCard';
import { dashboardCardData, dashboardCardData2, dashboardCardData3, dashboardCardData4 } from './data';
// import LineChart from '../../component/charts/LineChart';
import TargetProgressBar from '../../component/targetProgressBar/TargetProgressBar';
import BarChart from '../../component/charts/BarChart';
import { useGetAllProjectsQuery } from '../../../globalState/projects/projectsApis';
import { useGetAllUserQuery } from '../../../globalState/user/userApis';
import { useGetAllClustersQuery } from '../../../globalState/cluster/clusterApis';
import { useGetAllDeviceQuery } from '../../../globalState/devices/deviceApis';
import { useSelector } from 'react-redux';

// const role = JSON.parse(sessionStorage.getItem("role"))

function Dashboard() {


  const { logInRole } = useSelector(state => state.role)




  const { data: usersData, isSuccess: usersSuccess } = useGetAllUserQuery();
  const { data: projectsData, isSuccess: projectsSuccess } = useGetAllProjectsQuery();
  const { data: clusters, isSuccess: clustersSuccess } = useGetAllClustersQuery();
  const { data: devices, isSuccess: devicesSuccess } = useGetAllDeviceQuery();

  const allUsersData = usersSuccess ? usersData?.users : [];
  const allProjectsData = projectsSuccess ? projectsData?.projects : [];
  const allClusters = clustersSuccess ? clusters?.clusters : [];
  const allDevices = devicesSuccess ? devices?.devices : [];

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ m: 2 }} color="white">
        {`Welcome ${logInRole?.user?.name} 👋`}
      </Typography>
      <Grid container spacing={1}>
        {/* <Grid container > */}
        {logInRole?.user?.role?.name === "Superadmin" && <Grid size={{ xs: 12, md: 3 }}>
          <DashboardCard counter={allClusters.length} data={dashboardCardData3} />
        </Grid>}
        <Grid size={{ xs: 12, md: logInRole?.user?.role?.name === "Superadmin" ? 3 : 4 }}>
          <DashboardCard counter={allUsersData.length} data={dashboardCardData} />
        </Grid>
        <Grid size={{ xs: 12, md: logInRole?.user?.role?.name === "Superadmin" ? 3 : 4 }}>
          <DashboardCard counter={allProjectsData.length} data={dashboardCardData2} />
        </Grid>
        <Grid size={{ xs: 12, md: logInRole?.user?.role?.name === "Superadmin" ? 3 : 4 }}>
          <DashboardCard counter={allDevices.length} data={dashboardCardData4} />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={"2.5rem"}>
        <Grid size={{ md: 4, xs: 12 }}>
          <TargetProgressBar />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ bgcolor: "#3e403d0f", borderRadius: "1rem", boxShadow: '0px 4px 12px rgba(87, 179, 62, 0.2)', }}>
          <Card sx={{ p: '2rem', bgcolor: "#3e403d0f" }}>
            <BarChart />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );

}

export default Dashboard;