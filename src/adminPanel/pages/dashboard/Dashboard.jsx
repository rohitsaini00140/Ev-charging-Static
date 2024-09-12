import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DashboardCard from '../../component/DashboardCard';
import { dashboardCardData, dashboardCardData2, dashboardCardData3 } from './data';
import LineChart from '../../component/charts/LineChart';
import TargetProgressBar from '../../component/targetProgressBar/TargetProgressBar';
import BarChart from '../../component/charts/BarChart';

// ----------------------------------------------------------------------

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>
      <Grid container spacing={2}>
        <Grid container size={{ xs: 12, md: 4 }} spacing={2}>
          <Grid size={{ xs: 12 }}>
            <DashboardCard data={dashboardCardData} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <DashboardCard data={dashboardCardData2} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <DashboardCard data={dashboardCardData3} />
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ bgcolor: "white", borderRadius: "1rem", boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', }}>
          <Card sx={{ p: '2rem' }}>
            <LineChart />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={"2.5rem"}>
        <Grid size={{ md: 4, xs: 12 }}>
          <TargetProgressBar />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ bgcolor: "white", borderRadius: "1rem", boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', }}>
          <Card sx={{ p: '2rem' }}>
            <BarChart />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;