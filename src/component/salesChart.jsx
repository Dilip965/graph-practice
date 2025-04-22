// SalesChart.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', productA: 500, productB: 450 },
  { month: 'Feb', productA: 600, productB: 520 },
  { month: 'Mar', productA: 550, productB: 580 },
  { month: 'Apr', productA: 700, productB: 610 },
  { month: 'May', productA: 650, productB: 590 },
];

const SalesChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="productA" stroke="#8884d8" name="Product A" />
      <Line type="monotone" dataKey="productB" stroke="#82ca9d" name="Product B" />
    </LineChart>
  </ResponsiveContainer>
);

export default SalesChart;
