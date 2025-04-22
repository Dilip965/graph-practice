import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Example data for investment returns
const data = [
  { range: '0-10%', value: 5 },
  { range: '10-20%', value: 10 },
  { range: '20-30%', value: 15 },
  { range: '30-40%', value: 25 },
  { range: '40-50%', value: 30 },
  { range: '50-60%', value: 35 },
  { range: '60-70%', value: 40 },
  { range: '70-80%', value: 30 },
  { range: '80-90%', value: 20 },
  { range: '90-100%', value: 10 }
];

const InvestmentReturnsHistogram = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default InvestmentReturnsHistogram;
