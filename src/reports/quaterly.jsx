import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

function QuarterlySales() {
  const data = [
    { name: 'Q1', sales: 8000, target: 7000 },
    { name: 'Q2', sales: 10000, target: 9000 },
    { name: 'Q3', sales: 12000, target: 10000 },
    { name: 'Q4', sales: 14000, target: 12000 },
  ];

  return (
    <div className="chart-container">
      <h4>Quarterly Sales</h4>
      <BarChart width={980} height={400} data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={10000} stroke="red" label="Target" />
        <Bar dataKey="sales" fill="skyblue" />
      </BarChart>
    </div>
  );
}

export default QuarterlySales;
