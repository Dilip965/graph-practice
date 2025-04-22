// BarChartComponent.jsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data
const data = [
  { name: 'Jan', productA: 4000, productB: 2400 },
  { name: 'Feb', productA: 3000, productB: 1398 },
  { name: 'Mar', productA: 2000, productB: 9800 },
  { name: 'Apr', productA: 2780, productB: 3908 },
  { name: 'May', productA: 1890, productB: 4800 },
  { name: 'Jun', productA: 2390, productB: 3800 },
  { name: 'Jul', productA: 3490, productB: 4300 },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="productA" fill="#8884d8" name="Product A" />
        <Bar dataKey="productB" fill="#82ca9d" name="Product B" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
