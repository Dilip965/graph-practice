// AreaChartComponent.jsx
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data
const data = [
  { month: 'Jan', productA: 400, productB: 240 },
  { month: 'Feb', productA: 300, productB: 139 },
  { month: 'Mar', productA: 200, productB: 980 },
  { month: 'Apr', productA: 278, productB: 390 },
  { month: 'May', productA: 189, productB: 480 },
  { month: 'Jun', productA: 239, productB: 380 },
  { month: 'Jul', productA: 349, productB: 430 },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="productA" stroke="#8884d8" fillOpacity={1} fill="url(#colorA)" />
        <Area type="monotone" dataKey="productB" stroke="#82ca4d" fillOpacity={1} fill="url(#colorB)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
