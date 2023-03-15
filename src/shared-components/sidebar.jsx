import React from 'react'
import './sidebar.css'
import dashboard from '../images/dashbaord-icon.png'
import sales from '../images/sales-icon.png'
import products from '../images/products-icon.png'
import people from '../images/people-icon.jpg'
import report from '../images/report-icon.png'






function Sidebar() {

  return (
    
    <div className='sidebar'>
        <div className='sidebar-content'>
         <img className ='sidebar-icon'src={dashboard}></img>
         <p>Dashboard</p>
        </div>

        <div className='sidebar-content'>
         <img className ='sidebar-icon'src={sales}></img>
         <p>Sales</p>
        </div>

        <div className='sidebar-content'>
         <img className ='sidebar-icon'src={products}></img>
         <p>Products</p>
        </div>


        <div className='sidebar-content'>
         <img className ='sidebar-icon'src={people}></img>
         <p>Users</p>
        </div>



        <div className='sidebar-content'>
         <img className ='sidebar-icon'src={report}></img>
         <p>Reports</p>
        </div>



    </div>
  )
}

export default Sidebar;