import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Community Rewards", value: 30_000_000 },
  { name: "Founders & Team", value: 15_000_000 },
  { name: "Strategic Partnerships", value: 10_000_000 },
  { name: "Reserve Fund", value: 20_000_000 },
  { name: "Ecosystem Development", value: 25_000_000 },
];

const COLORS = ["#8B5CF6", "#EC4899", "#FACC15", "#22D3EE", "#10B981"];

const TokenomicsChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);

  return (
    <div className="flex justify-center items-center py-16 bg-gray-50" id="tokenomics">
      <div className="w-full max-w-lg">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={70}
              paddingAngle={3}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              isAnimationActive={true}
              animationDuration={800}
              label={({ name, percent, value }) =>
                `${name}: ${((percent || 0) * 100).toFixed(0)}% (${value.toLocaleString()})`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  cursor="pointer"
                  opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
                  stroke={activeIndex === index ? "#000" : ""}
                  strokeWidth={activeIndex === index ? 2 : 0}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => value.toLocaleString()} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TokenomicsChart;
