import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import './dashboard.css';
import sales from '../images/todays-sales.png';
import newclients from '../images/new-clients.png';
import users from '../images/todays-users.png';
import refunded from '../images/todays-money.png';

function DashboardContent() {
  // Sample data for sales chart
  const data = [
    { name: 'monday', sales: 1200, target: 1000 },
    { name: 'tuesday', sales: 1400, target: 1200 },
    { name: 'wednesday', sales: 800, target: 1040 },
    { name: 'thursday', sales: 1600, target: 1500 },
    { name: 'friday', sales: 2000, target: 1000 },
    { name: 'saturday', sales: 2400, target: 1000 },
    { name: 'sunday', sales: 1800, target: 1000 },
  ];

  return (
    <div className="dashboard-container">
      <div className='dashboard-content-header'>
        <div className="dashboard-item">
          
          <div className="cardcard">
            <img className='item-ico' src={sales}></img>
            <span className='spanspan'>
              <p className="dashboard-title">Sales</p>
              <h4 className="dashboard-number">$1200 </h4>
            </span>
          </div>
              < hr className="dashboard-hr"/>
          <span className='spanspan2'>
            <p className="dashboard-percent">+10%</p>
            <p className="dashboard-description">than yesterday</p>
          </span>
        </div>


        <div className="dashboard-item">
        <div className="cardcard">
          <img className='item-ico' src={users}></img>
          <span className='spanspan'>
          <p className="dashboard-title">Users Today</p>
          <h4 className="dashboard-number">500 </h4>
          </span>
          </div>
          < hr className="dashboard-hr"/>
          <span className='spanspan2'>
            <p className="dashboard-percent">+10%</p>
            <p className="dashboard-description">than last month</p>
          </span>
        </div>
        <div className="dashboard-item">
        <div className="cardcard">
          <img className='item-ico' src={newclients}></img>
          <span className='spanspan'>
          <p className="dashboard-title">New Clients</p>
          <h4 className="dashboard-number">20 </h4>
          </span>
          </div>
          < hr className="dashboard-hr"/>
          <span className='spanspan2'>
            <p className="dashboard-percent">+10%</p>
            <p className="dashboard-description">than yesterday</p>
          </span>
        </div>

      </div>

      <div className="chart-container">
        <h4>Sales of the week </h4>
        <BarChart width={850} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={1400} stroke="red" label="Target" />
          <Bar dataKey="sales" fill="skyblue" />
        </BarChart>
      </div>
    </div>
  );
}


export default DashboardContent;
