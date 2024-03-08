import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: "Drilling" },
  { id: 1, value: 15, label: "Enginge Idling" },
  { id: 2, value: 20, label: "Gun Shot" },
];

export function Pieactive2() {
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
