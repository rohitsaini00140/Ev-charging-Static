import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { LineChart } from '@mui/x-charts/LineChart';

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

// ----------------------------------------------------------------------

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      {/* <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={6}>
          <Card variant="outlined">
            <CardContent>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Card variant="outlined">
            <CardContent>
              <PieChart
                series={[
                  {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  },
                ]}
                height={200}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </Container>
  );
}

export default Dashboard;