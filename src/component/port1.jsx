import React from 'react';
import { Treemap, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Portfolio A',
    children: [
      { name: 'Risk', value: 3, category: 'Risk' },
      { name: 'Return', value: 4, category: 'Return' },
      { name: 'Volatility', value: 3.2, category: 'Volatility' },
    ]
  },
  {
    name: 'Portfolio B',
    children: [
      { name: 'Risk', value: 2.5, category: 'Risk' },
      { name: 'Return', value: 4.5, category: 'Return' },
      { name: 'Volatility', value: 3.5, category: 'Volatility' },
    ]
  },
  // Continue simplifying with fewer categories
];

const PortfolioTreemapChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <Treemap
      data={data}
      dataKey="value"
      nameKey="name"
      aspectRatio={1}
      stroke="#fff"
      fill="#8884d8"
    >
      <Tooltip />
    </Treemap>
  </ResponsiveContainer>
);

export default PortfolioTreemapChart;
