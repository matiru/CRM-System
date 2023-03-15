import React from 'react'
import HeaderComponent from '../shared-components/header'
import Sidebar from '../shared-components/sidebar'
import DashboardContent from './dashboard-content'
import './dashboard.css'
import { Outlet } from "react-router-dom";


function DashBoard() {
  return (
    <div className='dashboard'>
         <div className='dashboard-header'>
        <HeaderComponent/>
       </div>
        <div className='dashboard-content'>
        <Sidebar/>
        <Outlet />
        </div>


    </div>
    
  )
}

export default DashBoard