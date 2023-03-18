import React from 'react'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './products.css'

function Products() {
  return (
    <div className='products-container'>

        <div className='products-header'>  
        <div className='products-div'><NavLink to="" className="product-link"><p>products</p></NavLink></div> 
        <div className='products-div'> <NavLink to="addproduct" className="product-link"><p>+add product</p></NavLink></div>
        </div>
        <div className='products-content'>
        <Outlet /> 
        </div>
       
    </div>
  )
}

export default Products