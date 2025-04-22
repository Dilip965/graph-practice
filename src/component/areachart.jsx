import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 2400 },
  { month: 'Feb', revenue: 1398 },
  { month: 'Mar', revenue: 9800 },
  { month: 'Apr', revenue: 3908 },
  { month: 'May', revenue: 4800 },
  { month: 'Jun', revenue: 3800 },
  { month: 'Jul', revenue: 4300 }
];

const RevenueAreaChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="revenue"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorRevenue)"
        name="Monthly Revenue"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default RevenueAreaChart;
