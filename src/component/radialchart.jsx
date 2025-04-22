import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// Sample Data
const data = [
  { name: 'Page A', uv: 70 },
  { name: 'Page B', uv: 85 },
  { name: 'Page C', uv: 90 },
  { name: 'Page D', uv: 50 },
  { name: 'Page E', uv: 60 },
];

const RadialBarChartExample = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadialBarChart
        width={400}
        height={400}
        cx="50%" // Center of the chart (horizontal)
        cy="50%" // Center of the chart (vertical)
        innerRadius="20%" // The thickness of the circular bar
        outerRadius="80%" // The maximum radius of the bar
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar
          minAngle={15}
          background
          clockWise
          dataKey="uv"
          fill="#8884d8"
        />
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartExample;
