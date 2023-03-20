import React from 'react'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './reports.css'

function Reports() {
  return (
    <div className='reports-container'>

        <div className='reports-header'>  
        <div className='reports-div'><NavLink to="" className="product-link"><p>Monthly</p></NavLink></div> 
        <div className='reports-div'><NavLink to="quaterly" className="product-link"><p>Quaterly</p></NavLink></div>
        <div className='reports-div'> <NavLink to="yearly" className="product-link"><p>Yearly</p></NavLink></div>
        </div>
        <div className='reports-content'>
        <Outlet /> 
        </div>
       
    </div>
  )
}

export default Reports