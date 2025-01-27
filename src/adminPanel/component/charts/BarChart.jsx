import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const years = Array.from({ length: 11 }, (_, i) => 2024 + i); // Generate years from 2024 to 2040
  const [selectedYear, setSelectedYear] = useState(2024); // Default year is 2024

  // Simulated data for each yea10
  const dataByYear = {
    2024: {
      increment: [65, null, 80, 81, null, null, null, 65, null, 80, 81, null],
      decrement: [null, 59, null, null, 56, 55, 40, null, 59, null, null, 56],
    },
    2025: {
      increment: [70, null, 90, 85, null, null, 20, 75, null, 90, 85, null],
      decrement: [null, 50, null, null, 50, 50, null, null, 50, null, null, 50],
    },
    2026: {
      increment: [65, null, 80, 81, null, null, null, 65, null, 80, 81, null],
      decrement: [null, 59, null, null, 56, 55, 40, null, 59, null, null, 56],
    },
    2027: {
        increment: [70, null, 90, 85, null, null, 20, 75, null, 90, 85, null],
        decrement: [null, 50, null, null, 50, 50, null, null, 50, null, null, 50],
    },
    2028: {
      increment: [65, null, 80, 81, null, null, null, 65, null, 80, 81, null],
      decrement: [null, 59, null, null, 56, 55, 40, null, 59, null, null, 56],
    },
    2029: {
        increment: [70, null, 90, 85, null, null, 20, 75, null, 90, 85, null],
        decrement: [null, 50, null, null, 50, 50, null, null, 50, null, null, 50],
    },
    2030: {
      increment: [65, null, 80, 81, null, null, null, 65, null, 80, 81, null],
      decrement: [null, 59, null, null, 56, 55, 40, null, 59, null, null, 56],
    },
    2031: {
        increment: [70, null, 90, 85, null, null, 20, 75, null, 90, 85, null],
        decrement: [null, 50, null, null, 50, 50, null, null, 50, null, null, 50],
    },
    2032: {
      increment: [65, null, 80, 81, null, null, null, 65, null, 80, 81, null],
      decrement: [null, 59, null, null, 56, 55, 40, null, 59, null, null, 56],
    },
    2033: {
        increment: [70, null, 90, 85, null, null, 20, 75, null, 90, 85, null],
        decrement: [null, 50, null, null, 50, 50, null, null, 50, null, null, 50],
    },
    2034: {
      increment: [65, null, 80, 81, null, null, null, 65, null, 80, 81, null],
      decrement: [null, 59, null, null, 56, 55, 40, null, 59, null, null, 56],
    },
  };

  // Get the data for the selected year
  const fakeBarChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Increment",
        data: dataByYear[selectedYear]?.increment || [], // Increment data for the selected year
        backgroundColor: "rgb(32, 201, 151)", // Green
        barThickness: 20,
        maxBarThickness: 40,
        minBarLength: 10,
      },
      {
        label: "Decrement",
        data: dataByYear[selectedYear]?.decrement || [], // Decrement data for the selected year
        backgroundColor: "rgb(255, 99, 132)", // Red
        barThickness: 20,
        maxBarThickness: 40,
        minBarLength: 10,
      },
    ],
  };

  const optionsForBarChart = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "black",
        },
      },
      title: {
        display: true,
        text: `Monthly Revenue Growth for ${selectedYear}`,
        color: "black",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
        grid: {
          color: "#ffff",
        },
      },
      y: {
        ticks: {
          color: "black",
        },
        grid: {
          color: "#ffff",
        },
      },
    },
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="year-select"
          style={{ marginRight: "10px", fontSize: "16px" }}
        >
          Select Year:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          style={{ padding: "5px", fontSize: "16px" }}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Bar options={optionsForBarChart} data={fakeBarChartData} />
    </div>
  );
}

export default BarChart;
