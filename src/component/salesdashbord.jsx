import React from 'react';
import {
  ComposedChart, Bar, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', sales: 4000, revenue: 2400, profit: 2400, users: 300, conversionRate: 25 },
  { month: 'Feb', sales: 3000, revenue: 1398, profit: 2210, users: 500, conversionRate: 32 },
  { month: 'Mar', sales: 2000, revenue: 9800, profit: 2290, users: 800, conversionRate: 28 },
  { month: 'Apr', sales: 2780, revenue: 3908, profit: 2000, users: 650, conversionRate: 35 },
  { month: 'May', sales: 1890, revenue: 4800, profit: 2181, users: 700, conversionRate: 30 },
  { month: 'Jun', sales: 2390, revenue: 3800, profit: 2500, users: 720, conversionRate: 34 },
  { month: 'Jul', sales: 3490, revenue: 4300, profit: 2100, users: 900, conversionRate: 40 }
];

const SalesDashboard = () => (
  <ResponsiveContainer width="100%" height={500}>
    <ComposedChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" name="Revenue" />
      <Bar dataKey="sales" barSize={20} fill="#413ea0" name="Sales" />
      <Line type="monotone" dataKey="profit" stroke="#ff7300" name="Profit" />
    </ComposedChart>
  </ResponsiveContainer>
);

export default SalesDashboard;
