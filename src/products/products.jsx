import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import './products.css'

function Products() {
  return (
    <div className='products-container'>

        <div className='products-header'>  
        <div className='products-div'><Link to="" className="product-link"><p>products</p></Link></div> 
        <div className='products-div'> <Link to="addproduct" className="product-link"><p>+add product</p></Link></div>
        </div>
        <div className='products-content'>
        <Outlet /> 
        </div>
       
    </div>
  )
}

export default Products