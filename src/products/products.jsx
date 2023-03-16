import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import './products.css'

function Products() {
  return (
    <div className='products-container'>

        <div className='products-header'>
            
        
        <span><Link to="products-table" className="product-link">products</Link></span>
        
        <span><Link to="addproduct" className="product-link">+add product </Link></span>
        </div>

        <div className='products-content'>
        <Outlet /> 
        </div>
       
    </div>
  )
}

export default Products