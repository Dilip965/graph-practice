import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Example data for investment risk vs return
const data = [
  { risk: 1, return: 5 },
  { risk: 2, return: 10 },
  { risk: 3, return: 15 },
  { risk: 4, return: 20 },
  { risk: 5, return: 25 },
  { risk: 6, return: 30 },
  { risk: 7, return: 35 },
  { risk: 8, return: 40 },
  { risk: 9, return: 45 },
  { risk: 10, return: 50 }
];

const InvestmentRiskReturnScatterPlot = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="risk" name="Risk Level" unit="%" />
      <YAxis dataKey="return" name="Return" unit="%" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Risk vs Return" data={data} fill="#8884d8" />
    </ScatterChart>
  </ResponsiveContainer>
);

export default InvestmentRiskReturnScatterPlot;
