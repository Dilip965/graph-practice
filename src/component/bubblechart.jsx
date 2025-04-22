import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Example data for investment risk, return, and volume
const data = [
  { risk: 1, return: 5, volume: 400 },
  { risk: 2, return: 10, volume: 600 },
  { risk: 3, return: 15, volume: 800 },
  { risk: 4, return: 20, volume: 1000 },
  { risk: 5, return: 25, volume: 1200 },
  { risk: 6, return: 30, volume: 1400 },
  { risk: 7, return: 35, volume: 1600 },
  { risk: 8, return: 40, volume: 1800 },
  { risk: 9, return: 45, volume: 2000 },
  { risk: 10, return: 50, volume: 2200 }
];

const InvestmentBubbleChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="risk" name="Risk Level" unit="%" />
      <YAxis dataKey="return" name="Return" unit="%" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter
        name="Investment Data"
        data={data}
        fill="#8884d8"
        shape="circle"
        sizeKey="volume" // The 'volume' will determine the size of the bubble
      />
    </ScatterChart>
  </ResponsiveContainer>
);

export default InvestmentBubbleChart;
