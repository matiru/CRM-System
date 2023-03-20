import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

function YearlySales() {
  const data = [
    { name: '2018', sales: 30000, target: 25000 },
    { name: '2019', sales: 35000, target: 30000 },
    { name: '2020', sales: 40000, target: 35000 },
    { name: '2021', sales: 45000, target: 40000 },
  ];

  return (
    <div className="chart-container">
      <h4>Yearly Sales</h4>
      <BarChart width={980} height={400} data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={40000} stroke="red" label="Target" />
        <Bar dataKey="sales" fill="skyblue" />
      </BarChart>
    </div>
  );
}

export default YearlySales;
