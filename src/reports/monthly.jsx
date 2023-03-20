import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

function MonthlyChart() {
  // Sample data for monthly chart
  const data = [
    { name: 'Jan', sales: 1200, target: 1000 },
    { name: 'Feb', sales: 1400, target: 1200 },
    { name: 'Mar', sales: 800, target: 1040 },
    { name: 'Apr', sales: 1600, target: 1500 },
    { name: 'May', sales: 2000, target: 1000 },
    { name: 'Jun', sales: 2400, target: 1000 },
    { name: 'Jul', sales: 1800, target: 1000 },
    { name: 'Aug', sales: 2200, target: 2000 },
    { name: 'Sep', sales: 1900, target: 1800 },
    { name: 'Oct', sales: 2100, target: 1700 },
    { name: 'Nov', sales: 1800, target: 1600 },
    { name: 'Dec', sales: 2200, target: 1900 },
  ];

  return (
    <div>
      <h4>Sales of the Year</h4>
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
  );
}

export default MonthlyChart;
