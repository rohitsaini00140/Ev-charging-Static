import React from "react";

import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Available", 3],
  ["Occupied", 2],
  ["Under Maintenance", 2],
  ["Offline", 2],
  ["Charging in Progress", 1],
];

const options = {
  title: "Charging Point Status",

  slices: {
    0: { color: "#28a745" }, // Green for "Available"
    1: { color: "#ffc107" }, // Yellow for "Occupied"
    2: { color: "#dc3545" }, // Red for "Under Maintenance"
    3: { color: "#6c757d" }, // Gray for "Offline"
    4: { color: "#007bff" }, // Blue for "Charging in Progress"
  },

  chartArea: {
    width: "90%", // Adjust the width of the chart area
    height: "80%", // Adjust the height of the chart area
  },
  legend: {
    position: "right", // Position the legend to the right
    textStyle: {
      fontSize: 12, // Adjust the text size for the legend
    },
  },
  titleTextStyle: {
    fontSize: 16, // Title font size
    bold: true, // Bold title
  },
  pieSliceTextStyle: {
    fontSize: 12, // Text size inside pie slices
  },
};

function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
  );
}

export default PieChart;
