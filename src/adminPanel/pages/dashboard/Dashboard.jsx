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
const role = JSON.parse(sessionStorage.getItem("role"))

function Dashboard() {
  // User Data Dyamic
  const { data: usersData, isSuccess: usersSuccess } = useGetAllUserQuery()
  const allUsersData = usersSuccess && usersData?.users
  // const { data: projectsData, isSuccess: projectsSuccess } = useGetAllProjectsQuery()
  // const allprojectsData = projectsSuccess && projectsData?.projects
  // console.log(allprojectsData);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ m: 2 }} color="white">
        {`Welcome ${role?.user?.name} 👋`}
      </Typography>
      <Grid container spacing={1}>
        {/* <Grid container > */}
        <Grid size={{ xs: 12, md: role?.user?.role?.name === "Superadmin" ? 3 : 4 }}>
          <DashboardCard counterData = {allUsersData.length} data={dashboardCardData} />
        </Grid>
        <Grid size={{ xs: 12, md: role?.user?.role?.name === "Superadmin" ? 3 : 4 }}>
          <DashboardCard counterData = {allUsersData.length} data={dashboardCardData2} />
        </Grid>
        {role?.user?.role?.name === "Superadmin" && <Grid size={{ xs: 12, md: 3 }}>
          <DashboardCard counterData = {allUsersData.length} data={dashboardCardData3} />
        </Grid>}
        <Grid size={{ xs: 12, md: role?.user?.role?.name === "Superadmin" ? 3 : 4 }}>
          <DashboardCard counterData = {allUsersData.length} data={dashboardCardData4} />
        </Grid>
        {/* </Grid> */}
        {/* <Grid size={{ xs: 12, md: 8 }} sx={{ bgcolor: "#3e403d0f", borderRadius: "1rem", boxShadow: '0px 4px 12px rgba(87, 179, 62, 0.2)', }}>
          <Card sx={{ p: '2rem', bgcolor: "#3e403d0f" }}>
            <LineChart />
          </Card>
        </Grid> */}
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