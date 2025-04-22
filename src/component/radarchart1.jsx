// RadarChartComponent.jsx
import React from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data
const data = [
  { subject: 'Math', A: 120, B: 110, C: 98 },
  { subject: 'English', A: 98, B: 130, C: 105 },
  { subject: 'Science', A: 110, B: 130, C: 115 },
  { subject: 'History', A: 130, B: 120, C: 125 },
  { subject: 'Geography', A: 115, B: 140, C: 120 },
];

const RadarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius={150} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Class A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Class B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Radar name="Class C" dataKey="C" stroke="#FF8042" fill="#FF8042" fillOpacity={0.6} />
        <Tooltip />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
