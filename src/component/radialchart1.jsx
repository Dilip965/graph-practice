import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Marketing', value: 80, fill: '#8884d8' },
  { name: 'Sales', value: 70, fill: '#83a6ed' },
  { name: 'Development', value: 90, fill: '#8dd1e1' },
  { name: 'Customer Support', value: 60, fill: '#82ca9d' },
  { name: 'HR', value: 50, fill: '#a4de6c' },
];

const RadialBarChartExample = () => (
  <ResponsiveContainer width="100%" height={400}>
    <RadialBarChart
      cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={15} data={data}
    >
      <RadialBar
        minAngle={15}
        background
        clockWise
        dataKey="value"
      />
      <Legend
        iconSize={10}
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
      <Tooltip />
    </RadialBarChart>
  </ResponsiveContainer>
);

export default RadialBarChartExample;
