import React from 'react';
import Plot from 'react-plotly.js';

const ScatterChart1 = () => {
  const data = [
    {
      x: [1, 2, 3, 4, 5],
      y: [10, 11, 12, 13, 14],
      mode: 'markers',
      type: 'scatter',
      marker: { color: 'red', size: 12 }
    }
  ];

  const layout = {
    title: 'Simple Scatter Plot',
    xaxis: { title: 'X Axis' },
    yaxis: { title: 'Y Axis' }
  };

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
};

export default ScatterChart1;
