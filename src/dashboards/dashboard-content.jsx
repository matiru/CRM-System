import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import './dashboard.css';


function DashboardContent(){
 // Sample data for sales chart
const data = [
    { name: 'monday', sales: 1200, target: 1000 },
    { name: 'tuesday', sales: 1400, target: 1000 },
    { name: 'wednesday', sales: 800, target: 1000 },
    { name: 'thursday', sales: 1600, target: 1000 },
    { name: 'friday', sales: 2000, target: 1000 },
    { name: 'saturday', sales: 2400, target: 1000 },
    { name: 'sunday', sales: 1800, target: 1000 },
  ];
  
    return (
      <div className="dashboard-container">
        <div className='dashboard-content-header'>
        <div className="dashboard-item">
          <h2>Sales Today</h2>
          <p className="dashboard-number">1200</p>
          <p className="dashboard-percent">+10%</p>
          <p className="dashboard-description">Compared to yesterday</p>
        </div>
        <div className="dashboard-item">
          <h2>Users Today</h2>
          <p className="dashboard-number">500</p>
          <p className="dashboard-percent">+20%</p>
          <p className="dashboard-description">Compared to last month</p>
        </div>
        <div className="dashboard-item">
          <h2>New Clients Today</h2>
          <p className="dashboard-number">20</p>
          <p className="dashboard-percent">+5%</p>
          <p className="dashboard-description">Compared to yesterday</p>
        </div>
        </div>

        <div className="chart-container">
          <h2>Sales of the week</h2>
          <BarChart width={1120} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={1000} stroke="red" label="Target" />
            <Bar dataKey="sales" fill="skyblue" />
          </BarChart>
        </div>
      </div>
    );
  }


export default DashboardContent;
