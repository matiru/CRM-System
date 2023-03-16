import React from 'react'
import HeaderComponent from '../shared-components/header'
import './dashboard.css'
import StaffSideBar from '../shared-components/staffsidebar';

import { Outlet } from "react-router-dom";


function StaffDashBoard() {
  return (
    <div className='dashboard'>
         <div className='dashboard-header'>
        <HeaderComponent/>
       </div>
        <div className='dashboard-content'>
        <StaffSideBar/>
        <Outlet /> 
        </div>


    </div>
    
  )
}

export default StaffDashBoard