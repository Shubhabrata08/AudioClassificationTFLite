import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: "Air Conditioner" },
  { id: 1, value: 15, label: "Car Horn" },
  { id: 2, value: 20, label: "Children Playing" },
  { id: 3, value: 30, label: "Dog Bark" }
];

export function Pieactive() {
  return (
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
      />
  );
}
