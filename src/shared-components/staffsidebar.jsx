import React from 'react'
import './sidebar.css'
import dashboard from '../images/dashbaord-icon.png'
import sales from '../images/sales-icon.png'
import products from '../images/products-icon.png'
import people from '../images/people-icon.jpg'
import { NavLink } from 'react-router-dom';
import { NavNavLink } from "react-router-dom";





function StaffSideBar() {

  return (
    
    <div className='sidebar'>


        <div className='sidebar-content' >
        <NavLink to="dashboard" className="sidebar-link">
         <img className ='sidebar-icon'src={dashboard}></img>
         <p>Dashboard</p>
         </NavLink>
        </div>
  
        
        <div className='sidebar-content'>
        <NavLink to="sales" className="sidebar-link">
         <img className ='sidebar-icon'src={sales}></img>
         <p>Sales</p>
         
        </NavLink>
        </div>
        <div className='sidebar-content'>
        <NavLink to="products" className="sidebar-link">

         <img className ='sidebar-icon'src={products}></img>
         <p>Products</p>
         </NavLink>
        </div>
      

        <div className='sidebar-content'>
          
        <NavLink to="customers" className="sidebar-link">
         <img className ='sidebar-icon'src={people}></img>
         <p>Customers</p>
         </NavLink>
        </div>
      



    </div>
  )
}

export default StaffSideBar;