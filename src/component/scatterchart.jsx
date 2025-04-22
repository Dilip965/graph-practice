import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the scatter plot
const data = [
  { name: 'Portfolio 1', risk: 60, return: 75 },
  { name: 'Portfolio 2', risk: 55, return: 80 },
  { name: 'Portfolio 3', risk: 70, return: 70 },
  { name: 'Portfolio 4', risk: 75, return: 65 },
  { name: 'Portfolio 5', risk: 50, return: 85 },
  { name: 'Portfolio 6', risk: 40, return: 90 },
  { name: 'Portfolio 7', risk: 80, return: 60 },
  { name: 'Portfolio 8', risk: 45, return: 78 },
  { name: 'Portfolio 9', risk: 35, return: 82 },
  { name: 'Portfolio 10', risk: 50, return: 88 }
];

const ScatterPlotExample = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
      <CartesianGrid />
      <XAxis type="number" dataKey="risk" name="Risk" unit="%" />
      <YAxis type="number" dataKey="return" name="Return" unit="%" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Investment Portfolios" data={data} fill="#8884d8" />
    </ScatterChart>
  </ResponsiveContainer>
);

export default ScatterPlotExample;
