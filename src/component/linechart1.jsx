// LineChartExample.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4700 },
  { month: 'May', revenue: 5200 },
  { month: 'Jun', revenue: 6000 },
];

const LineChartExample = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} dot={{ r: 6 }} activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartExample;
