import React from 'react';
import Plot from 'react-plotly.js';

const BoxPlotExample = () => {
  const data = [
    {
      type: 'box',
      y: [4000, 3000, 2000, 2780, 1890], // Example values
      boxpoints: 'all',
      jitter: 0.5,
      pointpos: -1.8,
      name: 'A',
    },
    {
      type: 'box',
      y: [4000, 4500, 5200, 5600, 5900],
      boxpoints: 'all',
      jitter: 0.5,
      pointpos: -1.8,
      name: 'B',
    },
  ];

  const layout = {
    title: 'Box Plot Example',
    xaxis: { title: 'Category' },
    yaxis: { title: 'Value' },
  };

  return <Plot data={data} layout={layout} />;
};

export default BoxPlotExample;
