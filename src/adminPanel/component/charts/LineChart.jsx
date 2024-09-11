import { Line } from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { fakeLineChartData } from "./fakeChartData";
import { Typography } from "@mui/material";
import { Grid } from "@mui/system";
import Iconify from "../Iconify";

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


function LineChart() {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            // title: {
            //     display: true,
            //     text: 'Average Sales Revenue',
            // },
        },
    };

    return (
        <>
            <Grid container sx={{ display: "flex", mb: "1rem" }} size={12}>
                <Grid size={12}><Typography mb={"1rem"} variant="h6">Average Sales Revenue</Typography></Grid>
                <Grid sx={{ bgcolor: "#f8f9fb", p: "1.2rem" }} size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ color: "text.secondary" }}>This Month Revenue</Typography>
                    <Typography variant="h4">72.6K<Typography sx={{ display: "inline", color: "rgb(32, 201, 151)", ml: ".6rem" }}><Iconify icon="ph:arrow-up-thin" sx={{ fontSize: "1rem" }} />25%</Typography></Typography>
                </Grid>
                <Grid sx={{ p: "1.2rem" }} size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ color: "text.secondary" }}>Last Month Revenue</Typography>
                    <Typography variant="h4">87.2k<Typography sx={{ display: "inline", color: "rgb(32, 201, 151)", ml: ".6rem" }}><Iconify icon="ph:arrow-up-thin" sx={{ fontSize: "1rem" }} />47%</Typography></Typography>
                </Grid>
            </Grid>
            <Line options={options} data={fakeLineChartData} />
        </>
    )
};

export default LineChart;