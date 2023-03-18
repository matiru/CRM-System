import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import './users.css'

function CreateUser() {
  return (
    <div className= 'users1-container'>

        <div className= 'users1-header'>  
        <div className= 'users1-div'><Link to="" className="product-link"><p>add</p></Link></div> 
        <div className= 'users1-div'> <Link to="adduser" className="product-link"><p>+add customer</p></Link></div>
        </div>
        <div className= 'users1-content'>
        <Outlet /> 
        </div>
       
    </div>
  )
}

export default CreateUser