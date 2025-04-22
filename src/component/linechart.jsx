import React, { useState } from 'react';
import Papa from 'papaparse';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const PortfolioPerformanceChart = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  // Handle file upload and CSV parsing
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData = results.data.map(row => ({
          date: row["Date"],
          value: parseFloat(row["Value"])
        }));
        setPortfolioData(parsedData);
      }
    });
  };

  return (
    <div className="p-6">
      <h2>Portfolio Performance Over Time</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4"
      />
      
      {portfolioData.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={portfolioData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PortfolioPerformanceChart;
