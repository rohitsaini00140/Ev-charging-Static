import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,   // Add this to register the bar chart type
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { fakeBarChartData } from "./fakeChartData";

// Register the necessary components for the bar chart
ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,    // Register BarElement
    Title,
    Tooltip,
    Legend
);

function BarChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Sales Growth',
            },
        },
    };

    return (
        <Bar options={options} data={fakeBarChartData} />
    );
}

export default BarChart;