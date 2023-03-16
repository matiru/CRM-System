import React from 'react'
import HeaderComponent from '../shared-components/header'
import Sidebar from '../shared-components/sidebar'
import './dashboard.css'
import { Outlet } from "react-router-dom";


function AdminDashBoard() {
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

export default AdminDashBoard