import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the scatter plot
const productData = [
  { name: 'Product 1', price: 10, salesVolume: 1000 },
  { name: 'Product 2', price: 20, salesVolume: 950 },
  { name: 'Product 3', price: 30, salesVolume: 800 },
  { name: 'Product 4', price: 40, salesVolume: 600 },
  { name: 'Product 5', price: 50, salesVolume: 500 },
  { name: 'Product 6', price: 60, salesVolume: 450 },
  { name: 'Product 7', price: 70, salesVolume: 400 },
  { name: 'Product 8', price: 80, salesVolume: 350 },
  { name: 'Product 9', price: 90, salesVolume: 300 },
  { name: 'Product 10', price: 100, salesVolume: 250 }
];

const ProductPriceVsSalesChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
      <CartesianGrid />
      <XAxis type="number" dataKey="price" name="Price" unit="$" />
      <YAxis type="number" dataKey="salesVolume" name="Sales Volume" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Product Sales" data={productData} fill="#82ca9d" />
    </ScatterChart>
  </ResponsiveContainer>
);

export default ProductPriceVsSalesChart;
