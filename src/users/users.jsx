import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import './users.css'

function Users() {
  return (
    <div className='users-container'>

        <div className='users-header'>  
        <div className='users-div'><Link to="users-table" className="product-link"><p>users</p></Link></div> 
        <div className='users-div'> <Link to="addemployee" className="product-link"><p>+add employee</p></Link></div>
        <div className='users-div'> <Link to="addcustomer" className="product-link"><p>+add customer</p></Link></div>
        </div>
        <div className='users-content'>
        <Outlet /> 
        </div>
       
    </div>
  )
}

export default Users