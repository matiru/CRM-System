import React from 'react'
import HeaderComponent from '../shared-components/header'
import Sidebar from '../shared-components/sidebar'
import DashboardContent from './dashboard-content'
import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
         <div className='dashboard-header'>
        <HeaderComponent/>
       </div>
        <div className='dashboard-content'>
        <Sidebar/>
        <DashboardContent/>
        </div>


    </div>
    
  )
}

export default Dashboard