import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', sales: 4000, profit: 2400 },
  { month: 'Feb', sales: 3000, profit: 1398 },
  { month: 'Mar', sales: 2000, profit: 9800 },
  { month: 'Apr', sales: 2780, profit: 3908 },
  { month: 'May', sales: 1890, profit: 4800 },
  { month: 'Jun', sales: 2390, profit: 3800 },
  { month: 'Jul', sales: 3490, profit: 4300 },
];

const ComposedChartExample = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ComposedChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="profit" stroke="#ff7300" />
    </ComposedChart>
  </ResponsiveContainer>
);

export default ComposedChartExample;
