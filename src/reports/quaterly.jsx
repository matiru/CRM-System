import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

function QuarterlySales() {
  const data = [
    { name: 'Jan', sales: 1200 },
    { name: 'Feb', sales: 1400 },
    { name: 'Mar', sales: 800 },
    { name: 'Apr', sales: 1600 },
    { name: 'May', sales: 2000 },
    { name: 'Jun', sales: 2400 },
    { name: 'Jul', sales: 1800 },
    { name: 'Aug', sales: 2500 },
    { name: 'Sep', sales: 2200 },
    { name: 'Oct', sales: 2700 },
    { name: 'Nov', sales: 2800 },
    { name: 'Dec', sales: 3000 },
  ];

  const quarterlyData = [
    { name: 'Q1', sales: 3400 },
    { name: 'Q2', sales: 6000 },
    { name: 'Q3', sales: 7500 },
    { name: 'Q4', sales: 8500 },
  ];

  return (
    <div className="dashboard-container">
      <div className="chart-container">
        <h4>Quarterly Sales</h4>
        <BarChart width={980} height={400} data={quarterlyData}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={6000} stroke="red" label="Target" />
          <Bar dataKey="sales" fill="skyblue" />
        </BarChart>
      </div>

      <div className="chart-container">
        <h4>Monthly Sales Breakdown</h4>
        <BarChart width={980} height={400} data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={2000} stroke="red" label="Target" />
          <Bar dataKey="sales" fill="skyblue" />
        </BarChart>
      </div>
    </div>
  );
}

export default QuarterlySales;
