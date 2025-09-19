import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Community Rewards", value: 40 },
  { name: "Team & Advisors", value: 20 },
  { name: "Liquidity", value: 25 },
  { name: "Reserve", value: 15 },
];

const COLORS = ["#8B5CF6", "#EC4899", "#FACC15", "#22D3EE"];

const TokenomicsChart: React.FC = () => (
  <div className="flex justify-center py-16" id="tokenomics">
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

export default TokenomicsChart;