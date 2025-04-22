import React, { useState } from 'react';
import Papa from 'papaparse';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts';

const FinancialDashboard = () => {
  const [investmentData, setInvestmentData] = useState([]);
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
          investmentID: row["InvestmentID"],
          assetClass: row["AssetClass"],
          amountInvested: parseFloat(row["AmountInvested"]),
          riskLevel: row["RiskLevel"],
          returnOverTime: parseFloat(row["ReturnOverTime"]),
          startDate: row["StartDate"],
          endDate: row["EndDate"],
        }));
        setInvestmentData(parsedData);
        
        // Portfolio Performance Data (Line Chart)
        const portfolio = parsedData.map(item => ({
          date: item.startDate,
          value: item.amountInvested * (1 + item.returnOverTime / 100)
        }));
        setPortfolioData(portfolio);
      }
    });
  };

  // Colors for PieChart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-6">
      <input type="file" accept=".csv" onChange={handleFileUpload} className="mb-4" />
      
      {/* Pie Chart for Investment Distribution */}
      <h2>Investment Distribution</h2>
      {investmentData.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={investmentData}
              dataKey="amountInvested"
              nameKey="assetClass"
              outerRadius={150}
              label
            >
              {investmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}

      {/* Line Chart for Portfolio Performance */}
      <h2>Portfolio Performance Over Time</h2>
      {portfolioData.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
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

export default FinancialDashboard;
