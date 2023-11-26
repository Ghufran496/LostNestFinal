import React, { PureComponent } from "react";

import { PieChart, Pie, Legend, Tooltip } from "recharts";
const data01 = [
  { name: "Total Posted Items", value: 10 },
  { name: "Lost Posted Items", value: 3 },
  { name: "Found Posted Items", value: 7 },
];

// const data02 = [
//   { name: "Total Posted Items", value: 10 },
//   { name: "Lost Posted Items", value: 3 },
//   { name: "Found Posted Items", value: 7 },
// ];

export default function Example() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#311465"
        label
      />

      <Tooltip />
    </PieChart>
  );
}
