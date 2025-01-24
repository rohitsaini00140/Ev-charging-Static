import React from "react";

import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Online", 8],
  ["Offline", 2],
  
];

const options = {
  title: "Charging Point Status",

  slices: {
    0: { color: "#28a745" }, // Green for "Available"
    2: { color: "#dc3545" }, // Red for "Under Maintenance"
  
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

function PieChart2() {
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

export default PieChart2;
