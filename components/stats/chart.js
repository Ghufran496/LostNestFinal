import React from "react";

import { PieChart, Pie, Tooltip } from "recharts";

export default function Example(props) {
  const data01 = [
    {
      name: "Total Posted Items",
      value: props.postscount.totalPosts ? props.postscount.totalPosts : 10,
    },
    {
      name: "Lost Posted Items",
      value: props.postscount.lostPosts ? props.postscount.lostPosts : 7,
    },
    {
      name: "Found Posted Items",
      value: props.postscount.foundPosts ? props.postscount.foundPosts : 3,
    },
  ];

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
