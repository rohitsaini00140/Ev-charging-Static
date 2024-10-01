import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { fakeBarChartData } from "./fakeChartData";
import { optionsForBarChart } from "./fakeChartData";

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart() {

    return (
        <Bar options={optionsForBarChart} data={fakeBarChartData} />
    );

}

export default BarChart;