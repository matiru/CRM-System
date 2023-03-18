import React from 'react'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './users.css'

function Users() {
  return (
    <div className='users-container'>

        <div className='users-header'>  
        <div className='users-div'><NavLink to="" className="product-link"><p>users</p></NavLink></div> 
        <div className='users-div'><NavLink to="addemployee" className="product-link"><p>+add employee</p></NavLink></div>
        <div className='users-div'> <NavLink to="addcustomer" className="product-link"><p>+add customer</p></NavLink></div>
        </div>
        <div className='users-content'>
        <Outlet /> 
        </div>
       
    </div>
  )
}

export default Users