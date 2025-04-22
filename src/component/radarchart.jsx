import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend
} from 'recharts';

const data = [
  { month: 'Jan', conversionRate: 25 },
  { month: 'Feb', conversionRate: 32 },
  { month: 'Mar', conversionRate: 28 },
  { month: 'Apr', conversionRate: 35 },
  { month: 'May', conversionRate: 30 },
  { month: 'Jun', conversionRate: 34 },
  { month: 'Jul', conversionRate: 40 }
];

const ConversionRadarChart = () => (
  <ResponsiveContainer width="100%" height={500}>
    <RadarChart outerRadius={150} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="month" />
      <PolarRadiusAxis angle={30} domain={[0, 50]} />
      <Tooltip />
      <Legend />
      <Radar
        name="Conversion Rate (%)"
        dataKey="conversionRate"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  </ResponsiveContainer>
);

export default ConversionRadarChart;
