import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample Data for 10 Portfolios across 10 parameters
const data = [
  { category: 'Expected Return', Portfolio1: 75, Portfolio2: 80, Portfolio3: 70, Portfolio4: 65, Portfolio5: 85, Portfolio6: 90, Portfolio7: 60, Portfolio8: 78, Portfolio9: 82, Portfolio10: 88 },
  { category: 'Risk/Volatility', Portfolio1: 60, Portfolio2: 55, Portfolio3: 70, Portfolio4: 75, Portfolio5: 50, Portfolio6: 40, Portfolio7: 80, Portfolio8: 45, Portfolio9: 35, Portfolio10: 50 },
  { category: 'Liquidity', Portfolio1: 85, Portfolio2: 90, Portfolio3: 80, Portfolio4: 75, Portfolio5: 60, Portfolio6: 50, Portfolio7: 70, Portfolio8: 80, Portfolio9: 65, Portfolio10: 55 },
  { category: 'Diversification', Portfolio1: 70, Portfolio2: 60, Portfolio3: 75, Portfolio4: 80, Portfolio5: 65, Portfolio6: 85, Portfolio7: 50, Portfolio8: 70, Portfolio9: 75, Portfolio10: 90 },
  { category: 'Investment Horizon', Portfolio1: 60, Portfolio2: 70, Portfolio3: 65, Portfolio4: 55, Portfolio5: 85, Portfolio6: 80, Portfolio7: 70, Portfolio8: 60, Portfolio9: 50, Portfolio10: 40 },
  { category: 'Market Exposure', Portfolio1: 80, Portfolio2: 75, Portfolio3: 85, Portfolio4: 65, Portfolio5: 70, Portfolio6: 60, Portfolio7: 50, Portfolio8: 65, Portfolio9: 75, Portfolio10: 80 },
  { category: 'Innovation', Portfolio1: 65, Portfolio2: 60, Portfolio3: 70, Portfolio4: 75, Portfolio5: 90, Portfolio6: 85, Portfolio7: 55, Portfolio8: 80, Portfolio9: 60, Portfolio10: 85 },
  { category: 'Management Stability', Portfolio1: 70, Portfolio2: 85, Portfolio3: 60, Portfolio4: 65, Portfolio5: 80, Portfolio6: 90, Portfolio7: 75, Portfolio8: 50, Portfolio9: 80, Portfolio10: 85 },
  { category: 'Debt Levels', Portfolio1: 45, Portfolio2: 50, Portfolio3: 40, Portfolio4: 55, Portfolio5: 30, Portfolio6: 25, Portfolio7: 60, Portfolio8: 45, Portfolio9: 50, Portfolio10: 40 },
  { category: 'Customer Satisfaction', Portfolio1: 80, Portfolio2: 75, Portfolio3: 85, Portfolio4: 60, Portfolio5: 65, Portfolio6: 90, Portfolio7: 70, Portfolio8: 55, Portfolio9: 70, Portfolio10: 80 }
];

const InvestmentRadarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart outerRadius="80%" width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Portfolio 1" dataKey="Portfolio1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Portfolio 2" dataKey="Portfolio2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Radar name="Portfolio 3" dataKey="Portfolio3" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
        <Radar name="Portfolio 4" dataKey="Portfolio4" stroke="#d0ed57" fill="#d0ed57" fillOpacity={0.6} />
        <Radar name="Portfolio 5" dataKey="Portfolio5" stroke="#ff6f61" fill="#ff6f61" fillOpacity={0.6} />
        <Radar name="Portfolio 6" dataKey="Portfolio6" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Portfolio 7" dataKey="Portfolio7" stroke="#a4de6c" fill="#a4de6c" fillOpacity={0.6} />
        <Radar name="Portfolio 8" dataKey="Portfolio8" stroke="#ffb74d" fill="#ffb74d" fillOpacity={0.6} />
        <Radar name="Portfolio 9" dataKey="Portfolio9" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Radar name="Portfolio 10" dataKey="Portfolio10" stroke="#ff6347" fill="#ff6347" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default InvestmentRadarChart;
