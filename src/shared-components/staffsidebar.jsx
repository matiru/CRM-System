import React from 'react'
import './sidebar.css'
import dashboard from '../images/dashbaord-icon.png'
import sales from '../images/sales-icon.png'
import products from '../images/products-icon.png'
import people from '../images/people-icon.jpg'
import report from '../images/report-icon.png'
import { Link } from 'react-router-dom';





function StaffSideBar() {

  return (
    
    <div className='sidebar'>


        <div className='sidebar-content' >
        <Link to="" className="sidebar-link">
         <img className ='sidebar-icon'src={dashboard}></img>
         <p>Dashboard</p>
         </Link>
        </div>
  
        
        <div className='sidebar-content'>
        <Link to="sales" className="sidebar-link">
         <img className ='sidebar-icon'src={sales}></img>
         <p>Sales</p>
         
        </Link>
        </div>
        <div className='sidebar-content'>
        <Link to="products" className="sidebar-link">

         <img className ='sidebar-icon'src={products}></img>
         <p>Products</p>
         </Link>
        </div>
      

        <div className='sidebar-content'>
          
        <Link to="customers" className="sidebar-link">
         <img className ='sidebar-icon'src={people}></img>
         <p>Customers</p>
         </Link>
        </div>
      



    </div>
  )
}

export default StaffSideBar;