import React from 'react'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './sales.css'

function Sales() {
  return (
    <div className='sales-container'>

        <div className='sales-header'>  
        <div className='sales-div'><NavLink to="" className="sales-link"><p>sales</p></NavLink></div> 
        <div className='sales-div'> <NavLink to="addsale" className="sales-link"><p>+make a sale</p></NavLink></div>
        </div>
        <div className='sales-content'>
        <Outlet /> 
        </div>
       
    </div>
  )
}

export default Sales