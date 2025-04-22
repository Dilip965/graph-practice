import React from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Electronics', size: 1200 },
  { name: 'Clothing', size: 900 },
  { name: 'Home Appliances', size: 700 },
  { name: 'Books', size: 400 },
  { name: 'Sports', size: 300 },
  { name: 'Toys', size: 200 },
];

const TreemapChartExample = () => (
  <ResponsiveContainer width="100%" height={400}>
    <Treemap
      width={400}
      height={200}
      data={data}
      dataKey="size"
      ratio={4/3}
      stroke="#fff"
      fill="#8884d8"
    />
  </ResponsiveContainer>
);

export default TreemapChartExample;
